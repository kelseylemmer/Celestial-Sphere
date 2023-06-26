import { useEffect, useState } from "react"
import "./User.css"
import { Link } from "react-router-dom"

export const UserList = () => {
    const [profiles, setProfiles] = useState([])

    useEffect(
        () => {
            fetch(`http://localhost:8088/profiles/?_expand=sun&_expand=moon&_expand=rising&_expand=user`)
                .then(response => response.json())
                .then((profileArray) => {
                    setProfiles(profileArray)
                })
        },
        []
    )
    return <>
        <h2>Celestial Users</h2>

        <article className="users">
            {
                profiles.map(
                    (profile) => {
                        return <section className="user" key={`${profile.id}`}>
                            <header><Link to={`/Profile/${profile.id}`}>{profile?.user.firstName} {profile?.user.lastName}</Link></header>
                            <div>Sun: {profile?.sun?.name}</div>
                            <div>Moon: {profile?.moon?.name}</div>
                            <div>Rising: {profile?.rising?.name}</div>
                        </section>
                    }
                )
            }
        </article>
    </>
}