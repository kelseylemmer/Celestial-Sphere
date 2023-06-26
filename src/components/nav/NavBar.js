import { Link, useNavigate } from "react-router-dom"
import "./NavBar.css"

export const NavBar = () => {
    const navigate = useNavigate()

    const localCelestialUser = localStorage.getItem("celestial_user")
    const celestialUserObject = JSON.parse(localCelestialUser)


    return (
        <ul className="navbar">
            <li className="navbar__item">
                <Link className="navbar__link" to="/Home">Home</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/SunSigns">Sun Signs</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/MoonSigns">Moon Signs</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/RisingSigns">Rising Signs</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/Users">Users</Link>
            </li>
            {(localCelestialUser && celestialUserObject.profileId) && <li
                className="navbar__item">
                <Link className="navbar__link" to={`/Profile/${celestialUserObject.profileId}`}>My Profile</Link>
            </li>}
            {(localCelestialUser && !celestialUserObject.profileId) && <li
                className="navbar__item">
                <Link className="navbar__link" to="/CreateProfile">Create Profile</Link>
            </li>}
            {
                localCelestialUser && <li className="navbar__item navbar__logout">
                    <Link className="navbar__link" to="" onClick={() => {
                        localStorage.removeItem("celestial_user")
                        navigate("/", { replace: true })
                    }}>Logout</Link>
                </li>
            }
        </ul>
    )
}

