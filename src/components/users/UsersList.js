import { useEffect, useState } from "react"
import "./User.css"
import { Link } from "react-router-dom"

export const UserList = () => {
    const [profiles, setProfiles] = useState([])

    const [searchTerm, setSearchTerm] = useState("")

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

    const filteredProfiles = profiles.filter((profile) =>
        profile?.user.firstName.toLowerCase().startsWith(searchTerm.toLowerCase()) ||
        profile?.user.lastName.toLowerCase().startsWith(searchTerm.toLowerCase())
    )

    const handleSearch = (event) => {
        setSearchTerm(event.target.value)
    }

    return <>
        <h2>Celestial Users</h2>

        <input
            type="text"
            placeholder="Search by name"
            value={searchTerm}
            onChange={handleSearch} />
        <article className="users">
            {filteredProfiles.length > 0 ? (
                filteredProfiles.map((profile) => (
                    <section className="user" key={`${profile.id}`}>
                        <header><Link to={`/Profile/${profile.id}`}>{profile?.user.firstName} {profile?.user.lastName}</Link></header>
                        <div>Sun: {profile?.sun?.name}</div>
                        <div>Moon: {profile?.moon?.name}</div>
                        <div>Rising: {profile?.rising?.name}</div>
                    </section>
                ))
            ) : (
                <p>No users found.</p>
            )}
        </article>
    </>
}