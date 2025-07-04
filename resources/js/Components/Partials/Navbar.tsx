import { GlobalContext } from '@/Providers/GlobalContext';
import React, { useContext, useState } from 'react'

type Props = {}

const Navbar:React.FC = (props: Props) => {
    
    const [isShowMobileNav, setIsShowMobileNav] = useState(false);

    const context = useContext(GlobalContext);
    if(!context){
        throw new Error("Landing Page not Under Global Provider");
    }
    const {state, actions} = context;

  return (
    <>
    <nav className="bg-gray-100 fixed w-full z-20 top-0 start-0 border-b border-gray-200">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2.5">
            <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
                <img src="/images/logo-lc.webp" className="h-8" alt="Flowbite Logo" />
            </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button onClick={() => {actions.setVisibleModalConsul(true)}} type="button" className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-1.5 px-4 rounded-lg shadow-lg transition duration-300 hover:cursor-pointer">
                Konsultasi
            </button>
            <button  onClick={()=>{setIsShowMobileNav(!isShowMobileNav)}} data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-sticky" aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor"strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                </svg>
            </button>
        </div>
        <div className={`items-center justify-between md:h-auto ${isShowMobileNav ? 'h-52' : 'h-0'} w-full md:flex md:w-auto md:order-1 overflow-hidden transition-all ease-in duration-200`} id="navbar-sticky">
            <ul hidden className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-100 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 text-sm">
            <li>
                <a href="#" className="block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0" aria-current="page">Home</a>
            </li>
            <li>
                <a href="#" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0">About</a>
            </li>
            <li>
                <a href="#" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0">Services</a>
            </li>
            <li>
                <a href="#" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0">Contact</a>
            </li>
            </ul>
        </div>
        </div>
    </nav>
    </>
  )
}

export default Navbar