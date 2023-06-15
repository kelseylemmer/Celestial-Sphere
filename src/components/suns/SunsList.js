import { useEffect, useState } from "react"
import "./Sun.css"

export const SunList = () => {
    const [sunSigns, setSunSigns] = useState([])

    useEffect(
        () => {
            fetch(`http://localhost:8088/sunSigns`)
                .then(response => response.json())
                .then((sunArray) => {
                    setSunSigns(sunArray)
                })
        },
        []
    )
    return <>
        <h2>Sun Signs</h2>

        <article className="sunSigns">
            {
                sunSigns.map(
                    (sunSign) => {
                        return <section className="sunSign">
                            <header>{sunSign.name}</header>
                            <div>Dates: {sunSign.dates}</div>
                            <div>Element: {sunSign.element}</div>
                            <div>Ruling Planet: {sunSign.rulingPlanet}</div>
                            <div>Traits: {sunSign.trait}</div>
                            <div>Symbol: {sunSign.symbol}</div>
                        </section>
                    }
                )
            }
        </article>
    </>
}