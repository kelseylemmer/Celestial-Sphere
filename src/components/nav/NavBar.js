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
                    <Link className="navbar__link" to="/">
                        Home
                    </Link>
                </li>
                <li className="navbar__item">
                    ✿
                </li>
                <li className="navbar__item">
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
                </li>
                <li className="navbar__item" onMouseLeave={closeDropdowns}>
                    <ul
                        className= {`navbar__link ${isSignsOpen ? "active" : ""}`}
                        onMouseEnter={toggleDropdownSigns}
                    >
                        <li>The Signs</li>
                        {isSignsOpen && (
                            <ul className="dropdown">
                                <li className={hoveredSign === "Aries" ? "active" : "undefined"}
                                    onMouseEnter={() => setHoveredSign("Aries")}
                                    onMouseLeave={() => setHoveredSign("")}
                                    onClick={() => handleSignsOptionClick("Aries")}>
                                    Aries </li>
                                <li className={hoveredSign === "Taurus" ? "active" : "undefined"}
                                    onMouseEnter={() => setHoveredSign("Taurus")}
                                    onMouseLeave={() => setHoveredSign("")}
                                    onClick={() => handleSignsOptionClick("Taurus")}>
                                    Taurus</li>
                                <li className={hoveredSign === "Gemini" ? "active" : "undefined"}
                                    onMouseEnter={() => setHoveredSign("Gemini")}
                                    onMouseLeave={() => setHoveredSign("")}
                                    onClick={() => handleSignsOptionClick("Gemini")}>
                                    Gemini</li>
                                <li className={hoveredSign === "Cancer" ? "active" : "undefined"}
                                    onMouseEnter={() => setHoveredSign("Cancer")}
                                    onMouseLeave={() => setHoveredSign("")}
                                    onClick={() => handleSignsOptionClick("Cancer")}>
                                    Cancer</li>
                                <li className={hoveredSign === "Leo" ? "active" : "undefined"}
                                    onMouseEnter={() => setHoveredSign("Leo")}
                                    onMouseLeave={() => setHoveredSign("")}
                                    onClick={() => handleSignsOptionClick("Leo")}>
                                    Leo</li>
                                <li className={hoveredSign === "Virgo" ? "active" : "undefined"}
                                    onMouseEnter={() => setHoveredSign("Virgo")}
                                    onMouseLeave={() => setHoveredSign("")}
                                    onClick={() => handleSignsOptionClick("Virgo")}>
                                    Virgo</li>
                                <li className={hoveredSign === "Libra" ? "active" : "undefined"}
                                    onMouseEnter={() => setHoveredSign("Libra")}
                                    onMouseLeave={() => setHoveredSign("")}
                                    onClick={() => handleSignsOptionClick("Libra")}>
                                    Libra</li>
                                <li className={hoveredSign === "Scorpio" ? "active" : "undefined"}
                                    onMouseEnter={() => setHoveredSign("Scorpio")}
                                    onMouseLeave={() => setHoveredSign("")}
                                    onClick={() => handleSignsOptionClick("Scorpio")}>
                                    Scorpio</li>
                                <li className={hoveredSign === "Sagittarius" ? "active" : "undefined"}
                                    onMouseEnter={() => setHoveredSign("Sagittarius")}
                                    onMouseLeave={() => setHoveredSign("")}
                                    onClick={() => handleSignsOptionClick("Sagittarius")}>
                                    Sagittarius</li>
                                <li className={hoveredSign === "Capricorn" ? "active" : "undefined"}
                                    onMouseEnter={() => setHoveredSign("Capricorn")}
                                    onMouseLeave={() => setHoveredSign("")}
                                    onClick={() => handleSignsOptionClick("Capricorn")}>
                                    Capricorn</li>
                                <li className={hoveredSign === "Aquarius" ? "active" : "undefined"}
                                    onMouseEnter={() => setHoveredSign("Aquarius")}
                                    onMouseLeave={() => setHoveredSign("")}
                                    onClick={() => handleSignsOptionClick("Aquarius")}>
                                    Aquarius    
                                    </li>
                                <li className={hoveredSign === "Pisces" ? "active" : "undefined"}
                                    onMouseEnter={() => setHoveredSign("Pisces")}
                                    onMouseLeave={() => setHoveredSign("")}
                                    onClick={() => handleSignsOptionClick("Pisces")}>
                                    Pisces</li>
                            </ul>
                        )}
                    </ul>
                </li>
                <li className="navbar__item">
                    <Link className="navbar__link" to="/Users">
                        Users
                    </Link>
                </li>
                <li className="navbar__item" onMouseLeave={closeDropdowns}>
                    <ul
                        className={`navbar__link ${isHousesOpen ? "active" : ""}`}
                        onMouseEnter={toggleDropdownHouses}
                    >
                        <li>Houses</li>
                        {isHousesOpen && (
                            <ul className="dropdown">
                                <li className={hoveredHouse === "First" ? "active" : ""}
                                    onMouseEnter={() => setHoveredHouse("First")}
                                    onMouseLeave={() => setHoveredHouse("")}
                                    onClick={() => handleHousesOptionClick("First")}>
                                    First House</li>
                                <li className={hoveredHouse === "Second" ? "active" : ""}
                                    onMouseEnter={() => setHoveredHouse("Second")}
                                    onMouseLeave={() => setHoveredHouse("")}
                                    onClick={() => handleHousesOptionClick("Second")}>
                                    Second House</li>
                                <li className={hoveredHouse === "Third" ? "active" : ""}
                                    onMouseEnter={() => setHoveredHouse("Third")}
                                    onMouseLeave={() => setHoveredHouse("")}
                                    onClick={() => handleHousesOptionClick("Third")}>
                                    Third House</li>
                                <li className={hoveredHouse === "Fourth" ? "active" : ""}
                                    onMouseEnter={() => setHoveredHouse("Fourth")}
                                    onMouseLeave={() => setHoveredHouse("")}
                                    onClick={() => handleHousesOptionClick("Fourth")}>
                                    Fourth House</li>
                                <li className={hoveredHouse === "Fifth" ? "active" : ""}
                                    onMouseEnter={() => setHoveredHouse("Fifth")}
                                    onMouseLeave={() => setHoveredHouse("")}
                                    onClick={() => handleHousesOptionClick("Fifth")}>
                                    Fifth House </li>
                                <li className={hoveredHouse === "Sixth" ? "active" : ""}
                                    onMouseEnter={() => setHoveredHouse("Sixth")}
                                    onMouseLeave={() => setHoveredHouse("")}
                                    onClick={() => handleHousesOptionClick("Sixth")}>
                                    Sixth House </li>
                                <li className={hoveredHouse === "Seventh" ? "active" : ""}
                                    onMouseEnter={() => setHoveredHouse("Seventh")}
                                    onMouseLeave={() => setHoveredHouse("")}
                                    onClick={() => handleHousesOptionClick("Seventh")}>
                                    Seventh House</li>
                                <li className={hoveredHouse === "Eighth" ? "active" : ""}
                                    onMouseEnter={() => setHoveredHouse("Eighth")}
                                    onMouseLeave={() => setHoveredHouse("")}
                                    onClick={() => handleHousesOptionClick("Eighth")}>
                                    Eighth House</li>
                                <li className={hoveredHouse === "Ninth" ? "active" : ""}
                                    onMouseEnter={() => setHoveredHouse("Ninth")}
                                    onMouseLeave={() => setHoveredHouse("")}
                                    onClick={() => handleHousesOptionClick("Ninth")}>
                                    Ninth House</li>
                                <li className={hoveredHouse === "Tenth" ? "active" : ""}
                                    onMouseEnter={() => setHoveredHouse("Tenth")}
                                    onMouseLeave={() => setHoveredHouse("")}
                                    onClick={() => handleHousesOptionClick("Tenth")}>
                                    Tenth House</li>
                                <li className={hoveredHouse === "Eleventh" ? "active" : ""}
                                    onMouseEnter={() => setHoveredHouse("Eleventh")}
                                    onMouseLeave={() => setHoveredHouse("")}
                                    onClick={() => handleHousesOptionClick("Eleventh")}>
                                    Eleventh House</li>
                                <li className={hoveredHouse === "Twelfth" ? "active" : ""}
                                    onMouseEnter={() => setHoveredHouse("Twelfth")}
                                    onMouseLeave={() => setHoveredHouse("")}
                                    onClick={() => handleHousesOptionClick("Twelfth")}>
                                    Twelfth House</li>
                            </ul>
                        )}
                    </ul>
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
                    ✿
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
