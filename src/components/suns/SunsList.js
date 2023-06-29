import { useEffect, useState } from "react"
import "./Sun.css"


export const SunList = () => {
    const [sunSigns, setSunSigns] = useState([])



    useEffect(
        () => {
            fetch(`http://localhost:8088/suns?_expand=element&_expand=planet`)
                .then(response => response.json())
                .then((sunArray) => {
                    setSunSigns(sunArray)
                })
        },
        []
    )
    return <>
        <div className="page-container">
            <h2>Sun Signs</h2>

            <article className="sunSigns">
                {
                    sunSigns.map(
                        (sunSign) => {
                            return <section className="sunSign" key={`${sunSign.id}`}>
                                <header>{sunSign.name}</header>
                                <div>Dates: {sunSign.dates}</div>
                                <div>Element: {sunSign.element.name}</div>
                                <div>Ruling Planet: {sunSign.planet.name}</div>
                                <div>Traits: {sunSign.trait}</div>
                                <div>Symbol: {sunSign.symbol}</div>
                            </section>
                        }
                    )
                }
            </article>
        </div>
    </>
}