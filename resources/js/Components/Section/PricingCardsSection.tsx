import { GlobalContext } from '@/Providers/GlobalContext';
import React, { useContext, useState } from 'react'

type Props = {}

const PricingCardsSection: React.FC = (props: Props) => {

    const context = useContext(GlobalContext);
    if(!context){
        throw new Error("Landing Page not Under Global Provider");
    }
    const {state, actions} = context;

    return (
        <>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10 px-2'>
                <div className='flex justify-end'>
                    <div className="w-full max-w-md p-4 bg-transparent border border-gray-200 rounded-lg shadow-sm sm:p-8">
                        <h5 className="mb-2 text-xl font-medium text-gray-900">English Master</h5>
                        <hr className='w-40 border-b border-3 mb-3 text-red-500'/>
                        <div className="flex items-baseline text-gray-900 gap-4">
                            <span className="text-2xl font-bold text-red-500">Rp. 6.900.000,-</span>
                            <span className='px-3 py-1 text-sm bg-yellow-300 rounded-3xl'>16% off</span>
                        </div>
                        <div className='mt-2'>
                            <span className="text-lg text-gray-400 line-through">Rp. 7.147.619,-</span>
                        </div>
                        <div className='mt-2'>
                            <span className="text-base text-gray-900">Durasi: <span className='font-semibold text-red-500 text-lg'>4 Bulan</span></span>
                        </div>
                        <div className='mt-2'>
                            <p>Program dengan materi lengkap dari grammar, speaking, pronunciation, vocabulary, FREE praktik ke Bali.</p>
                        </div>
                        <hr className='text-gray-300 border-b border-1 mt-2' />
                        <ul role="list" className="space-y-1 mb-7 mt-4">
                            <li className="flex items-center">
                                <svg className="shrink-0 w-4 h-4 text-green-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                </svg>
                                <span className="text-base font-normal leading-tight text-gray-500 ms-3">Asrama English Area</span>
                            </li>
                            <li className="flex">
                                <svg className="shrink-0 w-4 h-4 text-green-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                </svg>
                                <span className="text-base font-normal leading-tight text-gray-500 ms-3">Tutor Pendamping Asrama</span>
                            </li>
                            <li className="flex">
                                <svg className="shrink-0 w-4 h-4 text-green-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                </svg>
                                <span className="text-base font-normal leading-tight text-gray-500 ms-3">Assessment Test</span>
                            </li>
                            <li className="flex items-center">
                                <svg className="shrink-0 w-4 h-4 text-green-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                </svg>
                                <span className="text-base font-normal leading-tight text-gray-500 ms-3">Qualified & Experienced Teacher</span>
                            </li>
                            <li className="flex">
                                <svg className="shrink-0 w-4 h-4 text-green-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                </svg>
                                <span className="text-base font-normal leading-tight text-gray-500 ms-3">4x main class dan 2x camp class</span>
                            </li>
                            <li className="flex">
                                <svg className="shrink-0 w-4 h-4 text-green-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                </svg>
                                <span className="text-base font-normal leading-tight text-gray-500 ms-3">Modul Pembelajaran</span>
                            </li>
                            <li className="flex">
                                <svg className="shrink-0 w-4 h-4 text-green-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                </svg>
                                <span className="text-base font-normal leading-tight text-gray-500 ms-3">Trip ke BALI</span>
                            </li>
                            <li className="flex">
                                <svg className="shrink-0 w-4 h-4 text-green-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                </svg>
                                <span className="text-base font-normal leading-tight text-gray-500 ms-3">GRATIS: Jaket + Batik + Kaos + E-Sertifikat ber-SK Diknas</span>
                            </li>
                        </ul>
                        <button onClick={()=>{actions.setVisibleModalConsul(true)}} type="button" className="text-white bg-red-500 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-200 font-medium rounded-lg text-lg px-5 py-1.5 inline-flex justify-center w-full text-center border border-black hover:cursor-pointer">Daftar English Master</button>
                    </div>
                </div>
                <div className='flex justify-start'>
                    <div className="w-full max-w-md p-4 bg-transparent border border-gray-200 rounded-lg shadow-sm sm:p-8">
                        <h5 className="mb-2 text-xl font-medium text-gray-900">English Master Plus</h5>
                        <hr className='w-40 border-b border-3 mb-3 text-red-500'/>
                        <div className="flex items-baseline text-gray-900 gap-4">
                            <span className="text-2xl font-bold text-red-500">Rp. 9.900.000,-</span>
                            <span className='px-3 py-1 text-sm bg-yellow-300 rounded-3xl'>16% off</span>
                        </div>
                        <div className='mt-2'>
                            <span className="text-lg text-gray-400 line-through">Rp. 10.147.619,-</span>
                        </div>
                        <div className='mt-2'>
                            <span className="text-base text-gray-900">Durasi: <span className='font-semibold text-red-500 text-lg'>6 Bulan</span></span>
                        </div>
                        <div className='mt-2'>
                            <p>Program dengan materi lengkap dari grammar, speaking, pronunciation, vocabulary, FREE praktik ke Bali, dan REAL TEST TOEFL ITP.</p>
                        </div>
                        <hr className='text-gray-300 border-b border-1 mt-2' />
                        <ul role="list" className="space-y-1 mb-7 mt-4">
                            <li className="flex items-center">
                                <svg className="shrink-0 w-4 h-4 text-green-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                </svg>
                                <span className="text-base font-normal leading-tight text-gray-500 ms-3">Asrama English Area</span>
                            </li>
                            <li className="flex">
                                <svg className="shrink-0 w-4 h-4 text-green-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                </svg>
                                <span className="text-base font-normal leading-tight text-gray-500 ms-3">Tutor Pendamping Asrama</span>
                            </li>
                            <li className="flex">
                                <svg className="shrink-0 w-4 h-4 text-green-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                </svg>
                                <span className="text-base font-normal leading-tight text-gray-500 ms-3">Assessment Test</span>
                            </li>
                            <li className="flex items-center">
                                <svg className="shrink-0 w-4 h-4 text-green-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                </svg>
                                <span className="text-base font-normal leading-tight text-gray-500 ms-3">Qualified & Experienced Teacher</span>
                            </li>
                            <li className="flex">
                                <svg className="shrink-0 w-4 h-4 text-green-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                </svg>
                                <span className="text-base font-normal leading-tight text-gray-500 ms-3">4x main class dan 2x camp class</span>
                            </li>
                            <li className="flex">
                                <svg className="shrink-0 w-4 h-4 text-green-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                </svg>
                                <span className="text-base font-normal leading-tight text-gray-500 ms-3">Modul Pembelajaran</span>
                            </li>
                            <li className="flex">
                                <svg className="shrink-0 w-4 h-4 text-green-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                </svg>
                                <span className="text-base font-normal leading-tight text-gray-500 ms-3">Trip ke BALI</span>
                            </li>
                            <li className="flex">
                                <svg className="shrink-0 w-4 h-4 text-green-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                </svg>
                                <span className="text-base font-normal leading-tight text-gray-500 ms-3">GRATIS: Jaket + Batik + Kaos + E-Sertifikat ber-SK Diknas</span>
                            </li>
                        </ul>
                        <button onClick={()=>{actions.setVisibleModalConsul(true)}} type="button" className="text-white bg-red-500 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-200 font-medium rounded-lg text-lg px-5 py-1.5 inline-flex justify-center w-full text-center border border-black hover:cursor-pointer">Daftar English Master Plus</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PricingCardsSection