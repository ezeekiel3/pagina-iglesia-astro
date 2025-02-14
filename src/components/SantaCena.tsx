import React from 'react'
import santaCenaImg from '../img/santacena1.jpg'
import santaCenaImg2 from '../img/santacena2.jpg'

export default function SantaCena() {
    return (
        <div className='mt-3 rounded-lg text-center'>
            <h2 className='text-logo text-3xl font-sans font-bold my-3'>Santa Cena</h2>
            <div className='flex xl:flex-row flex-col justify-evenly items-center xl:py-6 py-3'>
                <img src={santaCenaImg.src} alt='' className='xl:h-56' />
                <div className='xl:w-1/2 py-7 xl:py-0'>
                    <p className='xl:text-xl text-lg font-roboto xl:w-full'>
                        Después de la primer ordenanza del Señor Jesús, que es el bautismo, la segunda ordenanza es,
                        como iglesia , participar de la Cena del Señor como Él mismo indicó horas antes de ir a la cruz.
                    </p>
                    <sub className='font-roboto text-base font-bold'>Mateo 26:26-30</sub>
                </div>
                <img src={santaCenaImg2.src} alt='' className='xl:h-56' />
            </div>
        </div>
    )
}
