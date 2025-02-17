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

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setButtonName(event.currentTarget.textContent || '')
    }

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
                className={`absolute min-w-full xl:flex hidden flex-col bg-white rounded-md overflow-hidden transition-all duration-200 shadow text-logo
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
                            <img src={arrowBack.src} alt='' className='h-11' onClick={() => setHoveringButton(false)} />
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
                                        handleClick
                                    }}>
                                    Iglesia
                                </button>
                                <img src={arrowRight.src} alt='' className='h-6' />
                            </li>
                            <li
                                className={`flex items-center transition-all duration-300 ${
                                    hoveringButton ? '-translate-x-full opacity-0' : 'translate-x-0 opacity-100'
                                }`}>
                                <button
                                    className='hover:text-orange-300 transition-all duration-300'
                                    onClick={() => {
                                        setHoveringButton(true)
                                        handleClick
                                    }}>
                                    Material
                                </button>
                                <img src={arrowRight.src} alt='' className='h-6' />
                            </li>
                            <li
                                className={`flex items-center transition-all duration-300 ${
                                    hoveringButton ? '-translate-x-full opacity-0' : 'translate-x-0 opacity-100'
                                }`}>
                                <button
                                    className='hover:text-orange-300 transition-all duration-300'
                                    onClick={() => {
                                        setHoveringButton(true)
                                        handleClick
                                    }}>
                                    Niños
                                </button>
                                <img src={arrowRight.src} alt='' className='h-6' />
                            </li>
                            <li
                                className={`flex items-center transition-all duration-300 ${
                                    hoveringButton ? '-translate-x-full opacity-0' : 'translate-x-0 opacity-100'
                                }`}>
                                <button
                                    className='hover:text-orange-300 transition-all duration-100'
                                    onClick={() => {
                                        setHoveringButton(true)
                                        handleClick
                                    }}>
                                    Centro de Desarrollo
                                </button>
                                <img src={arrowRight.src} alt='' className='h-6' />
                            </li>
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
