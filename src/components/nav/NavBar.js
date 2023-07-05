import { Link, useNavigate } from "react-router-dom";
import "./NavBar.css";
import useLocalStorageState from "use-local-storage-state";




export const NavBar = () => {

    const navigate = useNavigate()


    const [user, setUser, { removeItem }] = useLocalStorageState("celestial_user")

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
                                Elements
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
                {user && user.profileId && (
                    <li>
                        <Link to="/MySphere">
                            My Sphere
                        </Link>
                    </li>
                )}
                {user && user.profileId && (
                    <li>
                        <Link
                            to={`/Profile/${user.profileId}`}>
                            My Profile
                        </Link>
                    </li>
                )}
                {user && !user.profileId && (
                    <li>
                        <Link to="/CreateProfile">
                            Create Profile
                        </Link>
                    </li>
                )}
                {user && (
                    <li className="navbar__item navbar__logout">
                        <Link
                            to=""
                            onClick={() => {
                                removeItem();
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
