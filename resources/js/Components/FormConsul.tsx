import axios from 'axios';
import React, { FormEvent, FormEventHandler, useRef, useState } from 'react'
import Select, { OptionProps, components } from 'react-select'

type Props = {}

const FormConsul: React.FC<Props> = (props: Props) => {
    const formRef = useRef<HTMLFormElement>(null);
    const [formData, setFormData] = useState({
        name: "",
        whatsapp: "",
        program: "EM/EMP",
        // ... potentially many more individual properties
    });

    const handleChange = (e: FormEvent<HTMLInputElement>) => {
        const { name, value } = e.currentTarget;
        setFormData((prevState) => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = (event:FormEvent<HTMLFormElement>) =>{
        event.preventDefault();

        axios.post("/input", formData)
        .then(()=>{
            console.log("Oke");
        }).catch(()=>{
            console.log("not Oke");
            
        });
    }

    return (
        <>
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                <div className='pb-4'>
                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">Nama</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                            <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 26 26"><path fill="#f41515" d="M16.563 15.9c-.159-.052-1.164-.505-.536-2.414h-.009c1.637-1.686 2.888-4.399 2.888-7.07c0-4.107-2.731-6.26-5.905-6.26c-3.176 0-5.892 2.152-5.892 6.26c0 2.682 1.244 5.406 2.891 7.088c.642 1.684-.506 2.309-.746 2.397c-3.324 1.202-7.224 3.393-7.224 5.556v.811c0 2.947 5.714 3.617 11.002 3.617c5.296 0 10.938-.67 10.938-3.617v-.811c0-2.228-3.919-4.402-7.407-5.557"></path></svg>
                        </div>
                        <input value={formData.name} onChange={handleChange} type="text" id="name" name='name' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-full ps-10 p-2.5" placeholder="Contoh: Cloudias Imani Pradana" required/> 
                    </div>
                </div>

                <div className='pb-4'>
                    <label htmlFor="whatsapp" className="block mb-2 text-sm font-medium text-gray-900">No. Whatsapp</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                            <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24"><path fill="#f41515" d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01m-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.26 8.26 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23m4.52-6.16c-.25-.12-1.47-.72-1.69-.81c-.23-.08-.39-.12-.56.12c-.17.25-.64.81-.78.97c-.14.17-.29.19-.54.06c-.25-.12-1.05-.39-1.99-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.14-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31c-.22.25-.86.85-.86 2.07s.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74c.59.26 1.05.41 1.41.52c.59.19 1.13.16 1.56.1c.48-.07 1.47-.6 1.67-1.18c.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28"></path></svg>
                        </div>
                        <input value={formData.whatsapp} onChange={handleChange} type="text" id="whatsapp" name='whatsapp' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-full ps-10 p-2.5" placeholder="Contoh: 081295782913" required/>
                    </div>
                </div>

                <div className='pb-4'>
                    <label htmlFor="whatsapp" className="block mb-2 text-sm font-medium text-gray-900">Program</label>
                    {/* <Select isClearable placeholder="Pilih Program English Mastermu" value={{ value: 'chocolate', label: 'Chocolate', info: "Infonya" }} options={options} menuPosition='absolute' menuPlacement='top' components={{Option: OptionComponent}}/> */}
                    <div>
                        <p>
                            EM/EMP (4 bulan - 6 bulan)
                        </p>
                        <div className='flex gap-1'>
                            <p className='self-start'>
                                <svg xmlns="http://www.w3.org/2000/svg" width={15} height={15} viewBox="0 0 1024 1024"><path fill="#f41515" d="M512 64a448 448 0 1 1 0 896.064A448 448 0 0 1 512 64m67.2 275.072c33.28 0 60.288-23.104 60.288-57.344s-27.072-57.344-60.288-57.344c-33.28 0-60.16 23.104-60.16 57.344s26.88 57.344 60.16 57.344M590.912 699.2c0-6.848 2.368-24.64 1.024-34.752l-52.608 60.544c-10.88 11.456-24.512 19.392-30.912 17.28a12.99 12.99 0 0 1-8.256-14.72l87.68-276.992c7.168-35.136-12.544-67.2-54.336-71.296c-44.096 0-108.992 44.736-148.48 101.504c0 6.784-1.28 23.68.064 33.792l52.544-60.608c10.88-11.328 23.552-19.328 29.952-17.152a12.8 12.8 0 0 1 7.808 16.128L388.48 728.576c-10.048 32.256 8.96 63.872 55.04 71.04c67.84 0 107.904-43.648 147.456-100.416z"></path></svg>
                            </p>
                            
                            <p className='text-gray-400 text-xs'>
                            Program dengan materi lengkap dari grammar, speaking, pronunciation, vocabulary, FREE praktik ke Bali, dan REAL TEST TOEFL ITP untuk program 6 Bulan.
                            </p>
                            <input value={formData.program} onChange={handleChange} type="hidden" name='program' />
                        </div>
                    </div>
                </div>
                <div className='flex justify-center'>
                    <button type='submit' className="bg-yellow-400 hover:bg-yellow-500 text-black text-sm font-bold py-3.5 px-10 rounded-lg shadow-lg transition duration-300 hover:cursor-pointer flex gap-4 items-start">
                        Submit
                    </button>
                </div>
                
            </form>
        </>
    )
}

export default FormConsul