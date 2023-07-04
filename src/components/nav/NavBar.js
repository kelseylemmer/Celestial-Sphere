import { Link, useNavigate } from "react-router-dom";
import "./NavBar.css";




export const NavBar = () => {

    const navigate = useNavigate()


    const localCelestialUser = localStorage.getItem("celestial_user");
    const celestialUserObject = JSON.parse(localCelestialUser);

    return (
        <nav id="nav">
            <ul>
                <li>
                    <Link to="/Home">
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="#">Astrology 101</Link>
                    <ul>
                        <li>
                            <Link to="/BirthCharts">
                                Birth Charts
                            </Link>
                        </li>
                        <li>
                            <Link to="/Houses">
                                Houses
                            </Link>
                        </li>
                        <li>
                            <Link to="/Planets">
                                Planets
                            </Link>
                        </li>
                        <li>
                            <Link to="/Elements">
                                Elements + Modalities
                            </Link>
                        </li>
                        <li>
                            <Link to="/Aspects">
                                Aspects
                            </Link>
                        </li>
                        <li>
                            <Link to="#">Signs</Link>
                            <ul>
                                <li>
                                    <Link to="/Signs/Aries">
                                        Aries
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/Signs/Taurus">
                                        Taurus
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/Signs/Gemini">
                                        Gemini
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/Signs/Cancer">
                                        Cancer
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/Signs/Leo">
                                        Leo
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/Signs/Virgo">
                                        Virgo
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/Signs/Libra">
                                        Libra
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/Signs/Scorpio">
                                        Scorpio
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/Signs/Sagittarius">
                                        Sagittarius
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/Signs/Capricorn">
                                        Capricorn
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/Signs/Aquarius">
                                        Aquarius
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/Signs/Pisces">
                                        Pisces
                                    </Link>
                                </li>
                            </ul>
                        </li>

                    </ul>
                </li>
                <li>
                    <Link to="/Users">
                        Celestial Users
                    </Link>
                </li>
                {localCelestialUser && celestialUserObject.profileId && (
                    <li>
                        <Link to="/MySphere">
                            My Sphere
                        </Link>
                    </li>
                )}
                {localCelestialUser && celestialUserObject.profileId && (
                    <li>
                        <Link
                            to={`/Profile/${celestialUserObject.profileId}`}>
                            My Profile
                        </Link>
                    </li>
                )}
                {localCelestialUser && !celestialUserObject.profileId && (
                    <li>
                        <Link to="/CreateProfile">
                            Create Profile
                        </Link>
                    </li>
                )}
                {localCelestialUser && (
                    <li className="navbar__item navbar__logout">
                        <Link
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
