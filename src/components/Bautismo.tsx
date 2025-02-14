import bautismoImg from '../img/bautismo1.jpg'
import bautismoImg2 from '../img/bautismo2.jpg'

export default function Bautismo() {
    return (
        <div className='xl:w-full w-11/12 h-auto'>
            <h2 className='text-logo xl:text-3xl text-2xl text-center my-3 font-sans font-bold'>Bautismo</h2>
            <div className='xl:flex-col flex-col items-center xl:items-center flex px-3 pb-3'>
                <img src={bautismoImg.src} alt='' className='xl:h-64 h-40' />
                <div className='mx-4 my-2 flex flex-col items-center h-auto'>
                    <p className='text-logo xl:text-xl/8 text-lg xl:w-1/2 font-roboto font-normal mt-4 mb-2'>
                        Después de un genuino arrepentimiento seguido de una aceptación sincera a Jesucristo en el
                        corazón y un decidido reconocimiento de su autoridad como Señor, (todo esto significa “creer en
                        Cristo”) el siguiente paso es el bautismo.
                    </p>
                    <p className='text-lg text-center font-sans '>
                        Jesucristo dijo:{' '}
                        <q className='italic'>
                            El que creyere y fuere bautizado, será salvo; mas el que no creyere, será condenado.
                        </q>{' '}
                        <sub className='text-lg'>(Marcos 16:16)</sub>
                    </p>
                    <ul className='my-4 xl:text-xl xl:w-2/3 xl:h-2/3 gap-5 text-center text-lg font-roboto font-normal'>
                        <li className='my-20'>
                            <h3 className='m-3 text-logo font-bold'>ES POR INMERSION POR RAZONES ETIMOLOGICAS.</h3>
                            <p className='xl:text-lg text-base'>
                                Simplemente porque la palabra “bautismo” significa “inmersión”
                            </p>
                        </li>
                        <li className='flex flex-col items-center my-20'>
                            <h3 className='m-4 text-logo font-bold'>ES POR INMERSION POR RAZONES TEOLOGICAS</h3>
                            <p className='xl:text-lg/9 text-base/8 xl:w-1/2'>
                                El bautismo debe ser por inmersión porque interpreta la muerte, la sepultura y la
                                resurrección de Jesucristo. Y dentro de este hecho histórico estamos incluidos todos
                                aquellos que hemos creído en Él.
                            </p>
                        </li>
                        <li className='mt-20 flex flex-col items-center'>
                            <h3 className='m-4 text-logo font-bold'>ES POR INMERSION POR RAZONES ECLESIOLOGICAS.</h3>
                            <p className='xl:text-lg/9 text-base/8 xl:w-2/3'>
                                El bautismo por inmersión es también una figura que representa la incorporación del
                                nuevo creyente a la iglesia, que es el Cuerpo de Cristo. El bautismo por inmersión es un
                                bautizo efectuado sumergiendo totalmente en agua a la persona que se bautiza. El
                                bautismo por inmersión es diferente al bautismo por aspersión. Al aceptar a Cristo nos
                                identificamos con él en su muerte, su sepultura y su resurrección. Así que, en Cristo
                                somos personas nuevas. El bautismo en agua simboliza la transformación que ocurrió en el
                                momento de nuestra salvación. El bajar al agua, simboliza nuestra identificación con
                                Cristo en su muerte y sepultura. El subir del agua simboliza nuestra resurrección a una
                                vida nueva.
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='px-3 pb-3 flex xl:flex-col flex-col items-center xl:items-center'>
                <img src={bautismoImg2.src} alt='' className='xl:h-80 h-64 xl:w-72 w-56' />
                <p className='text-logo xl:text-2xl font-roboto font-bold px-6 py-6 text-center text-xl'>
                    El bautismo no es opcional, sino es un mandato para ser obedecido por cada creyente. Con el bautismo
                    damos testimonio público de que ya somos salvos.
                </p>
            </div>
        </div>
    )
}
