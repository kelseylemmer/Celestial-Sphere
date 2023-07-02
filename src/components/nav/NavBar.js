import { Link, useNavigate } from "react-router-dom";
import "./NavBar.css";
import { useState } from "react";



export const NavBar = () => {
    const navigate = useNavigate();

    const localCelestialUser = localStorage.getItem("celestial_user");
    const celestialUserObject = JSON.parse(localCelestialUser);

    const [isSignsOpen, setIsSignsOpen] = useState(false);
    const [isHousesOpen, setIsHousesOpen] = useState(false);
    const [hoveredSign, setHoveredSign] = useState("");
    const [hoveredHouse, setHoveredHouse] = useState("");


    const toggleDropdownSigns = () => {

        setIsSignsOpen(!isSignsOpen);
    };

    const toggleDropdownHouses = () => {
        setIsHousesOpen(!isHousesOpen);
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
        <nav>
            <ul className="navbar">
                <li className="navbar__item">
                    <Link className="navbar__link" to="/Home">
                        Home
                    </Link>
                </li>
                <li className="navbar__item">
                    ✼
                </li>
                {/* <li className="navbar__item">
                    <Link className="navbar__link" to="/SunSigns">
                        Sun Signs
                    </Link>
                </li>
                <li className="navbar__item">
                    <Link className="navbar__link" to="/MoonSigns">
                        Moon Signs
                    </Link>
                </li>
                <li className="navbar__item">
                    <Link className="navbar__link" to="/RisingSigns">
                        Rising Signs
                    </Link>
                </li> */}
                <li className="navbar__item">
                    <Link className="navbar__link" to="/Houses">
                        Houses
                    </Link>
                </li>
                <li className="navbar__item">
                    <Link className="navbar__link" to="/Planets">
                        Planets
                    </Link>
                </li>
                <li className="navbar__item" onMouseLeave={closeDropdowns}>
                    <ul
                        className={`navbar__link ${isSignsOpen ? "active" : ""}`}
                        onMouseEnter={toggleDropdownSigns}
                    >
                        <li>Signs</li>
                        {isSignsOpen && (
                            <ul className="dropdown">
                                <li className={hoveredSign === "Aries" ? "active" : ""}
                                    onMouseEnter={() => setHoveredSign("Aries")}
                                    onMouseLeave={() => setHoveredSign("")}
                                    onClick={() => handleSignsOptionClick("Aries")}>
                                    Aries </li>
                                <li className={hoveredSign === "Taurus" ? "active" : ""}
                                    onMouseEnter={() => setHoveredSign("Taurus")}
                                    onMouseLeave={() => setHoveredSign("")}
                                    onClick={() => handleSignsOptionClick("Taurus")}>
                                    Taurus</li>
                                <li className={hoveredSign === "Gemini" ? "active" : ""}
                                    onMouseEnter={() => setHoveredSign("Gemini")}
                                    onMouseLeave={() => setHoveredSign("")}
                                    onClick={() => handleSignsOptionClick("Gemini")}>
                                    Gemini</li>
                                <li className={hoveredSign === "Cancer" ? "active" : ""}
                                    onMouseEnter={() => setHoveredSign("Cancer")}
                                    onMouseLeave={() => setHoveredSign("")}
                                    onClick={() => handleSignsOptionClick("Cancer")}>
                                    Cancer</li>
                                <li className={hoveredSign === "Leo" ? "active" : ""}
                                    onMouseEnter={() => setHoveredSign("Leo")}
                                    onMouseLeave={() => setHoveredSign("")}
                                    onClick={() => handleSignsOptionClick("Leo")}>
                                    Leo</li>
                                <li className={hoveredSign === "Virgo" ? "active" : ""}
                                    onMouseEnter={() => setHoveredSign("Virgo")}
                                    onMouseLeave={() => setHoveredSign("")}
                                    onClick={() => handleSignsOptionClick("Virgo")}>
                                    Virgo</li>
                                <li className={hoveredSign === "Libra" ? "active" : ""}
                                    onMouseEnter={() => setHoveredSign("Libra")}
                                    onMouseLeave={() => setHoveredSign("")}
                                    onClick={() => handleSignsOptionClick("Libra")}>
                                    Libra</li>
                                <li className={hoveredSign === "Scorpio" ? "active" : ""}
                                    onMouseEnter={() => setHoveredSign("Scorpio")}
                                    onMouseLeave={() => setHoveredSign("")}
                                    onClick={() => handleSignsOptionClick("Scorpio")}>
                                    Scorpio</li>
                                <li className={hoveredSign === "Sagittarius" ? "active" : ""}
                                    onMouseEnter={() => setHoveredSign("Sagittarius")}
                                    onMouseLeave={() => setHoveredSign("")}
                                    onClick={() => handleSignsOptionClick("Sagittarius")}>
                                    Sagittarius</li>
                                <li className={hoveredSign === "Capricorn" ? "active" : ""}
                                    onMouseEnter={() => setHoveredSign("Capricorn")}
                                    onMouseLeave={() => setHoveredSign("")}
                                    onClick={() => handleSignsOptionClick("Capricorn")}>
                                    Capricorn</li>
                                <li className={hoveredSign === "Aquarius" ? "active" : ""}
                                    onMouseEnter={() => setHoveredSign("Aquarius")}
                                    onMouseLeave={() => setHoveredSign("")}
                                    onClick={() => handleSignsOptionClick("Aquarius")}>
                                    Aquarius
                                </li>
                                <li className={hoveredSign === "Pisces" ? "active" : ""}
                                    onMouseEnter={() => setHoveredSign("Pisces")}
                                    onMouseLeave={() => setHoveredSign("")}
                                    onClick={() => handleSignsOptionClick("Pisces")}>
                                    Pisces</li>
                            </ul>
                        )}
                    </ul>
                </li>
                <li className="navbar__item">
                    <Link className="navbar__link" to="/Elements">
                        Elements
                    </Link>
                </li>
                    
                <li className="navbar__item">
                    <Link className="navbar__link" to="/Users">
                        Users
                    </Link>
                </li>
                <li className="navbar__item">
                    <Link className="navbar__link" to="/MySphere">
                        My Sphere
                    </Link>
                </li>
                {localCelestialUser && celestialUserObject.profileId && (
                    <li className="navbar__item">
                        <Link
                            className="navbar__link"
                            to={`/Profile/${celestialUserObject.profileId}`}
                        >
                            My Profile
                        </Link>
                    </li>
                )}
                {localCelestialUser && !celestialUserObject.profileId && (
                    <li className="navbar__item">
                        <Link className="navbar__link" to="/CreateProfile">
                            Create Profile
                        </Link>
                    </li>
                )}
                <li className="navbar__item">
                    ✼
                </li>
                {localCelestialUser && (
                    <li className="navbar__item navbar__logout">
                        <Link
                            className="navbar__link"
                            to=""
                            onClick={() => {
                                localStorage.removeItem("celestial_user");
                                navigate("/", { replace: true });
                            }}
                        >
                            Logout
                        </Link>
                    </li>
                )}
            </ul>
        </nav>
    );
};
