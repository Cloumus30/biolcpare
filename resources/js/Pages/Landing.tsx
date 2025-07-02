import React from 'react'
import LandingLayout from '@/Layouts/LandingLayout'

type Props = {}

const landing:React.FC =  ({}: Props) => {
  return (
    <LandingLayout title='Landing'>
      <div className='grid grid-cols-1 md:grid-cols-2 justify-center md:pt-20 pb-96 bg-gradient-to-b from-red-500 to-red-600'>
        <div className="w-full flex justify-center">
            <div className="md:ml-40 md:me-10 mt-32">
                <h1 className="text-4xl text-center text-gray-100 font-bold">Yuk, Belajar Bahasa Inggris Asik di Kampung Inggris LC!</h1>

                <div className="bg-primary-font p-5 rounded-md mt-4">
                    <p className="text-white text-center text-xl">Metode fun dan English area, bikin kamu semangat belajar. Materi lengkap mulai dari grammar, pronunciation, dan speaking.</p>
                </div>
                <div className="flex justify-center pt-6">
                    <button className="bg-yellow-400 hover:bg-yellow-500 text-black text-lg font-bold py-3.5 px-10 rounded-lg shadow-lg transition duration-300 hover:cursor-pointer">
                        Join Sekarang
                    </button>
                </div>
            </div>
        </div>

        <div className="w-full">
          <div className="w-full h-full mt-16 md:mt-0">
              <div className="">
                  <img src="/images/Pare.webp" alt="Picture Of Dana" className="h:full md:h-full" />
              </div>
          </div>
        </div>
      </div>
    </LandingLayout>
  )
}

export default landing;