import { useEffect, useState } from "react"

export const profileView = ({data}) => {
    const [profile, setProfile] = useState([])

    const localCelestialUser = localStorage.getItem("celestial_user")
    const celestialUserObject = JSON.parse(localCelestialUser)

    useEffect(
        const { userId } = useParams()
        const [user, setUser] = useState({})

    useEffect(
        () => {
            fetch(`http://localhost:8088/users?_expand=sunSign&_expand=moonSign&_expand=risingSign&userId=${userId}`)
                .then(response => response.json())
                .then((data) => {
                    const user = data[0]
                    setUser(user)
                })
        },
        [userId]
    )


return <>

</>

}

const ViewProfile = ({ data }) => {
    return (
        <div>
            <p>
                Name: {data.first_name} {data.last_name}
            </p>
        </div>
    );
};

const EditProfile = ({ data, onSubmit }) => {
    const [formData, setFormData] = useState(data);

    return (
        <div>
            <input
                type="text"
                onChange={(e) =>
                    setFormData({ ...formData, first_name: e.target.value })
                }
                value={formData.first_name}
            />
            <input
                type="text"
                onChange={(e) =>
                    setFormData({ ...formData, last_name: e.target.value })
                }
                value={formData.last_name}
            />
            <button onClick={() => onSubmit(formData)}>Save changes</button>
        </div>
    );
};

const profileId = 4;
const currentUserId = 4;

const Profile = () => {
    const canEdit = profileId === currentUserId;

    const [isEditMode, setIsEditMode] = useState(false);
    const [profileData, setProfileData] = useState(null);

    const toggleEditMode = () => {
        setIsEditMode(!isEditMode);
    };

    useEffect(() => {
        // TODO: Fetch the profile data here from the API
        // TODO: For now, we'll skip that and just assign it some dummy data
        setProfileData({
            first_name: "Patrick",
            last_name: "Cason"
        });
    }, []);

    const submitEditProfile = (formData) => {
        // TODO: Submit this to the API!
        console.log("SUBMIT EDIT FORM", formData);

        // TODO: When done, use setProfileData to set it to the new data
    };

    if (!profileData) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>Profile</h1>
            {canEdit && (
                <button onClick={toggleEditMode}>
                    {isEditMode ? "Cancel" : "Edit profile"}
                </button>
            )}
            {isEditMode ? (
                <EditProfile data={profileData} onSubmit={submitEditProfile} />
            ) : (
                <ViewProfile data={profileData} />
            )}
        </div>
    );
};

export default Profile;
