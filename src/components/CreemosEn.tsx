import { useState } from 'react'
import Creencia from './Creencia'
import Bautismo from './Bautismo.astro'
import SantaCena from './SantaCena.astro'
import { useStore } from '@nanostores/react'
import { showConocenos } from '../store'

export default function CreemosEn() {
    const [showCreencias, setShowCreencias] = useState(false)
    const $showConocenos = useStore(showConocenos)

    return (
        <div className='flex flex-col items-center'>
            <button
                className={`xl:text-3xl text-2xl relative overflow-hidden font-semibold rounded-xl text-center text-logo bg-transparent p-4 border-4 border-logo hover:text-white transition-colors duration-300 hover:bg-logo my-12 ${
                    $showConocenos ? 'h-auto opacity-100 overflow-visible' : 'h-0 opacity-0 overflow-hidden'
                }`}
                onClick={() => setShowCreencias(true)}>
                <span className='z-10 relative'>Creemos En ...</span>
                <div className='bg-logo transition-all top-0 left-0 duration-300 absolute h-full w-0'></div>
            </button>
            <div
                className={`flex transition-opacity duration-500 flex-col items-center mb-16 ${
                    showCreencias ? 'h-auto opacity-100 overflow-visible' : 'h-0 opacity-0 overflow-hidden'
                }`}>
                <Creencia
                    titulo={'Creemos en Dios'}
                    informacion={
                        'En un Dios personal, todopoderoso, creador del Universo que siente, piensa, decide y está presente en todas las circunstancias de nuestra vida; al cual oramos y a quien confiamos el cuidado de nuestras vidas sabiendo que todo lo que nos sucede resultará para nuestro bien. No solo creemos en su existencia sino también en su amor, demostrado al enviar a su único Hijo, Jesucristo, a la tierra a morir en nuestro lugar y adoptarnos para que nosotros también seamos llamados "hijos de Dios".'
                    }
                />
                <Creencia
                    titulo={'Creemos en Jesucristo'}
                    informacion={
                        'Siendo Dios se hizo hombre cuando nació de la virgen María. Predicó el arrepentimiento, el perdón de pecados, la libertad a los que estaban cautivos en sus angustias y enfermedades; prometió descanso a los fatigados, abundancia a los que nada tenían y vida eterna a los que creyeran en él. Fue crucificado, sepultado, resucitó al tercer día, venció a la muerte, ascendió al cielo para convertirse en el único mediador entre Dios y los hombres; juez de vivos y de muertos; Rey de reyes, Señor de señores; a quien amamos porque él nos amó primero y esperamos porque prometió regresar con poder y gloria para establecer su gobierno eterno.'
                    }
                />
                <Creencia
                    titulo={'Creemos en El Espíritu Santo'}
                    informacion={
                        'Que tiene la misión de convencernos de nuestras faltas, infundir el deseo de cambiar de actitud, producir una vida nueva; de consolarnos en nuestras tribulaciones, ayudarnos en la oración, crear sentimientos de amor, gozo, paz, paciencia, bondad, fe, humildad y dominio propio y de capacitamos para servir a Dios. Creemos que cuando una persona se convierte a Dios, es sellada por el Espíritu Santo como propiedad divina y, el mismo Espíritu le da la seguridad de que es un hijo de Dios.'
                    }
                />
                {/* <Bautismo />
                <SantaCena /> */}
            </div>
        </div>
    )
}
