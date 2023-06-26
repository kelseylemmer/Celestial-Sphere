import { Link, useNavigate } from "react-router-dom"
import "./NavBar.css"
import { useState } from "react"

export const NavBar = () => {
    const navigate = useNavigate()

    const localCelestialUser = localStorage.getItem("celestial_user")
    const celestialUserObject = JSON.parse(localCelestialUser)

    const [isSignsOpen, setIsSignsOpen] = useState(false);
    const [isHousesOpen, setIsHousesOpen] = useState(false);

    const toggleDropdownSigns = () => {
        setIsSignsOpen(true);
    };

    const toggleDropdownHouses = () => {
        setIsHousesOpen(true);
    };

    const closeDropdowns = () => {
        setIsSignsOpen(false);
        setIsHousesOpen(false);
    };

    const handleSignsOptionClick = (option) => {
        setIsSignsOpen(false);
        navigate(`/Signs/${option}`);
    };
    const handleHousesOptionClick = (option) => {
        setIsHousesOpen(false);
        navigate(`/Houses/${option}`);
    };

    return (
        <ul className="navbar">
            <li className="navbar__item">
                <Link className="navbar__link" to="/">Home</Link>
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
                <li className="navbar__item">
                    <button className="navbar__link" onMouseEnter={toggleDropdownSigns} onMouseLeave={closeDropdowns}>
                        The Signs
                    </button>
                    {isSignsOpen && (
                        <ul className="dropdown" onMouseEnter={toggleDropdownSigns} onMouseLeave={closeDropdowns}>
                            <li onClick={() => handleSignsOptionClick('Aries')}>Aries</li>
                            <li onClick={() => handleSignsOptionClick('Taurus')}>Taurus</li>
                            <li onClick={() => handleSignsOptionClick('Gemini')}>Gemini</li>
                            <li onClick={() => handleSignsOptionClick('Cancer')}>Cancer</li>
                            <li onClick={() => handleSignsOptionClick('Leo')}>Leo</li>
                            <li onClick={() => handleSignsOptionClick('Virgo')}>Virgo</li>
                            <li onClick={() => handleSignsOptionClick('Libra')}>Libra</li>
                            <li onClick={() => handleSignsOptionClick('Scorpio')}>Scorpio</li>
                            <li onClick={() => handleSignsOptionClick('Sagittarius')}>Sagittarius</li>
                            <li onClick={() => handleSignsOptionClick('Carricorn')}>Carricorn</li>
                            <li onClick={() => handleSignsOptionClick('Aquarius')}>Aquarius</li>
                            <li onClick={() => handleSignsOptionClick('Pisces')}>Pisces</li>
                        </ul>
                    )}
                </li>
                <Link className="navbar__link" to="/Users">Users</Link>
            </li>
            <li className="navbar__item">
                <button className="navbar__link" onMouseEnter={toggleDropdownHouses} onMouseLeave={closeDropdowns}>
                    Houses
                </button>
                {isHousesOpen && (
                    <ul className="dropdown" onMouseEnter={toggleDropdownHouses} onMouseLeave={closeDropdowns}>
                        <li onClick={() => handleHousesOptionClick('First')}>First House</li>
                        <li onClick={() => handleHousesOptionClick('Second')}>Second House</li>
                        <li onClick={() => handleHousesOptionClick('Third')}>Third House</li>
                        <li onClick={() => handleHousesOptionClick('Fourth')}>Fourth House</li>
                        <li onClick={() => handleHousesOptionClick('Fifth')}>Fifth House</li>
                        <li onClick={() => handleHousesOptionClick('Sixth')}>Sixth House</li>
                        <li onClick={() => handleHousesOptionClick('Seventh')}>Seventh House</li>
                        <li onClick={() => handleHousesOptionClick('Eighth')}>Eighth House</li>
                        <li onClick={() => handleHousesOptionClick('Ninth')}>Ninth House</li>
                        <li onClick={() => handleHousesOptionClick('Tenth')}>Tenth House</li>
                        <li onClick={() => handleHousesOptionClick('Eleventh')}>Eleventh House</li>
                        <li onClick={() => handleHousesOptionClick('Twelfth')}>Twelfth House</li>
                    </ul>
                )}
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
