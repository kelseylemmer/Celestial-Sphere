import { useEffect, useState } from "react"
import "./User.css"
import { Link } from "react-router-dom"

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
                        return <section className="user" key={`${user.id}`}>
                            <header><Link to={`/Profile/${user.id}`}>{user.firstName} {user.lastName}</Link></header>
                            <div>Sun: {user?.sunSign?.name}</div>
                            <div>Moon: {user?.moonSign?.name}</div>
                            <div>Rising: {user?.risingSign?.name}</div>
                        </section>
                    }
                )
            }
        </article>
    </>
}