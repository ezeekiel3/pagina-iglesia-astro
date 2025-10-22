import React, { useState } from 'react'
import SectionItem from './SectionItem'

type SeccionBiblicaProps = {
    section: string
    titleSection: string
    descriptionSection: string
    cantidadMaterial: string
    emoji: string
    contenido: { id: string; name: string; icon: string; pdfs?: { versiculo: string; filePath: string }[] }[]
}

export default function SeccionBiblica({
    section,
    titleSection,
    descriptionSection,
    cantidadMaterial,
    emoji,
    contenido,
}: SeccionBiblicaProps) {
    const [showMore, setShowMore] = useState(false)

    return (
        <div className='flex items-center flex-col mt-10 bg-orange-200 h-auto pb-4 xl:w-2/3 w-11/12 rounded-2xl border-opacity-30 shadow-md border-logo border-2'>
            <div className='bg-orange-100 bg-opacity-70 mt-7 mb-7 h-1/5 w-full flex flex-row items-center pl-7'>
                <p className='text-4xl'>{emoji}</p>
                <div className='ml-5 flex flex-col gap-2 h-auto py-5'>
                    <p className='opacity-50 font-sans xl:text-base text-sm'>Seccion {section}</p>
                    <h2 className='xl:text-2xl text-logo font-semibold opacity-90 text-xl'>{titleSection}</h2>
                    <p className='opacity-65 xl:text-base text-sm xl:text-start pr-1'>{descriptionSection}</p>
                </div>
            </div>
            <div className='w-full flex items-center flex-col gap-4 overflow-hidden'>
                {showMore
                    ? contenido.map((element) => (
                          <SectionItem key={element.id} itemSection={element} showMore={showMore} />
                      ))
                    : contenido.map((element, i) => {
                          if (i < 3) {
                              return <SectionItem key={element.id} itemSection={element} showMore={true} />
                          }
                      })}
            </div>
            <button
                className='font-medium border border-logo h-min py-2 px-3 rounded-lg hover:bg-orange-800 hover:bg-opacity-15 duration-100 mt-6 text-logo'
                onClick={() => setShowMore(!showMore)}>
                {showMore ? 'Ver Menos' : 'Ver Mas'}
            </button>
            <div className='h-2 w-11/12 border-t mt-5 border-black border-opacity-20'></div>
            <p className='text-sm mt-4 opacity-50'>Total de Recursos: {cantidadMaterial} PDFs</p>
        </div>
    )
}
