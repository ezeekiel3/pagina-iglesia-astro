import React, { useState, useEffect } from 'react'
import menuImg from '../img/menu.png'
import closeImg from '../img/close.png'
import arrowRight from '../img/arrowRight.png'
import arrowBack from '../img/arrowBack.png'

type HeaderButtonProps = { buttonText?: string; children?: React.ReactNode }

export default function HeaderButton({ buttonText, children }: HeaderButtonProps) {
    const [hoveringButton, setHoveringButton] = useState(false)
    const [hoveringDropdown, setHoveringDropdown] = useState(false)
    const [openMenu, setOpenMenu] = useState(false)
    const [buttonName, setButtonName] = useState('')

    children = children && !Array.isArray(children) ? [children] : children

    useEffect(() => {
        if (openMenu) {
            document.body.classList.add('overflow-hidden')
        } else {
            document.body.classList.remove('overflow-hidden')
        }

        return () => {
            document.body.classList.remove('overflow-hidden')
        }
    }, [openMenu])

    return (
        <div className='xl:relative xl:block flex'>
            <button
                className='text-xl xl:flex hidden text-logo transition-colors duration-200 hover:text-orange-300'
                onClick={() => setHoveringButton(true)}
                onMouseEnter={() => setHoveringButton(true)}
                onMouseLeave={() => setHoveringButton(false)}>
                {buttonText}
            </button>
            <button className='xl:hidden flex' onClick={() => setOpenMenu(true)}>
                <img src={menuImg.src} alt='' className='h-12' />
            </button>
            <ul
                className={`absolute z-10 min-w-full xl:flex hidden flex-col bg-white rounded-md overflow-hidden transition-all duration-200 shadow text-logo
                ${
                    children && (hoveringButton || hoveringDropdown)
                        ? 'pointer-events-auto opacity-100'
                        : 'pointer-events-none opacity-0'
                }`}
                onMouseEnter={() => setHoveringDropdown(true)}
                onMouseLeave={() => setHoveringDropdown(false)}>
                {children}
            </ul>
            <div
                onClick={() => setOpenMenu(false)}
                className={`xl:hidden fixed inset-0 z-20 bg-gray-900 bg-opacity-50 transition-opacity duration-300 ${
                    openMenu ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                }`}></div>

            <div
                className={`xl:hidden fixed top-0 z-20 right-0 h-full w-64 bg-orange-100 shadow-lg transform transition-transform duration-300 ${
                    openMenu ? 'translate-x-0' : 'translate-x-full'
                }`}>
                <div className='p-4 h-full'>
                    <button>
                        {hoveringButton ? (
                            <img
                                src={arrowBack.src}
                                alt=''
                                className='h-11 fixed top-4 z-20'
                                onClick={() => setHoveringButton(false)}
                            />
                        ) : (
                            <img src={closeImg.src} alt='' className='h-11' onClick={() => setOpenMenu(false)} />
                        )}
                    </button>
                    <nav className='h-2/3'>
                        <ul className='flex items-center justify-center text-xl text-logo gap-8 h-full flex-col'>
                            <li
                                className={`flex items-center transition-all duration-300 ${
                                    hoveringButton ? '-translate-x-full opacity-0' : 'translate-x-0 opacity-100'
                                }`}>
                                <button
                                    className={`hover:text-orange-300 transition-all duration-300`}
                                    onClick={() => {
                                        setHoveringButton(true)
                                        setButtonName('Iglesia')
                                    }}>
                                    Iglesia
                                </button>
                                <img src={arrowRight.src} alt='' className='h-6' />
                            </li>
                            {buttonName === 'Iglesia' ? (
                                <li
                                    className={`flex items-center justify-center h-full flex-col text-xl gap-8 absolute z-10 transition-all duration-300 ${
                                        hoveringButton ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
                                    }`}>
                                    <button>
                                        <a href='/pagina-iglesia-astro/#'>Creemos en</a>
                                    </button>
                                    <button>
                                        <a href='/pagina-iglesia-astro/Ubicaciones'>Ubicaciones</a>
                                    </button>
                                    <button>
                                        <a href='/pagina-iglesia-astro/Agenda'>Agenda</a>
                                    </button>
                                    <button>
                                        <a href='/pagina-iglesia-astro/NuestraComunidad'>Nuestra Comunidad</a>
                                    </button>
                                </li>
                            ) : (
                                ''
                            )}
                            <li
                                className={`flex items-center transition-all duration-300 ${
                                    hoveringButton ? '-translate-x-full opacity-0' : 'translate-x-0 opacity-100'
                                }`}>
                                <button
                                    className='hover:text-orange-300 transition-all duration-300'
                                    onClick={() => {
                                        setHoveringButton(true)
                                        setButtonName('Material')
                                    }}>
                                    Material
                                </button>
                                <img src={arrowRight.src} alt='' className='h-6' />
                            </li>
                            {buttonName === 'Material' ? (
                                <li
                                    className={`flex items-center justify-center h-full flex-col text-xl gap-8 absolute z-10 transition-all duration-300 ${
                                        hoveringButton ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
                                    }`}>
                                    <button>
                                        <a href='/pagina-iglesia-astro/Material'>Estudio Inductivos</a>
                                    </button>
                                    <button>
                                        <a href='/pagina-iglesia-astro/#'>Discipulado</a>
                                    </button>
                                    <button>
                                        <a href='/pagina-iglesia-astro/#'>Otros Escritos</a>
                                    </button>
                                    <button>
                                        <a href='/pagina-iglesia-astro/#'>Guías de Oración</a>
                                    </button>
                                </li>
                            ) : (
                                ''
                            )}
                            <li
                                className={`flex items-center transition-all duration-300 ${
                                    hoveringButton ? '-translate-x-full opacity-0' : 'translate-x-0 opacity-100'
                                }`}>
                                <button
                                    className='hover:text-orange-300 transition-all duration-300'
                                    onClick={() => {
                                        setHoveringButton(true)
                                        setButtonName('Niños')
                                    }}>
                                    Niños
                                </button>
                                <img src={arrowRight.src} alt='' className='h-6' />
                            </li>
                            {buttonName === 'Niños' ? (
                                <li
                                    className={`flex items-center justify-center h-full flex-col text-xl gap-8 absolute z-10 transition-all duration-300 ${
                                        hoveringButton ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
                                    }`}>
                                    <button>
                                        <a href='/pagina-iglesia-astro/#'>Trabajo</a>
                                    </button>
                                    <button>
                                        <a href='/pagina-iglesia-astro/#'>Material</a>
                                    </button>
                                </li>
                            ) : (
                                ''
                            )}
                            <li
                                className={`flex items-center w-1/2 leading-7 transition-all duration-300 ${
                                    hoveringButton ? '-translate-x-full opacity-0' : 'translate-x-0 opacity-100'
                                }`}>
                                <button
                                    className='hover:text-orange-300 transition-all duration-100'
                                    onClick={() => {
                                        setHoveringButton(true)
                                        setButtonName('Centro de Desarrollo')
                                    }}>
                                    Centro de Desarrollo
                                </button>
                                <img src={arrowRight.src} alt='' className='h-6' />
                            </li>
                            {buttonName === 'Centro de Desarrollo' ? (
                                <li
                                    className={`flex items-center justify-center h-full flex-col text-xl gap-8 absolute z-10 transition-all duration-300 ${
                                        hoveringButton ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
                                    }`}>
                                    <button>
                                        <a href='/pagina-iglesia-astro/#'>Descripción</a>
                                    </button>
                                    <button>
                                        <a href='/pagina-iglesia-astro/#'>Ubicación</a>
                                    </button>
                                    <button>
                                        <a href='/pagina-iglesia-astro/#'>Reservas</a>
                                    </button>
                                </li>
                            ) : (
                                ''
                            )}
                            <li
                                className={`flex items-center transition-all duration-300 ${
                                    hoveringButton ? '-translate-x-full opacity-0' : 'translate-x-0 opacity-100'
                                }`}>
                                <button className='hover:text-orange-300 transition-all duration-300'>Contacto</button>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    )
}
