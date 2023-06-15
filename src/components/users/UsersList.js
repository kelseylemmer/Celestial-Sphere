import { useEffect, useState } from "react"
import "./User.css"

export const UserList = () => {
    const [users, setUsers] = useState([])

    useEffect(
        () => {
            fetch(`http://localhost:8088/users?_expand=sunSign&_expand=moonSign&_expand=risingSign`)
                .then(response => response.json())
                .then((userArray) => {
                    setUsers(userArray)
                })
        },
        []
    )
    return <>
        <h2>Celestial Users</h2>

        <article className="users">
            {
                users.map(
                    (user) => {
                        return <section className="user">
                            <header>{user.firstName}{user.lastName}</header>
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