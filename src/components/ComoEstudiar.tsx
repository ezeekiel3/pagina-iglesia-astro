import { useStore } from '@nanostores/react'
import { showComoEstudiar } from '../store'

export default function ComoEstudiar() {
    const setComoEstudiar = useStore(showComoEstudiar)

    return (
        <div className={`${setComoEstudiar ? 'flex' : 'hidden'} flex-col items-center text-center`}>
            <h2 className='text-logo font-roboto font-bold text-2xl'>Procedimiento</h2>
            <p className='w-1/4 font-roboto text-xl my-8'>El estudio bíblico inductivo tiene tres pasos:</p>
            <ol className='w-1/2 leading-10 font-roboto text-lg list-decimal'>
                <li>
                    Observación de los hechos: Se tiene en cuenta lo que dice el texto. El estudio debe limitarse al
                    capítulo o pasaje en discusión. No se deben estudiar muchos pasajes a la vez. Si se salta de un
                    pasaje a otro las personas nuevas se confundirán.
                </li>
                <li>
                    Interpretación de los hechos: Se trata de descubrir lo que el autor quiso que sus lectores
                    originales entendieran. Permita que el capítulo se explique por sí sólo. Evite las referencias a
                    otras autoridades: "Mi pastor dice" o "En la revista tal y cual dice..." etc.
                </li>
                <li>
                    Aplicación de la conclusión. Se acepta personalmente la verdad descubierta y se responde con la
                    acción de inmediato.
                </li>
            </ol>
            <h2 className='text-logo font-roboto font-bold text-2xl mt-10 mb-7'>Herramientas</h2>
            <ol className='list-decimal w-1/2 leading-10 font-roboto text-lg'>
                <li>
                    Diferentes versiones de la Biblia contribuyen mucho a facilitar la comprensión de cualquier pasaje.
                </li>
                <li>
                    Un buen diccionario. La definición precisa de alguna palabra puede clarificar algún concepto dudoso.
                </li>
                <li>
                    Un diccionario bíblico. No es obligatorio que lo tenga el grupo. El líder puede solicitarlo a su
                    pastor o biblioteca de su iglesia y consultarlo cuando haga falta fuera de la reunión.
                </li>
                <li>
                    Concordancia de la Biblia. Como no se emplearán referencias cruzadas, se recomienda la concordancia
                    para las ocasiones especiales y donde otros pasajes bíblicos puedan ayudar a entender mejor el texto
                    en estudio.
                </li>
            </ol>
        </div>
    )
}
