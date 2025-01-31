import locationIcon from '../img/location.png'
import clockIcon from '../img/clock.png'
import { useState } from 'react'

type LocationProps = { barrio: string; ubicacion: string; horario: string }

export default function Location({ barrio, ubicacion, horario }: LocationProps) {
    return (
        <div className='flex flex-col items-center justify-center'>
            <h2 className='text-logo xl:text-2xl text-lg font-semibold'>{barrio}</h2>
            <div className='flex text-logo font-semibold text-sm items-center'>
                <img src={locationIcon.src} alt='' className='xl:h-4 h-3' />
                <p>{ubicacion}</p>
            </div>
            <div className='flex text-logo font-semibold text-sm items-center'>
                <img src={clockIcon.src} alt='' className='xl:h-4 h-3' />
                <p>{horario}</p>
            </div>
        </div>
    )
}
