import React, { useState } from "react"
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"
import "./Login.css"

export const Login = () => {
    const [email, set] = useState("klemmer@gmail.com")
    const navigate = useNavigate()

    const handleLogin = async (e) => {
        e.preventDefault()

        const foundUsers = await fetch(`http://localhost:8088/users?email=${email}`)
            .then(res => res.json())

        if (foundUsers.length === 1) {
            const user = foundUsers[0]
            const celestialUser = {
                id: user.id,
                firstName: user.firstName,
                lastName: user.lastName,
                profileId: null,
                userId: null
            }

            const foundProfiles = await fetch(`http://localhost:8088/profiles?userId=${user.id}`)
                .then(res => res.json())

            if (foundProfiles.length === 1) {
                celestialUser.profileId = foundProfiles[0].id
            }
            if (foundProfiles.length === 1) {
                celestialUser.userId = foundProfiles[0].userId
            }

            localStorage.setItem("celestial_user", JSON.stringify(celestialUser))

            navigate("/Home")
        }
        else {
            window.alert("Invalid login")
        }
    }

    return (
        <main className="container--login">
            <section className="the-stuff">
                <form className="form--login" onSubmit={handleLogin}>
                    <h1>Celestial Sphere</h1>
                    <h2>Please sign in</h2>
                    <fieldset>
                        <label htmlFor="inputEmail"> Email address </label>
                        <input type="email"
                            value={email}
                            onChange={evt => set(evt.target.value)}
                            className="form-control"
                            placeholder="Email address"
                            required autoFocus />
                    </fieldset>
                    <fieldset>
                        <button type="submit" className="btn btn-primary">
                            Sign in →
                        </button>
                        <div><Link to="/register" className="resister">Not a member yet?</Link></div>
                    </fieldset>
                </form>
            </section>
            
        </main>
    )
}