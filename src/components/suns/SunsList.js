import { useEffect, useState } from "react"
import "./Sun.css"
import { useNavigate } from "react-router-dom"


export const SunList = () => {
    const [sunSigns, setSunSigns] = useState([])
    // const [filteredSuns, setFiltered] = useState([])
    // const [element, setElements] = useState(null)
    const navigate = useNavigate()

    // useEffect(
    //     () => {
    //         if (element === fire) {
    //             const fireSigns = sunSigns.filter(sunSign => sunSign.element === fire)
    //             setFiltered(fireSigns)
    //         }
    //         else if (element === water) {
    //             const waterSigns = sunSigns.filter(sunSign => sunSign.element === water)
    //             setFiltered(waterSigns)
    //         }
    //         else if (element === earth) {
    //             const earthSigns = sunSigns.filter(sunSign => sunSign.element === earth)
    //             setFiltered(earthSigns)
    //         }
    //         else if (element === air) {
    //             const airSigns = sunSigns.filter(sunSign => sunSign.element === air)
    //             setFiltered(airSigns)
    //         }
    //         else {
    //             setFiltered(sunSigns)
    //         }
    //     },
    //     [sunSigns, element]
    // )

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
        {/* 
        <button
            onClick={
                () => {
                    setElements(fire)
                }
            }
        >Fire Signs</button> */}

        <article className="sunSigns">
            {
                sunSigns.map(
                    (sunSign) => {
                        return <section className="sunSign" key={`${sunSign.id}`}>
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