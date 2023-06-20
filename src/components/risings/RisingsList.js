import { useEffect, useState } from "react"
import "./Rising.css"

export const RisingList = () => {
    const [risingSigns, setRisingSigns] = useState([])

    useEffect(
        () => {
            fetch(`http://localhost:8088/risingSigns`)
                .then(response => response.json())
                .then((risingArray) => {
                    setRisingSigns(risingArray)
                })
        },
        []
    )
    return <>
        <h2>Rising Signs</h2>

        <article className="risingSigns">
            {
                risingSigns.map(
                    (risingSign) => {
                        return <section className="risingSign" key={`${risingSign.id}`}>
                            <header>{risingSign.name}</header>
                            <div>Element: {risingSign.element}</div>
                            <div>Trait: {risingSign.trait}</div>
                            <div>Symbol: {risingSign.symbol}</div>
                        </section>
                    }
                )
            }
        </article>
    </>
}