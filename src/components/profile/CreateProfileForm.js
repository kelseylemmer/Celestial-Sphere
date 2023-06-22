import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"


export const ProfileForm = () => {
    /*
        TODO: Add the correct default properties to the
        initial state object
    */
    const [profile, update] = useState({
        userId: "",
        sunSignId: "",
        moonSignId: "",
        risingSignId: "",
    })

    const [sunSigns, setSunSigns] = useState([])
    const [moonSigns, setMoonSigns] = useState([])
    const [risingSigns, setRisingSigns] = useState([])
    /*
        TODO: Use the useNavigation() hook so you can redirect
        the user to the profile
        
    */

    const localCelestialUser = localStorage.getItem("celestial_user")
    const celestialUserObject = JSON.parse(localCelestialUser)
    const currentUserId = celestialUserObject.id;

    const navigate = useNavigate()


    const handleSaveButtonClick = (event) => {
        event.preventDefault()


        // TODO: Create the object to be saved to the API
        const profileToSendToAPI = {
            userId: currentUserId,
            sunSignId: +profile.sunSignId,
            moonSignId: +profile.moonSignId,
            risingSignId: +profile.risingSignId
        }

        // TODO: Perform the fetch() to POST the object to the API
        if (profile.sunSignId > 0 && profile.moonSignId > 0 && profile.risingSignId > 0) {
            return fetch(`http://localhost:8088/profiles`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(profileToSendToAPI)
            })
                .then(response => response.json())
                .then(() => {
                    navigate("/profile${celestialUserObject.id}")

                })
        }
    }

    useEffect(
        () => {
            fetch(` http://localhost:8088/sunSigns`)
                .then(response => response.json())
                .then((sunsArray) => {
                    setSunSigns(sunsArray)
                })
        },
        [] //When this array is empty, you are observing inital componenet state
    );

    useEffect(
        () => {
            fetch(` http://localhost:8088/moonSigns`)
                .then(response => response.json())
                .then((moonsArray) => {
                    setMoonSigns(moonsArray)
                })
        },
        [] //When this array is empty, you are observing inital componenet state
    );

    useEffect(
        () => {
            fetch(` http://localhost:8088/risingSigns`)
                .then(response => response.json())
                .then((risingArray) => {
                    setRisingSigns(risingArray)
                })
        },
        [] //When this array is empty, you are observing inital componenet state
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
                        value={sunSigns.id}
                        onChange={
                            (evt) => {
                                const copy = { ...profile }
                                copy.sunSignId = evt.target.value
                                update(copy)
                            }
                        }
                    >
                        <option value="0" defaultValue>Select Your Sun Sign</option>
                        {sunSigns.map(sunObject => (
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
                        value={moonSigns.id}
                        onChange={
                            (evt) => {
                                const copy = { ...profile }
                                copy.moonSignId = evt.target.value
                                update(copy)
                            }
                        }
                    >
                        <option value="0" defaultValue>Select Your Moon Sign</option>
                        {moonSigns.map(moonObject => (
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
                        value={risingSigns.id}
                        onChange={
                            (evt) => {
                                const copy = { ...profile }
                                copy.risingSignId = evt.target.value
                                update(copy)
                            }
                        }
                    >
                        <option value="0" defaultValue>Select Your Rising Sign</option>
                        {risingSigns.map(risingObject => (
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
