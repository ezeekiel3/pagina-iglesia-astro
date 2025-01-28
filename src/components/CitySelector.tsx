import Location from './Location.tsx'
import ButtonCity from './ButtonCity.tsx'

export default function CitySelector() {
    const buttonsArr = ['Berisso', 'Ensenada', 'La Plata', 'CABA', 'PBA']

    return (
        <div className='flex justify-center items-center w-full flex-grow'>
            <div className='h-full w-full flex items-center flex-col'>
                <div className='h-16 w-1/3 font-sans flex justify-evenly items-center font-bold text-logo text-xl'>
                    {buttonsArr.map((element, i) => (
                        <ButtonCity buttonText={element} key={i} />
                    ))}
                </div>
                <div className='grid xl:grid-rows-3 xl:grid-cols-3 h-2/3 w-2/3 transition-all duration-500 translate-x-0'>
                    <Location
                        barrio='Templo Central'
                        ubicacion='Calle 165 (Ostende) Nº 861 entre 10 y 11'
                        horario='Domingos 10 hs y 19 hs'
                    />
                    <Location barrio='Villa San Carlos' ubicacion='Calle 22 entre 166 y 167' horario='Domingos 19 hs' />
                    <Location barrio='Villa Zula' ubicacion='Calle 175 entre 35 y 36' horario='Domingos 10 hs' />
                    <Location
                        barrio='Barrio Obrero'
                        ubicacion='Calle Homero Manzi (31) casa N° 419 entre Zapiola (162) y Viamonte (163)'
                        horario='Indefinido'
                    />
                    <Location
                        barrio='Villa Paula'
                        ubicacion='Calle 12  entre 149 y 149 Norte'
                        horario='Domingos 10:30 hs'
                    />
                    <Location barrio='Villa Nueva' ubicacion='Calle 140 entre 7 y 8' horario='Domingos 10 hs' />
                    <Location barrio='Villa Arguello' ubicacion='Calle 9 entre 130 y 131' horario='Domingos 10 hs' />
                    <Location
                        barrio='El Carmen'
                        ubicacion='Calle 123 entre 34 (93 bis) y 35 (94)'
                        horario='Domingos 10 hs'
                    />
                </div>
                <div className='hidden xl:grid-rows-3 xl:grid-cols-3 h-2/3 w-2/3 transition-all duration-500 opacity-100 translate-x-0'>
                    <Location
                        barrio='Ensenada Centro'
                        ubicacion='Avenida Horacio Cestino Nº 430'
                        horario='Domingos 10 hs y 19 hs'
                    />
                    <Location
                        barrio='Villa Tranquila'
                        ubicacion='Calle Quintana Nº 924 entre Saavedra y Contarelli'
                        horario='Domingos 10 hs'
                    />
                    <Location
                        barrio='Villa Rubén Sito'
                        ubicacion='Avenida Altemirante Brown y 6'
                        horario='Domingos 19 hs'
                    />
                    <Location
                        barrio='Punta Lara B° La Pergola'
                        ubicacion='Calle 98 entre 11 y 13'
                        horario='Domingos 10 hs'
                    />
                </div>
                <div className='hidden xl:grid-cols-3 xl:grid-rows-3 h-2/3 w-2/3 transition-all duration-500 translate-x-0'>
                    <Location
                        barrio='En Tu Presencia'
                        ubicacion='Avenida 72 Nº 150 entre 516 y 517'
                        horario='Domingos 10 hs y 18 hs'
                    />
                    <Location barrio='Sud Este' ubicacion='Calle 86 entre 12 y 13' horario='Domingos 10 hs y 19 hs' />
                    <Location
                        barrio='Camino, Verdad y Vida'
                        ubicacion='Av. 72 e/10 y 11 N° 796'
                        horario='Domingos 10 hs'
                    />
                    <Location barrio='Montahue' ubicacion='Indefinido' horario='Domingos 17 hs' />
                    <Location barrio='Las Rosas' ubicacion='Calle 516 entre 157 y 158' horario='Domingos 10 hs' />
                    <Location
                        barrio='Hernandez'
                        ubicacion='Avenida 508 entre 30 y 31'
                        horario='Domingos 10 hs y 19 hs'
                    />
                    <Location barrio='Tolosa' ubicacion='119 Nº 1047 e/ 521 y 522' horario='Domingos 19 hs' />
                    <Location barrio='City Bell' ubicacion='Calle 480 N° 1582 entre 10 y 11' horario='Domingos 17 hs' />
                </div>
                <div className='hidden xl:grid-cols-3 xl:grid-rows-3 h-2/3 w-2/3 transition-all duration-500 translate-x-0'>
                    <Location barrio='Villa Soldati' ubicacion='Avenida Pergamino Nº 3010' horario='Domingos 17 hs' />
                    <Location
                        barrio='Parque Indoamericano'
                        ubicacion='Avenida Escalada Nº 3035/7'
                        horario='Domingos 10 hs y 18:30 hs'
                    />
                    <Location
                        barrio='Ramos Mejía'
                        ubicacion='Calle Colombia N° 1193 Ramos Mejía, Prov. de Bs.As'
                        horario='Miercoles 19:30 hs, Sabados 15 hs y Domingos 10 hs'
                    />
                    <Location
                        barrio='Villa 20'
                        ubicacion='Calle Barros Paso y esquina Pola, Maz. 7, Casa 78, Villa 20 Lugano CABA'
                        horario='Miercoles y Viernes 19 hs, Domingos 10 y 18 hs'
                    />
                    <Location barrio='Humberto 1°' ubicacion='Calle Humberto 1º 1163 CABA' horario='Domingos 19 hs' />
                </div>
                <div className='hidden xl:grid-cols-3 xl:grid-rows-3 h-2/3 w-2/3 transition-all duration-500 translate-x-0'>
                    <Location
                        barrio='Hudson'
                        ubicacion='Calle 53 Nº 5564 bis entre 155 y 156'
                        horario='Domingos 10:30 hs'
                    />
                    <Location
                        barrio='Florencio Varela - Bº Santa Rosa'
                        ubicacion='Pasaje 1º de Mayo (613) Nº 125'
                        horario='Domingos 20 hs'
                    />
                    <Location barrio='Lezama' ubicacion='Calle Sargento Cabral y Libertad' horario='Sábados 19 hs' />
                    <Location
                        barrio='Mar del Plata - Tarantino'
                        ubicacion='Avenida Tarantino Nº 1826 - Mar Del Plata'
                        horario='Domingos 11 hs'
                    />
                    <Location
                        barrio='Mar del Plata - Av. Colón'
                        ubicacion='Avenida Colón N° 11695 - Mar Del Plata'
                        horario='Sábados 18 hs'
                    />
                </div>
            </div>
        </div>
    )
}
