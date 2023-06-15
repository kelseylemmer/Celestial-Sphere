import { Link, useNavigate } from "react-router-dom"
import "./NavBar.css"

export const NavBar = () => {
    const navigate = useNavigate()

    return (
        <ul className="navbar">
            <li className="navbar__item active">
                <Link className="navbar__link" to="/SunSigns">Sun Signs</Link>
            </li>
            <li className="navbar__item active">
                <Link className="navbar__link" to="/MoonSigns">Moon Signs</Link>
            </li>
            <li className="navbar__item active">
                <Link className="navbar__link" to="/RisingSigns">Rising Signs</Link>
            </li>
            <li className="navbar__item active">
                <Link className="navbar__link" to="/Users">Users</Link>
            </li>
            <li className="navbar__item active">
                <Link className="navbar__link" to="/Profile/${firstName}${lastName}">Profile</Link>
            </li>
            {
                localStorage.getItem("celestial_user")
                    ? <li className="navbar__item navbar__logout">
                        <Link className="navbar__link" to="" onClick={() => {
                            localStorage.removeItem("celestial_user")
                            navigate("/", {replace: true})
                        }}>Logout</Link>
                    </li>
                    : ""
            }
        </ul>
    )
}

