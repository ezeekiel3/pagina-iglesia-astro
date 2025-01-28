import { useState } from 'react'

type ButtonCityProps = { buttonText: string }

export default function ButtonCity({ buttonText }: ButtonCityProps) {
    const [selected, setSelected] = useState(false)

    return <button className={`h-2/3 transition-all duration-300 border-b-2 border-logo`}>{buttonText}</button>
}
