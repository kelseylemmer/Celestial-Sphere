import { useEffect, useState } from "react"
import "./Planets.css"

export const Planets = () => {
    const [Suns, setSuns] = useState([])

    useEffect(
        () => {
            fetch(`http://localhost:8088/suns`)
                .then(response => response.json())
                .then((sunsArray) => {
                    setSuns(sunsArray)
                })
        },
        []
    )
    return <>
        <div className="page-container">
            <h1 className="page-title house-title">The Planets</h1>
            <div className="houses-pic"><img src="https://i.imgur.com/l1S69ux.png" alt="houses wheel"></img></div>


        </div>
    </>
}