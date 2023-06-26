import { useEffect, useState } from "react"
import { useNavigate, } from "react-router-dom"



export const ProfileForm = () => {


    const [profile, update] = useState({
        userId: "",
        sunId: "",
        moonId: "",
        risingId: "",
    })

    const [suns, setSuns] = useState([])
    const [moons, setMoons] = useState([])
    const [risings, setRisings] = useState([])

    const navigate = useNavigate()

    const localCelestialUser = localStorage.getItem("celestial_user")
    const celestialUserObject = JSON.parse(localCelestialUser)
    const currentUserId = celestialUserObject.id;


    const handleSaveButtonClick = (event) => {
        event.preventDefault()

        const profileToSendToAPI = {
            userId: currentUserId,
            sunId: +profile.sunId,
            moonId: +profile.moonId,
            risingId: +profile.risingId
        }

        if (profile.sunId > 0 && profile.moonId > 0 && profile.risingId > 0) {
            return fetch(`http://localhost:8088/profiles`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(profileToSendToAPI)
            })
                .then(response => response.json())
                .then(() => {
                    navigate(`/profile/${profile.id}`)

                })
        }
    }

    useEffect(
        () => {
            fetch(` http://localhost:8088/suns`)
                .then(response => response.json())
                .then((sunsArray) => {
                    setSuns(sunsArray)
                })
        },
        []
    );

    useEffect(
        () => {
            fetch(` http://localhost:8088/moons`)
                .then(response => response.json())
                .then((moonsArray) => {
                    setMoons(moonsArray)
                })
        },
        []
    );

    useEffect(
        () => {
            fetch(` http://localhost:8088/risings`)
                .then(response => response.json())
                .then((risingArray) => {
                    setRisings(risingArray)
                })
        },
        []
    );


    return (
        <form className="ProfileForm">
            <h2 className="ProfileForm__title">New Profile</h2>
            <fieldset>
                <div className="form-group">
                    <label>My Sun Sign</label>
                    <select
                        required autoFocus
                        className="form-control"
                        placeholder="User Sun Sign"
                        value={suns.id}
                        onChange={
                            (evt) => {
                                const copy = { ...profile }
                                copy.sunId = evt.target.value
                                update(copy)
                            }
                        }
                    >
                        <option value="0" defaultValue>Select Your Sun Sign</option>
                        {suns.map(sunObject => (
                            <option value={sunObject.id} key={sunObject.id}>{sunObject.name}</option>
                        ))}
                    </select>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label>My Moon Sign</label>
                    <select
                        required autoFocus
                        className="form-control"
                        placeholder="User Moon Sign"
                        value={moons.id}
                        onChange={
                            (evt) => {
                                const copy = { ...profile }
                                copy.moonId = evt.target.value
                                update(copy)
                            }
                        }
                    >
                        <option value="0" defaultValue>Select Your Moon Sign</option>
                        {moons.map(moonObject => (
                            <option value={moonObject.id} key={moonObject.id}>{moonObject.name}</option>
                        ))}
                    </select>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label>My Rising Sign</label>
                    <select
                        required autoFocus
                        className="form-control"
                        placeholder="User Rising Sign"
                        value={risings.id}
                        onChange={
                            (evt) => {
                                const copy = { ...profile }
                                copy.risingId = evt.target.value
                                update(copy)
                            }
                        }
                    >
                        <option value="0" defaultValue>Select Your Rising Sign</option>
                        {risings.map(risingObject => (
                            <option value={risingObject.id} key={risingObject.id}>{risingObject.name}</option>
                        ))}
                    </select>
                </div>
            </fieldset>

            <button
                onClick={(clickEvent) => handleSaveButtonClick(clickEvent)}
                className="btn btn-primary">
                Submit Profile
            </button>
        </form>
    )
}