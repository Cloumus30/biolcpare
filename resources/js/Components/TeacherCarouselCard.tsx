import { TeacherCarouselType, TestimonyType } from '@/types'
import React, { useState } from 'react'

type Props = {
    teacher: TeacherCarouselType
}

const TeacherCarouselCard:React.FC<Props> = (props: Props) => {
    const [isLineClamp, setIsLineClamp] = useState(true);
  return (
    <div className='flex justify-center'>
        <div className="max-w-sm p-6 pb-3 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-yellow-500 hover:shadow-lg hover:-translate-x-2 hover:-translate-y-2 transition-all ease-in duration-200">
            <div className='flex justify-center bg-gradient-to-b from-red-100 to-red-600 rounded-2xl'>
                <img className='max-h-80' src={props.teacher.imageSrc} alt={props.teacher.alt} />
            </div>
            <div className="mb-2 tracking-tight text-gray-900 flex gap-2">
                <div>
                    <p className='text-xl py-2 font-bold'>{props.teacher.name}</p>
                    <div className='flex gap-10'>
                        <p className='bg-yellow-400 py-1.5 px-4 text-sm rounded-4xl'>{props.teacher.placement}</p>
                        <p className='bg-red-400 py-1.5 px-4 text-sm rounded-4xl text-white'>{props.teacher.education}</p>
                    </div>
                </div>
            </div>
            <hr className='text-gray-300' />
            <p className={`mt-2 font-normal text-gray-700 ${isLineClamp ? 'line-clamp-3' : ''}`}>{props.teacher.description}</p>
            <a className='hover:cursor-pointer hover:underline text-red-500' onClick={()=>{setIsLineClamp(!isLineClamp)}}>{isLineClamp ? "Read More" : "Read Less"}</a>
        </div>
    </div>
  )
}

export default TeacherCarouselCard