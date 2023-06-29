import { useEffect, useState } from "react"
import "./Moon.css"

export const MoonList = () => {
    const [moonSigns, setMoonSigns] = useState([])

    useEffect(
        () => {
            fetch(`http://localhost:8088/moons?_expand=element`)
                .then(response => response.json())
                .then((moonArray) => {
                    setMoonSigns(moonArray)
                })
        },
        []
    )
    return <>

        <div className="page-container">
            <h2 className="page-title">Moon Signs</h2>
            <article className="moonSigns">
                {
                    moonSigns.map(
                        (moonSign) => {
                            return <section className="moonSign" key={`${moonSign.id}`}>
                                <header>{moonSign.name}</header>
                                <div>Element: {moonSign.element.name}</div>
                                <div>Trait: {moonSign.trait}</div>
                                <div>Love Compatibility: {moonSign.compatibility}</div>
                                <div>Symbol: {moonSign.symbol}</div>
                            </section>
                        }
                    )
                }
            </article>
        </div>
    </>
}