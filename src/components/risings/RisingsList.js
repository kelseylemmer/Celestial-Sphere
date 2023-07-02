import { useEffect, useState } from "react"
import "./Rising.css"

export const RisingList = () => {
  const [risingSigns, setRisingSigns] = useState([])

  useEffect(
    () => {
      fetch(`http://localhost:8088/risings`)
        .then(response => response.json())
        .then((risingArray) => {
          setRisingSigns(risingArray)
        })
    },
    []
  )
  return <>
    <div className="page-container">
      <h1 className="page-title rising-title">Rising Signs</h1>

      <article className="risingSigns">
        {
          risingSigns.map(
            (risingSign) => {
              return <section className="risingSign" key={`${risingSign.id}`}>
                <header>{risingSign.name}</header>
                <div>Element: {risingSign.element.name}</div>
                <div>Trait: {risingSign.trait}</div>
                <div>Symbol: {risingSign.symbol}</div>
              </section>
            }
          )
        }
      </article>
    </div>
  </>
}