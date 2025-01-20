import { useState } from 'react'

type BigButtonProps = {
    text: string
    className?: string
}

export default function BigButton({ text, className }: BigButtonProps) {
    const [showContent, setShowContent] = useState(false)
    return (
        <button
            className={`xl:text-3xl text-2xl relative overflow-hidden font-semibold rounded-xl text-center text-logo bg-transparent p-4 border-4 border-logo hover:text-white transition-colors duration-300 hover:bg-logo ${className}`}
            onClick={() => setShowContent(true)}
            onMouseEnter={() => setShowContent(true)}
            onMouseLeave={() => setShowContent(false)}>
            <span className='z-10 relative'>{text}</span>
            <div className='bg-logo transition-all top-0 left-0 duration-300 absolute h-full w-0'></div>
        </button>
    )
}
