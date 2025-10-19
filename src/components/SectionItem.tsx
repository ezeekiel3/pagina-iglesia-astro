import folderIcon from '../img/folderIcon.png'
import pdfIcon from '../img/pdfIcon.png'

type SectionItemProps = {
    itemSection: {
        id: string
        name: string
        icon: string
        pdfs?: []
    }
    showMore: boolean
}

export default function SectionItem({ itemSection, showMore }: SectionItemProps) {
    return (
        <div
            className={`border border-black hover:bg-logo hover:bg-opacity-10 duration-100 border-opacity-30 rounded-lg h-min w-11/12 cursor-pointer ${
                showMore ? 'visible' : 'invisible'
            }`}>
            <div className='flex flex-row pl-7 gap-3 py-4'>
                {itemSection.icon === 'folder' ? (
                    <img src={folderIcon.src} alt='' />
                ) : (
                    <img src={pdfIcon.src} alt='' className='' />
                )}
                <p className='text-xl'>{itemSection.name}</p>
            </div>
        </div>
    )
}
