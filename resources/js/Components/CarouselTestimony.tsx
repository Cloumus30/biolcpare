import { TestimonyType } from '@/types';
import { Carousel } from 'primereact/carousel';
import React, { useState } from 'react'

type Props = {}

const CarouselTestimony:React.FC = (props: Props) => {
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

   const testimonies:TestimonyType[] = [
        {
            imageSrc: "/images/2_1.webp",
            name: "Bagus",
            occupation: "Polisi",
            testimony: "Melangkah tanpa persiapan matang buat aku harus lapang dada. Aku ga nyerah dan akhirnya ambil kursus di LC buat persiapan pendaftaran tahun depannya. Ternyata worth it banget, I got much experience. Finally, I got what I dreamed of!",
            alt: "2_1 Image"
        },
        {
            imageSrc: "/images/5.webp",
            name: "Alief Rasyafara",
            occupation: "Putra Kebudayaan Sulsel 2018",
            testimony: "Pengalaman yang saya dapatkan luar biasa dari basic sampai jadi English master. Selama di LC, Saya mendapat materi yang luar biasa dari teacher dan tutor. Dapet teman baru yang saling mendukung dari sabang - merauke. ",
            alt: "5 Image"
        },
        {
            imageSrc: "/images/6.webp",
            name: "Elvira R",
            occupation: "English Teacher & Penulis Buku",
            testimony: " Weekly meeting, gathering, yasinan, table manner, outbound, jalan-jalan ke Bali, best camp competition, dan banyak lagi kegiatan asik lainnya. Bikin pertemanan naik level jadi keluarga yang berjuang bareng buat bisa bahasa Inggris.",
            alt: "6 Image"
        },
        {
            imageSrc: "/images/7.webp",
            name: "Mohamad Arbaz",
            occupation: "Pemeran FTV Indosiar",
            testimony: "Bagi saya LC itu tempat yang paling menyenangkan, di sana saya mendapatkan banyak hal baru; teman, pengalaman, dan yang paling penting saya belajar manajemen waktu dengan baik. Sangat berharga dan nggak bisa dilupain sampe sekarang. ",
            alt: "7 Image"
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

    const TestimonyTemplate = (testimony: TestimonyType) => {
        return (
            <div className='flex justify-center'>
                <div className="max-w-sm p-6 pb-3 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-yellow-500 hover:shadow-lg hover:-translate-x-2 hover:-translate-y-2 transition-all ease-in duration-200">
                    <h5 className="mb-2 tracking-tight text-gray-900 flex gap-2">
                    <img className='rounded-full w-20' src={testimony.imageSrc} alt={testimony.alt} />
                    <div>
                        <p className='text-lg font-bold'>{testimony.name}</p>
                        <p>{testimony.occupation}</p>
                    </div>
                    </h5>
                    <hr className='text-gray-300' />
                    <p className="mt-2 font-normal text-gray-700">{testimony.testimony}</p>
                </div>
            </div>
             
        );
    };

    return (
        <div className="w-full px-5 md:px-0">
            <Carousel value={testimonies} numVisible={3} numScroll={numScroll} responsiveOptions={responsiveOptions} itemTemplate={TestimonyTemplate} pt={{previousButtonIcon:{className: 'text-white '}, previousButton:{className:'!hover:bg-yellow-400'}}} page={activeIndex} onPageChange={(e)=>{setActiveIndex(e.page)}} showNavigators={false} />

            <div className='flex justify-center gap-4'>
                <button onClick={prev} className='hover:cursor-pointer rounded-full text-white hover:bg-white border-white border-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" width={35} height={35} viewBox="0 0 8 8" className='fill-white hover:fill-black'><path d="M5 2L3 4l2 2l-1 1l-3-3l3-3"></path></svg>
                </button>
                <button onClick={next} className='hover:cursor-pointer rounded-full text-white hover:bg-white border-white border-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" width={35} height={35} viewBox="0 0 8 8" className='fill-white hover:fill-black'><path  d="m3 2l2 2l-2 2l1 1l3-3l-3-3"></path></svg>
                </button>
            </div>
        </div>
    )
}

export default CarouselTestimony