import { useEffect, useState } from "react";


export const EditProfile = ({ onSave, onCancel }) => {
    const [sunSigns, setSunSigns] = useState([]);
    const [moonSigns, setMoonSigns] = useState([]);
    const [risingSigns, setRisingSigns] = useState([]);
    const [profile, setProfile] = useState({
        userId: "",
        sunSignId: "",
        moonSignId: "",
        risingSignId: "",
    });

    const localCelestialUser = localStorage.getItem("celestial_user");
    const celestialUserObject = JSON.parse(localCelestialUser);
    const currentUserId = celestialUserObject.id;
        

    useEffect(() => {
        fetch(`http://localhost:8088/profiles/${currentUserId}`)
            .then((response) => response.json())
            .then((data) => {

                setProfile(data);
            });
    }, []);

    useEffect(() => {
        fetch(`http://localhost:8088/sunSigns`)
            .then((response) => response.json())
            .then((sunsArray) => {
                setSunSigns(sunsArray);
            });
    }, []);
    useEffect(() => {
        fetch(`http://localhost:8088/moonSigns`)
            .then((response) => response.json())
            .then((moonsArray) => {
                setMoonSigns(moonsArray);
            });
    }, []);
    useEffect(() => {
        fetch(`http://localhost:8088/risingSigns`)
            .then((response) => response.json())
            .then((risingArray) => {
                setRisingSigns(risingArray);
            });
    }, []);

    const handleSaveButtonClick = (event) => {
        event.preventDefault();
        fetch(`http://localhost:8088/profiles/${profile.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(profile),
        })
            .then((response) => response.json())
            .then((updatedProfile) => {
                onSave(updatedProfile);
                setProfile(updatedProfile)
                window.alert("Your Profile Has Been Successfully Updated");
            })

    };
    return (
        <>
            <form className="ProfileForm">
                <h2 className="ProfileForm__title">Edit Profile</h2>
                <fieldset>
                    <div className="form-group">
                        <label>My Sun Sign</label>
                        <select
                            required
                            autoFocus
                            className="form-control"
                            placeholder="User Sun Sign"
                            value={profile.sunSignId}
                            onChange={(evt) =>
                                setProfile({ ...profile, sunSignId: parseInt(evt.target.value) })
                            }
                        >
                            <option value="0" defaultValue>
                                Select Your Sun Sign
                            </option>
                            {sunSigns.map((sunObject) => (
                                <option value={sunObject.id} key={sunObject.id}>
                                    {sunObject.name}
                                </option>
                            ))}
                        </select>
                    </div>
                </fieldset>
                <fieldset>
                    <div className="form-group">
                        <label>My Moon Sign</label>
                        <select
                            required
                            autoFocus
                            className="form-control"
                            placeholder="User Moon Sign"
                            value={profile.moonSignId}
                            onChange={(evt) =>
                                setProfile({ ...profile, moonSignId: parseInt(evt.target.value) })
                            }
                        >
                            <option value="0" defaultValue>
                                Select Your Moon Sign
                            </option>
                            {moonSigns.map((moonObject) => (
                                <option value={moonObject.id} key={moonObject.id}>
                                    {moonObject.name}
                                </option>
                            ))}
                        </select>
                    </div>
                </fieldset>
                <fieldset>
                    <div className="form-group">
                        <label>My Rising Sign</label>
                        <select
                            required
                            autoFocus
                            className="form-control"
                            placeholder="User Rising Sign"
                            value={profile.risingSignId}
                            onChange={(evt) =>
                                setProfile({ ...profile, risingSignId: parseInt(evt.target.value) })
                            }
                        >
                            <option value="0" defaultValue>
                                Select Your Rising Sign
                            </option>
                            {risingSigns.map((risingObject) => (
                                <option value={risingObject.id} key={risingObject.id}>
                                    {risingObject.name}
                                </option>
                            ))}
                        </select>
                    </div>
                </fieldset>
                <button onClick={handleSaveButtonClick} className="btn btn-primary">
                    Update Profile
                </button>
            </form>
        </>
    );
};





