import { useEffect, useState } from "react"
import "./User.css"
import { Link } from "react-router-dom"

export const UserList = () => {
    const [profiles, setProfiles] = useState([])

    const [searchTerm, setSearchTerm] = useState("")
    const [selectedSunSign, setSelectedSunSign] = useState("")
    const [selectedMoonSign, setSelectedMoonSign] = useState("")
    const [selectedRisingSign, setSelectedRisingSign] = useState("")


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

    const filteredProfiles = profiles.filter((profile) => {
        const fullName = `${profile?.user.firstName} ${profile?.user.lastName}`.toLowerCase();
        const nameMatch = fullName.startsWith(searchTerm.toLowerCase());
        const sunSignMatch = selectedSunSign === "" || profile?.sun?.name.toLowerCase() === selectedSunSign.toLowerCase();
        const moonSignMatch = selectedMoonSign === "" || profile?.moon?.name.toLowerCase() === selectedMoonSign.toLowerCase();
        const risingSignMatch = selectedRisingSign === "" || profile?.rising?.name.toLowerCase() === selectedRisingSign.toLowerCase();

        return (nameMatch || searchTerm === "") && sunSignMatch && moonSignMatch && risingSignMatch;
    });

    const handleSearch = (event) => {
        setSearchTerm(event.target.value)
    }
    const handleSunSignChange = (event) => {
        setSelectedSunSign(event.target.value)
    }
    const handleMoonSignChange = (event) => {
        setSelectedMoonSign(event.target.value)
    }
    const handleRisingSignChange = (event) => {
        setSelectedRisingSign(event.target.value)
    }


    const addToMySphere = (profileId) => {
        const localCelestialUser = localStorage.getItem("celestial_user");
        const celestialUserObject = JSON.parse(localCelestialUser);
        const currentUserProfileId = celestialUserObject.profileId;
        const mySphereObject = {
            profileId: profileId,
            userId: currentUserProfileId,
            sphere: true
        };

        fetch(`http://localhost:8088/userSpheres`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(mySphereObject)
        })
            .then(response => response.json())
    }



    return <>
        <div className="page-container user-container">
            <h1 className="page-title user-title">Celestial Users</h1>
            <section className="searchUsers">
                <input
                    type="text"
                    placeholder="Search by name"
                    value={searchTerm}
                    onChange={handleSearch} />
                <div className="filter-container">
                    <select value={selectedSunSign} onChange={handleSunSignChange}>
                        <option value="">All Sun Signs</option>
                        <option value="Aries">Aries</option>
                        <option value="Taurus">Taurus</option>
                        <option value="Gemini">Gemini</option>
                        <option value="Cancer">Cancer</option>
                        <option value="Leo">Leo</option>
                        <option value="Virgo">Virgo</option>
                        <option value="Libra">Libra</option>
                        <option value="Scorpio">Scorpio</option>
                        <option value="Sagittarius">Sagittarius</option>
                        <option value="Capricorn">Capricorn</option>
                        <option value="Aquarius">Aquarius</option>
                        <option value="Pisces">Pisces</option>
                    </select>
                    <select value={selectedMoonSign} onChange={handleMoonSignChange}>
                        <option value="">All Moon Signs</option>
                        <option value="Aries">Aries</option>
                        <option value="Taurus">Taurus</option>
                        <option value="Gemini">Gemini</option>
                        <option value="Cancer">Cancer</option>
                        <option value="Leo">Leo</option>
                        <option value="Virgo">Virgo</option>
                        <option value="Libra">Libra</option>
                        <option value="Scorpio">Scorpio</option>
                        <option value="Sagittarius">Sagittarius</option>
                        <option value="Capricorn">Capricorn</option>
                        <option value="Aquarius">Aquarius</option>
                        <option value="Pisces">Pisces</option>
                    </select>
                    <select value={selectedRisingSign} onChange={handleRisingSignChange}>
                        <option value="">All Rising Signs</option>
                        <option value="Aries">Aries</option>
                        <option value="Taurus">Taurus</option>
                        <option value="Gemini">Gemini</option>
                        <option value="Cancer">Cancer</option>
                        <option value="Leo">Leo</option>
                        <option value="Virgo">Virgo</option>
                        <option value="Libra">Libra</option>
                        <option value="Scorpio">Scorpio</option>
                        <option value="Sagittarius">Sagittarius</option>
                        <option value="Capricorn">Capricorn</option>
                        <option value="Aquarius">Aquarius</option>
                        <option value="Pisces">Pisces</option>
                    </select>
                </div>
            </section>
            <article className="users ">
                {filteredProfiles.length > 0 ? (
                    filteredProfiles.map((profile) => (
                        <section className="user" key={`${profile.id}`}>
                                <header><Link to={`/Profile/${profile.id}`}><span className="unbounded">{profile?.user.firstName} {profile?.user.lastName}</span></Link></header>
                                <p>
                                    <div>✦ <span className="unbounded">Sun:</span> {profile?.sun?.name}</div>
                                    <div>✦ <span className="unbounded">Moon:</span> {profile?.moon?.name}</div>
                                    <div>✦ <span className="unbounded">Rising:</span> {profile?.rising?.name}</div>
                                </p>
                            <section className="bottom">
                                <button
                                    onClick={(clickEvent) => addToMySphere(profile.id)}
                                    className="add-button"> ✢Add
                                </button>
                            </section>
                        </section>
                    ))
                ) : (
                    <p>No matching users found.</p>
                )}
            </article>
        </div>
    </>
}