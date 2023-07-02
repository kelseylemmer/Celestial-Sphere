import { useEffect, useState } from "react"
import "./Elements.css"

export const Elements = () => {
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
            <h1 className="page-title house-title">The Elements</h1>



        </div>
    </>
}