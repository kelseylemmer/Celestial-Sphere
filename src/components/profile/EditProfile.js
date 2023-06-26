import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";


export const EditProfile = ({ onSave, onCancel }) => {
    const [suns, setSuns] = useState([]);
    const [moons, setMoons] = useState([]);
    const [risings, setRisings] = useState([]);
    const [profile, setProfile] = useState({
        userId: "",
        sunId: "",
        moonId: "",
        risingId: "",
    });

    const localCelestialUser = localStorage.getItem("celestial_user");
    const celestialUserObject = JSON.parse(localCelestialUser);
    const currentUserProfileId = celestialUserObject.profileId



    useEffect(() => {
        fetch(`http://localhost:8088/profiles/${currentUserProfileId}`)
            .then((response) => response.json())
            .then((data) => {

                setProfile(data);
            });
    }, []);

    useEffect(() => {
        fetch(`http://localhost:8088/suns`)
            .then((response) => response.json())
            .then((sunsArray) => {
                setSuns(sunsArray);
            });
    }, []);
    useEffect(() => {
        fetch(`http://localhost:8088/moons`)
            .then((response) => response.json())
            .then((moonsArray) => {
                setMoons(moonsArray);
            });
    }, []);
    useEffect(() => {
        fetch(`http://localhost:8088/risings`)
            .then((response) => response.json())
            .then((risingArray) => {
                setRisings(risingArray);
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
    }


    const DeleteButton = ({ currentUserProfileId }) => {
        const navigate = useNavigate();

        const handleDelete = () => {
            fetch(`http://localhost:8088/profiles/${currentUserProfileId}`, {
                method: "DELETE"
            })
                .then(() => {
                    navigate("/Home");
                })
                // .then(
                //     resetLocalUserProfile()
                // )
                .catch((error) => {
                    console.error("Error deleting profile:", error);
                });
        };


        return (
            <button onClick={handleDelete} className="btn">
                Delete Profile
            </button>
        );
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
                            value={profile.sunId}
                            onChange={(evt) =>
                                setProfile({ ...profile, sunId: parseInt(evt.target.value) })
                            }
                        >
                            <option value="0" defaultValue>
                                Select Your Sun Sign
                            </option>
                            {suns.map((sunObject) => (
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
                            value={profile.moonId}
                            onChange={(evt) =>
                                setProfile({ ...profile, moonId: parseInt(evt.target.value) })
                            }
                        >
                            <option value="0" defaultValue>
                                Select Your Moon Sign
                            </option>
                            {moons.map((moonObject) => (
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
                            value={profile.risingId}
                            onChange={(evt) =>
                                setProfile({ ...profile, risingId: parseInt(evt.target.value) })
                            }
                        >
                            <option value="0" defaultValue>
                                Select Your Rising Sign
                            </option>
                            {risings.map((risingObject) => (
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
                <DeleteButton currentUserProfileId={currentUserProfileId} />

            </form>

        </>
    );
};