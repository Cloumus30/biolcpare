import React from 'react'
import LandingLayout from '@/Layouts/LandingLayout'

type Props = {}

const landing:React.FC =  ({}: Props) => {
  return (
    <LandingLayout title='Landing'>
      <div className='grid grid-cols-1 md:grid-cols-2 justify-center md:pt-20 pb-96'>

            <div className="w-full flex justify-center">
                <div className="ml-40 me-10 mt-32">
                    <p className="text-primary-font text-2xl mb-6 font-semibold">Hello Everyone, I Am</p>
                    <h1 className="text-6xl text-[#120D40] font-bold">Cloudias Imani Pradana</h1>

                    <div className="bg-primary-font p-5 rounded-md mt-16">
                        <p className="text-white text-center text-2xl">Fullstack Developer Enthusiast</p>
                    </div>
                    <div className="mt-6">
                        <button className="focus:outline-none text-white bg-[#120D40] hover:bg-[#221970] focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xl px-5 py-2.5 me-2 mb-2">
                            Contact Me
                        </button>
                    </div>
                </div>
            </div>

             <div className="w-full">
                <div className="relative w-full h-full mt-16 md:mt-0">
                    <div className="absolute top-0 -z-10">
                        <img src="/images/Pare.webp" alt="Picture Of Dana" className="h-[30em] md:h-full" />
                    </div>
                </div>
             </div>
      </div>
    </LandingLayout>
  )
}

export default landing;