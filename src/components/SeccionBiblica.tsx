import React, { useState } from 'react'
import folderIcon from '../img/folderIcon.png'
import SectionItem from './SectionItem'

const nuevoTestamento = [
    { id: 'evangelio', name: 'Los Cuatro Evangelios', icon: 'folder' },
    { id: 'hechos', name: 'Hechos', icon: 'folder' },
    { id: 'romanos', name: 'Romanos', icon: 'folder' },
    { id: 'corintios', name: 'Cartas de los Corintios', icon: 'folder' },
    { id: 'galatas', name: 'Galatas', icon: 'folder' },
    { id: 'efesios', name: 'Efesios', icon: 'folder' },
    { id: 'filipenses', name: 'Filipenses', icon: 'folder' },
    { id: 'colosenses', name: 'Colosenses', icon: 'folder' },
    { id: 'tesalonica', name: 'Cartas de Tesalonica', icon: 'folder' },
    { id: 'timoteo', name: 'Cartas a Timoteo', icon: 'folder' },
    { id: 'tito', name: 'Tito', icon: 'folder' },
    { id: 'filemon', name: 'Filemon', icon: 'folder' },
    { id: 'hebreos', name: 'Hebreos', icon: 'folder' },
    { id: 'santiago', name: 'Santiago', icon: 'folder' },
    { id: 'pedro', name: 'Cartas de Pedro', icon: 'folder' },
    { id: 'juan', name: 'Cartas de Juan', icon: 'folder' },
    { id: 'judas', name: 'Judas', icon: 'folder' },
    { id: 'apocalipsis', name: 'Apocalipsis', icon: 'folder' },
]

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
                {showMore
                    ? nuevoTestamento.map((element) => (
                          <SectionItem key={element.id} itemSection={element} showMore={showMore} />
                      ))
                    : nuevoTestamento.map((element, i) => {
                          if (i < 3) {
                              return <SectionItem key={element.id} itemSection={element} showMore={true} />
                          }
                      })}
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
