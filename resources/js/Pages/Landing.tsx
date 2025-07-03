import React from 'react'
import LandingLayout from '@/Layouts/LandingLayout'
import { Button } from 'primereact/button'; 
import GalleryCarousel from '@/Components/Partials/GalleryCarousel';

type Props = {}

const landing:React.FC =  ({}: Props) => {
  return (
    <LandingLayout title='Landing'>
      <div className='grid grid-cols-1 md:grid-cols-2 justify-center md:pt-20 pb-8 md:pb-96 bg-gradient-to-b from-red-500 to-red-600'>
        <div className="w-full flex justify-center">
            <div className="md:ml-24 md:me-10 mt-32">
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

      <div className='bg-white pt-8'>
        <div>
            <h3 className='text-xl text-center underline decoration-amber-400'>Hi, LC'ers!</h3>
            <h2 className='text-3xl text-center text-red-500 font-semibold mt-2'>Welcome to Kampung Inggris LC - Language Center</h2>
        </div>
        
        <div className='grid grid-cols-1 md:grid-cols-2 gap-1 justify-center w-full md:pt-10'>
          <div className="w-full flex justify-center md:pt-10 px-8 md:pl-10 ">
            <div>
              <h2 className='text-3xl text-center text-red-500 font-semibold mt-8'>Paling Dicari di Pare</h2>

              <p className='md:text-lg mt-4'>
                Lembaga kursus bahasa Inggris TERBESAR dan TERFAVORIT di Kampung Inggris Pare.
              </p>
              <p className="italic px-4 py-2 w-10/12 bg-yellow-200 text-wrap overflow-hidden mt-2">Dengan sistem English boarding course LC menjadikan pembelajaran lebih intensif, sehingga member terbiasa berbahasa Inggris.</p>
              <p className='md:text-lg mt-2'>Pembelajaran lengkap all materi grammar, pronunciation, vocabulary, dan speaking.</p>
              <p className='md:text-lg mt-4'>Kampung Inggris LC telah tersertifikasi SK Dinas No.421.9/4352/418.20/2022.</p>
            </div>
          </div>
          <div className='md:pe-10'>
              {/* <div className="flex justify-end gap-2">
                  <img src="/images/8.webp" alt="Picture Of Dana" className="h-60" />
              </div> */}
              <div className="flex justify-start">
                  <video src="/videos/LC_Pare_skuuyf.mp4" controls className='h-full px-4 pt-3 md:px-0 md:pt-0'></video>
              </div>
              {/* <div className="flex justify-end gap-2">
                  <img src="/images/9.webp" alt="Picture Of Dana" className="h-60" />
              </div> */}
          </div>
        </div>
      </div>


      <div className='pt-28 pb-10'>
        <div className='text-center pb-10 px-4'>
          <h2 className='md:text-4xl text-3xl font-semibold'> <span className='text-red-600 md:text-5xl text-4xl italic'>83.333+</span> Alumni Pilih LC</h2>
          <div className='flex justify-center pt-2'>
            <p className='md:w-1/3'>Bukan cuma soal teori, semua didesain biar kamu makin lancar, pede, dan siap pakai bahasa Inggris di dunia nyata!</p>
          </div>
        </div>

        <div className='flex justify-center'>
          <div className='grid grid-cols-1 justify-items-center md:grid-cols-2 md:gap-x-20 md:gap-y-8 px-4 gap-y-5'>
            
            <div className="max-w-sm p-6 pb-3 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-yellow-500 hover:shadow-lg hover:-translate-x-2 hover:-translate-y-2 transition-all ease-in duration-200">
                <h5 className="mb-2 tracking-tight text-gray-900 flex gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width={45} height={45} viewBox="0 0 16 16"><path fill="#df1010" d="M11 3V0H2v14H0v1h7v-5h2V8h5V3zm-5 7H4V8h2zm0-3H4V5h2zm0-3H4V2h2zm3 3H7V5h2zm0-3H7V2h2zm4 3h-2V5h2zm1 4h2v5H8v-5h2V9h4z"></path></svg>
                  <div>
                    <p className='text-lg font-bold'>English Area</p>
                    <p>Langsung praktik, bukan cuma teori!</p>
                  </div>
                  </h5>
                <hr className='text-gray-300' />
                <p className="mt-2 font-normal text-gray-700">Kamu bakal ngobrol pakai English tiap hari bareng teman-teman satu tujuan. Speaking-mu dijamin makin natural!</p>
            </div>

            <div className="max-w-sm p-6 pb-3 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-yellow-500 hover:shadow-lg hover:-translate-x-2 hover:-translate-y-2 transition-all ease-in duration-200">
                <h5 className="mb-2 tracking-tight text-gray-900 flex gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width={50} height={50} viewBox="0 0 24 24"><path fill="#ff1212" d="M21 17v-6.9L12 15L1 9l11-6l11 6v8zm-9 4l-7-3.8v-5l7 3.8l7-3.8v5z"></path></svg>
                  <div>
                    <p className='text-lg font-bold'>Experienced Teacher</p>
                    <p>Dibimbing teacher berpengalaman!</p>
                  </div>
                  </h5>
                <hr className='text-gray-300' />
                <p className="mt-2 font-normal text-gray-700">Teacher LC tuh kompeten dan siap bantu kamu berkembang dari nol sampai mahir!</p>
            </div>

            <div className="max-w-sm p-6 pb-3 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-yellow-500 hover:shadow-lg hover:-translate-x-2 hover:-translate-y-2 transition-all ease-in duration-200">
                <h5 className="mb-2 tracking-tight text-gray-900 flex gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width={50} height={50} viewBox="0 0 24 24"><path fill="#ff1212" fillRule="evenodd" d="m19.293 7.038l.063.037a1.17 1.17 0 0 1 .577 1.006v7.836a1.16 1.16 0 0 1-.571 1.006l-6.777 3.923a1.14 1.14 0 0 1-1.144 0l-6.665-3.86a1.4 1.4 0 0 1-.503-.508a1.4 1.4 0 0 1-.207-.694V8.081c0-.206.075-.407.175-.582q.16-.264.424-.424l.042-.026a1 1 0 0 1 .074-.053l2.552-1.467l4.108-2.377a1.14 1.14 0 0 1 1.112-.016q.106.04.207.096l6.47 3.759q.033.021.063.047m-7.56 1.61c.257.114.535.174.816.174h.016c.873 0 1.561-.508 1.561-1.16l-.005-.015a1.03 1.03 0 0 0-.53-.858c-.005-.005-.015-.016-.026-.016l-1.842-1.08a.318.318 0 0 0-.47.176a.33.33 0 0 0 .05.306q.04.052.097.085l1.773 1.043l.096.053l.037.021a.4.4 0 0 1 .174.296c-.01.233-.397.493-.915.493a1.4 1.4 0 0 1-.53-.095L9.843 6.8a.32.32 0 0 0-.44.122a.334.334 0 0 0 .123.444zm3.633 8.616a.25.25 0 0 0 .11.03h.006a.25.25 0 0 0 .196-.107c.042-.055.04-.129.038-.205l-.001-.054v-2.53l1.1 1.603a.28.28 0 0 0 .144.117a.2.2 0 0 0 .164-.016a.3.3 0 0 0 .127-.132a.4.4 0 0 0 .053-.207v-3.399c0-.1-.037-.19-.09-.26a.25.25 0 0 0-.196-.105a.26.26 0 0 0-.201.106c-.043.062-.043.147-.043.233v2.446l-1.1-1.61a.27.27 0 0 0-.138-.116a.23.23 0 0 0-.17.016a.28.28 0 0 0-.127.132a.4.4 0 0 0-.053.212v3.51a.44.44 0 0 0 .095.26a.25.25 0 0 0 .086.076m-8.842-.701a.32.32 0 0 1-.233-.106v-.006a.4.4 0 0 1-.106-.248v-4.056q0-.091.042-.175q.043-.082.122-.132a.31.31 0 0 1 .323 0l2.52 1.546a.382.382 0 0 1 .042.593a.3.3 0 0 1-.11.064a.3.3 0 0 1-.25-.032l-2.16-1.43v1.44l.032.016l1.985 1.186a.35.35 0 0 1 .143.175a.39.39 0 0 1-.1.424a.32.32 0 0 1-.201.074a.3.3 0 0 1-.16-.048L6.715 14.83v1.372c0 .19-.016.36-.19.36" clipRule="evenodd"></path></svg>
                  <div>
                    <p className='text-lg font-bold'>Supporting Fun Events</p>
                    <p>Belajar + seru-seruan bareng!</p>
                  </div>
                  </h5>
                <hr className='text-gray-300' />
                <p className="mt-2 font-normal text-gray-700">Ada event seru yang bikin kamu makin pede tampil dan ningkatin skill public speaking!</p>
            </div>

            <div className="max-w-sm p-6 pb-3 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-yellow-500 hover:shadow-lg hover:-translate-x-2 hover:-translate-y-2 transition-all ease-in duration-200">
                <h5 className="mb-2 tracking-tight text-gray-900 flex gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width={50} height={50} viewBox="0 0 24 24"><path fill="none" stroke="#ff1212" strokeLinecap="round" strokeWidth={1.3} d="M8.737 8.737a21.5 21.5 0 0 1 3.308-2.724m0 0c3.063-2.026 5.99-2.641 7.331-1.3c1.827 1.828.026 6.591-4.023 10.64s-8.812 5.85-10.64 4.023c-1.33-1.33-.736-4.218 1.249-7.253m6.083-6.11c-3.063-2.026-5.99-2.641-7.331-1.3c-1.827 1.828-.026 6.591 4.023 10.64m3.308-9.34a21.5 21.5 0 0 1 3.308 2.724m2.775 3.386c1.985 3.035 2.579 5.923 1.248 7.253c-1.336 1.337-4.245.732-7.295-1.275M14 12a2 2 0 1 1-4 0a2 2 0 0 1 4 0Z"></path></svg>
                  <div>
                    <p className='text-lg font-bold'>Metode Berkualitas</p>
                    <p>Program intensif yang lengkap!</p>
                  </div>
                  </h5>
                <hr className='text-gray-300' />
                <p className="mt-2 font-normal text-gray-700">Speaking, grammar, sampai pronunciation—semua dibungkus dalam metode belajar terintegrasi bareng lingkungan english area.</p>
            </div>

            <div className="max-w-sm p-6 pb-3 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-yellow-500 hover:shadow-lg hover:-translate-x-2 hover:-translate-y-2 transition-all ease-in duration-200">
                <h5 className="mb-2 tracking-tight text-gray-900 flex gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width={50} height={50} viewBox="0 0 48 48"><g fill="none" stroke="#ff1212" strokeWidth={2.4}><path d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.955 4 24s8.954 20 20 20Z"></path><path strokeLinecap="round" d="M6 30.986q3.948 1.582 5.684 0c1.736-1.584.238-6.388 2.67-7.713c2.43-1.325 6.135 4.548 9.597 2.616c3.462-1.933-.326-7.087 2.076-9.176s5.527.267 6.073-3.227s-2.548-1.978-3.142-5.28q-.592-3.3 0-3.47m.062 38.614q-2.81-2.877-2.023-5.348c.787-2.472 2.086-2.326 2.652-3.854s-1.033-3.705 2.515-5.565q3.549-1.86 9.759 4.311"></path></g></svg>
                  <div>
                    <p className='text-lg font-bold'>Berstandar Internasional</p>
                    <p>Level kamu diukur pakai standar global!</p>
                  </div>
                  </h5>
                <hr className='text-gray-300' />
                <p className="mt-2 font-normal text-gray-700">Belajar di LC sesuai CEFR (Common European Framework of Reference for Languages).</p>
            </div>

            <div className="max-w-sm p-6 pb-3 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-yellow-500 hover:shadow-lg hover:-translate-x-2 hover:-translate-y-2 transition-all ease-in duration-200">
                <h5 className="mb-2 tracking-tight text-gray-900 flex gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width={50} height={50} viewBox="0 0 48 48"><path fill="#e71919" d="M40 40c-6.9 0-16 4-16 4V22s9-4 18-4z"></path><path fill="#e94848" d="M8 40c6.9 0 16 4 16 4V22s-9-4-18-4z"></path><g fill="#fff04d"><circle cx={24} cy={12} r={8}></circle><path d="M41 32h1c.6 0 1-.4 1-1v-4c0-.6-.4-1-1-1h-1c-1.7 0-3 1.3-3 3s1.3 3 3 3M7 26H6c-.6 0-1 .4-1 1v4c0 .6.4 1 1 1h1c1.7 0 3-1.3 3-3s-1.3-3-3-3"></path></g></svg>
                  <div>
                    <p className='text-lg font-bold'>Cocok Buat Pemula</p>
                    <p>Baru mulai belajar? No problem!</p>
                  </div>
                  </h5>
                <hr className='text-gray-300' />
                <p className="mt-2 font-normal text-gray-700">Semua materi disusun dari basic. Kamu akan dibimbing step-by-step sampai paham dan percaya diri ngomong English.</p>
            </div>

          </div>
        </div>
      </div>

      <section className="bg-gradient-to-b from-red-600 to-red-500 pb-10">
          <div className="pt-8 px-4 mx-auto max-w-screen-xl text-center lg:pt-16 z-10 relative">
              <h1 className="mb-4 text-3xl font-extrabold tracking-tight leading-none text-gray-50 md:text-5xl lg:text-6xl">Mahir Bahasa Inggris Dari Nol !</h1>
              <p className="mb-8 text-lg font-normal text-gray-100 lg:text-xl sm:px-16 lg:px-48">Kamu Bisa Mahir Bahasa Inggris Meski dari Dasar dengan Belajar di Kampung Inggris LC!</p>
          </div>
          <div className="flex justify-center">
            <button className="bg-yellow-400 hover:bg-yellow-500 text-black text-lg font-bold py-3.5 px-10 rounded-lg shadow-lg transition duration-300 hover:cursor-pointer">
                Konsultasi Sekarang
            </button>
            
          </div>
      </section>

      <section className=''>
                <GalleryCarousel></GalleryCarousel>
      </section>

    </LandingLayout>
  )
}

export default landing;