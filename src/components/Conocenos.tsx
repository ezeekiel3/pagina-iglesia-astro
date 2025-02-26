import React, { useEffect, useRef, useState } from 'react'
import { useStore } from '@nanostores/react'
import { showConocenos } from '../store'

export default function Conocenos() {
    const $showConocenos = useStore(showConocenos)
    const conocenosRef = useRef<HTMLDivElement | null>(null)

    const handleScroll = () => {
        showConocenos.set(true)
        setTimeout(() => {
            conocenosRef.current?.scrollIntoView({ behavior: 'smooth' })
        }, 200)
    }

    return (
        <div className='flex flex-col items-center'>
            <button
                className='xl:text-3xl text-2xl relative overflow-hidden font-semibold rounded-xl text-center text-logo bg-transparent p-4 border-4 border-logo hover:text-white transition-colors duration-300 hover:bg-logo my-12'
                onClick={() => handleScroll()}>
                <span className='z-10 relative'>Conocenos</span>
                <div className='bg-logo transition-all top-0 left-0 duration-300 absolute h-full w-0'></div>
            </button>
            <div
                className={`flex flex-col items-center w-full transition-opacity duration-500 ease-out ${
                    $showConocenos
                        ? 'h-auto opacity-100 overflow-visible translate-y-0'
                        : 'h-0 opacity-0 overflow-hidden translate-y-10'
                }`}>
                <h2 className='xl:text-4xl text-2xl text-logo font-bold font-sans' ref={conocenosRef}>
                    ¡Queremos que nos conozcas!
                </h2>
                <p className='xl:text-2xl text-center my-6 font-roboto'>
                    La mayoría de la gente rechaza lo que no conoce, por <b>mala información, prejuicios o temor.</b>
                </p>
                <p className='xl:text-2xl/10 font-roboto xl:font-normal xl:w-2/3 w-3/4 text-base/8 xl:h-72 my-6'>
                    Aquello de <b className='italic'>"Mejor es malo conocido que bueno por conocer"</b>; es una triste
                    realidad y un tremendo error de principios. Porque nunca puede ser <b className='italic'>"mejor"</b>
                    ; lo que se considera malo; ni el conformarse en la ignorancia puede ser garantía de una vida
                    exitosa y feliz. Pero hay otro tipo de personas, entre las cuales tal vez te encontrás, que no se
                    dejan llevar por los rumores ni por los prejuicios, personas íntegras y profundamente honestas
                    consigo mismas, que no aceptarían ni rechazarían una información sin haberla analizado y comparado a
                    fin de comprobar su veracidad.
                </p>
                <p className='xl:text-2xl/10 my-6 text-center font-roboto font-normal w-2/3 text-base/8'>
                    Si vos perteneces a este segundo grupo, te invitamos a leer nuestras creencias y a sacar tus propias
                    conclusiones.
                </p>
            </div>
        </div>
    )
}
