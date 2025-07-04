import { TeacherCarouselType, TestimonyType } from '@/types';
import { Carousel } from 'primereact/carousel';
import React, { useState } from 'react'
import TeacherCarouselCard from './TeacherCarouselCard';

type Props = {}

const CarouselTeacher:React.FC = (props: Props) => {
    const [activeIndex, setActiveIndex] = useState(0)
    const [numScroll, setNumScroll] = useState(1)
    const responsiveOptions = [
        {
            breakpoint: '1400px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '1199px',
            numVisible: 3,
            numScroll: 1
        },
        {
            breakpoint: '767px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '575px',
            numVisible: 1,
            numScroll: 1
        }
    ];

   const testimonies:TeacherCarouselType[] = [
        {
            imageSrc: "/images/TONI.webp",
            name: "Mr. Toni",
            description:"Has over 30 years of experience in General English, more than 20 years in Academic Vocabulary and ESP, 15 years in TOEFL Structure, over 10 years in IELTS Reading, and more than 7 years in IELTS Writing.",
            education: "Master's Degree",
            placement: "LC Pare",
            alt: "Toni Image"
        },
        {
            imageSrc: "/images/EVA.webp",
            name: "Ms. Eva",
            description: "6 years of experience in teaching TOEFL (Listening, Structure, and Reading), IELTS (Academic & General Reading), Academic English (Reading) , Speaking Through Stories, and General English (Grammar & Speaking). TOEFL ITP 563.",
            education: "Master's Degree",
            alt: "EVA Image",
            placement: "LC Pare",
        },
        {
            imageSrc: "/images/YOS.webp",
            name: "Mr. Yos",
            description: "10 years of experience teaching General English and TOEFL, specializing in reading, writing, listening, speaking, and exam strategies.",
            education: "Bachelor's Degree",
            placement: "LC Pare",
            alt: "YOS Image"
        },
   ]

     const next = () => {
        setActiveIndex(prevState => {
            
            if(testimonies.length % numScroll == 0){
                return (prevState === Math.floor(testimonies.length/numScroll)-1 ) ? 0 : prevState + 1;
            }else{
                return (prevState === Math.floor(testimonies.length/numScroll)) ? 0 : prevState + 1;
            }
        })
    }

    const prev = () => {
        setActiveIndex((prevState) => (prevState === 0 ? 0 : prevState - 1));
    };

    const TestimonyTemplate = (teacher: TeacherCarouselType) => {
        return (
            <>
                <TeacherCarouselCard teacher={teacher}></TeacherCarouselCard>
            </>
             
        );
    };

    return (
        <div className="w-full px-5 md:px-0">
            <Carousel value={testimonies} numVisible={3} numScroll={numScroll} responsiveOptions={responsiveOptions} itemTemplate={TestimonyTemplate} pt={{previousButtonIcon:{className: 'text-white '}, previousButton:{className:'!hover:bg-yellow-400'}}} page={activeIndex} onPageChange={(e)=>{setActiveIndex(e.page)}} showNavigators={false} />

            <div className='flex justify-center gap-4'>
                <button onClick={prev} className='hover:cursor-pointer rounded-full bg-red-500 text-white hover:bg-white border-red-400 border-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" width={35} height={35} viewBox="0 0 8 8" className='fill-white hover:fill-black'><path d="M5 2L3 4l2 2l-1 1l-3-3l3-3"></path></svg>
                </button>
                <button onClick={next} className='hover:cursor-pointer rounded-full bg-red-500 text-white hover:bg-white border-red-400 border-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" width={35} height={35} viewBox="0 0 8 8" className='fill-white hover:fill-black'><path  d="m3 2l2 2l-2 2l1 1l3-3l-3-3"></path></svg>
                </button>
            </div>
        </div>
    )
}

export default CarouselTeacher