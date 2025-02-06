import React, { useState } from 'react'

type HeaderButtonProps = { buttonText: string; children?: React.ReactNode }

export default function HeaderButton({ buttonText, children }: HeaderButtonProps) {
    const [hoveringButton, setHoveringButton] = useState(false)
    const [hoveringDropdown, setHoveringDropdown] = useState(false)

    children = children && !Array.isArray(children) ? [children] : children

    return (
        <div className='relative'>
            <button
                className='text-xl text-logo transition-colors duration-200 hover:text-orange-300'
                onClick={() => setHoveringButton(true)}
                onMouseEnter={() => setHoveringButton(true)}
                onMouseLeave={() => setHoveringButton(false)}>
                {buttonText}
            </button>
            <ul
                className={`absolute min-w-full bg-white rounded-md overflow-hidden transition-all duration-200 shadow text-logo
                ${
                    children && (hoveringButton || hoveringDropdown)
                        ? 'pointer-events-auto opacity-100'
                        : 'pointer-events-none opacity-0'
                }`}
                onMouseEnter={() => setHoveringDropdown(true)}
                onMouseLeave={() => setHoveringDropdown(false)}>
                {children}
            </ul>
        </div>
    )
}
