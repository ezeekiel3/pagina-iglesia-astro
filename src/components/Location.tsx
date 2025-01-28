import locationIcon from '../img/location.png'
import clockIcon from '../img/clock.png'
import { useState } from 'react'

type LocationProps = { barrio: string; ubicacion: string; horario: string }

export default function Location({ barrio, ubicacion, horario }: LocationProps) {
    return (
        <div className='flex flex-col items-center justify-center'>
            <h2 className='text-logo text-2xl font-semibold'>{barrio}</h2>
            <div className='flex text-logo font-semibold items-center'>
                <img src={locationIcon.src} alt='' className='h-4' />
                <p>{ubicacion}</p>
            </div>
            <div className='flex text-logo font-semibold items-center'>
                <img src={clockIcon.src} alt='' className='h-4' />
                <p>{horario}</p>
            </div>
        </div>
    )
}
