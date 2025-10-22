import { useState, useEffect } from 'react'

type SectionItemProps = {
    itemSection: {
        id: string
        name: string
        icon: string
        pdfs?: { versiculo: string; filePath: string }[]
    }
    showMore: boolean
}

export default function SectionItem({ itemSection, showMore }: SectionItemProps) {
    const [openFolder, setOpenFolder] = useState<boolean>(false)

    return (
        <div
            className={`border border-logo hover:bg-logo hover:bg-opacity-10 duration-100 border-opacity-30 rounded-lg h-min w-11/12 ${
                showMore ? 'visible' : 'invisible'
            }`}>
            <div className='flex flex-row pl-7 gap-3 py-4 items-center' onClick={() => setOpenFolder(!openFolder)}>
                {itemSection.icon === 'folder' ? (
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        height='24px'
                        viewBox='0 -960 960 960'
                        width='24px'
                        fill='#b22c2d'>
                        <path d='M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h240l80 80h320q33 0 56.5 23.5T880-640v400q0 33-23.5 56.5T800-160H160Zm0-80h640v-400H447l-80-80H160v480Zm0 0v-480 480Z' />
                    </svg>
                ) : (
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        height='24px'
                        viewBox='0 -960 960 960'
                        width='24px'
                        fill='#b22c2d'>
                        <path d='M360-460h40v-80h40q17 0 28.5-11.5T480-580v-40q0-17-11.5-28.5T440-660h-80v200Zm40-120v-40h40v40h-40Zm120 120h80q17 0 28.5-11.5T640-500v-120q0-17-11.5-28.5T600-660h-80v200Zm40-40v-120h40v120h-40Zm120 40h40v-80h40v-40h-40v-40h40v-40h-80v200ZM320-240q-33 0-56.5-23.5T240-320v-480q0-33 23.5-56.5T320-880h480q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H320Zm0-80h480v-480H320v480ZM160-80q-33 0-56.5-23.5T80-160v-560h80v560h560v80H160Zm160-720v480-480Z' />
                    </svg>
                )}
                <p className='xl:text-xl text-lg text-logo font-semibold'>{itemSection.name}</p>
                {itemSection.icon === 'folder' ? (
                    openFolder ? (
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            height='24px'
                            viewBox='0 -960 960 960'
                            width='24px'
                            fill='#b22c2d'
                            className='mt-1'>
                            <path d='M480-528 296-344l-56-56 240-240 240 240-56 56-184-184Z' />
                        </svg>
                    ) : (
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            height='24px'
                            viewBox='0 -960 960 960'
                            width='24px'
                            fill='#b22c2d'
                            className='mt-1'>
                            <path d='M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z' />
                        </svg>
                    )
                ) : null}
            </div>
            {openFolder ? (
                <div className='flex flex-col gap-5 items-center mb-5'>
                    {itemSection.pdfs?.map((element) => (
                        <a
                            href={element.filePath}
                            className='text-logo border xl:w-1/2 w-3/4 border-opacity-25 text-center border-black hover:bg-logo hover:text-white pl-5 py-3 text-lg font-medium rounded-lg duration-200'
                            target='_blank'>
                            {element.versiculo}
                        </a>
                    ))}
                </div>
            ) : (
                ''
            )}
        </div>
    )
}
