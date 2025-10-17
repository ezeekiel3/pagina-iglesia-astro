import React, { useState } from 'react'
import folderIcon from '../img/folderIcon.png'

type SeccionBiblicaProps = {
    isFolder: boolean
}

export default function SeccionBiblica() {
    const [showMore, setShowMore] = useState(false)

    return (
        <div className='flex items-center flex-col mt-10 bg-orange-200 h-auto pb-4 w-2/3 rounded-2xl border-opacity-30 shadow-md border-logo border-2'>
            <div className='bg-orange-100 bg-opacity-70 mt-7 mb-7 h-1/5 w-full flex flex-row items-center pl-7'>
                <p className='text-4xl'>📖</p>
                <div className='ml-5 flex flex-col gap-2 h-auto'>
                    <p className='opacity-50 font-sans'>Seccion 1</p>
                    <h2 className='text-2xl text-logo font-semibold opacity-90'>Estudios del Nuevo Testamento</h2>
                    <p className='opacity-65'>Profundiza en las enseñanzas y mensajes del Nuevo Testamento</p>
                </div>
            </div>
            <div className='w-full flex items-center flex-col gap-4'>
                <div className='border border-black hover:bg-logo hover:bg-opacity-10 duration-100 border-opacity-30 rounded-lg h-min w-11/12'>
                    <div className='flex flex-row pl-7 gap-3 py-4'>
                        <img src={folderIcon.src} alt='' />
                        <p className='text-xl'>Los cuatro Evangelios</p>
                    </div>
                </div>
                <div className='border border-black hover:bg-logo hover:bg-opacity-10 duration-100 border-opacity-30 rounded-lg h-min w-11/12'>
                    <div className='flex flex-row pl-7 gap-3 py-4'>
                        <img src={folderIcon.src} alt='' />
                        <p className='text-xl'>Hechos</p>
                    </div>
                </div>
                <div className='border border-black hover:bg-logo hover:bg-opacity-10 duration-100 border-opacity-30 rounded-lg h-min w-11/12'>
                    <div className='flex flex-row pl-7 gap-3 py-4'>
                        <img src={folderIcon.src} alt='' />
                        <p className='text-xl'>Romanos</p>
                    </div>
                </div>
                <div
                    className={`border border-black hover:bg-logo hover:bg-opacity-10 duration-100 border-opacity-30 rounded-lg h-min w-11/12 ${
                        showMore ? 'visible' : 'invisible'
                    }`}>
                    <div className='flex flex-row pl-7 gap-3 py-4'>
                        <img src={folderIcon.src} alt='' />
                        <p className='text-xl'>Cartas de Corintios</p>
                    </div>
                </div>
            </div>
            <button
                className='font-medium border border-black h-min py-2 px-3 rounded-lg hover:bg-orange-800 hover:bg-opacity-15 duration-100 border-opacity-50 mt-6'
                onClick={() => setShowMore(!showMore)}>
                {showMore ? 'Ver Menos' : 'Ver 15 Mas'}
            </button>
            <div className='h-2 w-11/12 border-t mt-5 border-black border-opacity-20'></div>
            <p className='text-lg mt-4'>Total de Recursos: 345 PDFs</p>
        </div>
    )
}
