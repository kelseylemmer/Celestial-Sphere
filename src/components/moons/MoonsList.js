import { useEffect, useState } from "react"
import "./Moon.css"

export const MoonList = () => {
    const [moonSigns, setMoonSigns] = useState([])

    useEffect(
        () => {
            fetch(`http://localhost:8088/moonSigns`)
                .then(response => response.json())
                .then((moonArray) => {
                    setMoonSigns(moonArray)
                })
        },
        []
    )
    return <>
        <h2>Moon Signs</h2>

        <article className="moonSigns">
            {
                moonSigns.map(
                    (moonSign) => {
                        return <section className="moonSign" key={`${moonSign.id}`}>
                            <header>{moonSign.name}</header>
                            <div>Element: {moonSign.element}</div>
                            <div>Trait: {moonSign.trait}</div>
                            <div>Love Compatibility: {moonSign.loveCompatibility}</div>
                            <div>Symbol: {moonSign.symbol}</div>
                        </section>
                    }
                )
            }
        </article>
    </>
}