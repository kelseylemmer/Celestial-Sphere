import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./profile.css";
import useLocalStorageState from "use-local-storage-state";

const DeleteButton = ({ setCelestialUserObject, user }) => {
    console.log("delete button", user)
    const navigate = useNavigate();

    const currentUserProfileId = user.profileId;
    const currentUserId = user.userId;

    const handleDelete = async () => {
        const allUserSpheresRequest = await fetch(`http://localhost:8088/userSpheres?userId=${currentUserId}`)
        const allUserSpheres = await allUserSpheresRequest.json()

        // Delete each userSphere individually
        const deletionPromises = allUserSpheres.map(userSphere =>
            fetch(`http://localhost:8088/userSpheres/${userSphere.id}`, {
                method: "DELETE"
            })
        );

        // Wait for all deletions to complete
        await Promise.all(deletionPromises);

        // Delete profile
        await fetch(`http://localhost:8088/profiles/${currentUserProfileId}`, {
            method: "DELETE"
        });

        setCelestialUserObject({ ...user, profileId: null })

        navigate("/Home");

    };

    return (
        <button onClick={handleDelete} className="btn">
            Delete Profile
        </button>
    );
};


export const EditProfile = ({ onSave }) => {
    const [suns, setSuns] = useState([]);
    const [moons, setMoons] = useState([]);
    const [risings, setRisings] = useState([]);
    const [profile, setProfile] = useState({
        userId: "",
        sunId: "",
        moonId: "",
        risingId: "",
    });

    const [celestialUserObject, setCelestialUserObject] = useLocalStorageState("celestial_user")
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

    return (
        <form className="ProfileForm">

            <fieldset>
                <div className="form-group">
                    <label>Display Name</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        value={profile.displayName}
                        onChange={(evt) => {
                            setProfile({ ...profile, displayName: (evt.target.value) })
                        }
                        }
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label>My Sun Sign</label>
                    <select
                        required
                        autoFocus
                        className="form-control "
                        placeholder="User Sun Sign"
                        value={profile.sunId}
                        onChange={(evt) =>
                            setProfile({ ...profile, sunId: parseInt(evt.target.value) })
                        }
                    >
                        <option className="form-select" value="0" defaultValue>
                            Select Your Sun Sign
                        </option>
                        {suns.map((sunObject) => (
                            <option className="form-select" value={sunObject.id} key={sunObject.id}>
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
            <fieldset>
                <div className="form-group">
                    <label>Upload New Photo</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Profile Picture URL"
                        value={profile.picture}
                        onChange={(evt) => {
                            setProfile({ ...profile, picture: (evt.target.value) })
                        }
                        }
                    />
                </div>
            </fieldset>
            <div className="btns-update-delete">
                <button onClick={handleSaveButtonClick} className="btn btn-primary">
                    Update Profile
                </button>
                {/* <DeleteButton user={celestialUserObject} setCelestialUserObject={setCelestialUserObject} /> */}
            </div>

        </form>
    );
};