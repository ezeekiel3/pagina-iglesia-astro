type CreenciaProps = { titulo: string; informacion: string }

export default function Creencia({ titulo, informacion }: CreenciaProps) {
    return (
        <div className='p-5 my-4 font-normal flex items-center justify-evenly flex-col rounded-lg xl:w-2/3 w-11/12'>
            <h3 className='text-logo xl:text-3xl text-2xl text-center font-bold font-roboto mb-5'>{titulo}</h3>
            <div className='rounded-lg w-11/12'>
                <p className='xl:text-xl/9 text-lg/9 text-center font-roboto'>{informacion}</p>
            </div>
        </div>
    )
}
