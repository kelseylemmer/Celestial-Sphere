import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { EditProfile } from "./EditProfile.js";
import { ViewProfile } from "./ViewProfile.js";
import { Button } from "./CreateProfileButton.js"



export const Profile = () => {

  const navigate = useNavigate();

  let { profileId } = useParams();

  const localCelestialUser = localStorage.getItem("celestial_user")
  const celestialUserObject = JSON.parse(localCelestialUser)
  const currentUserId = celestialUserObject.id;

  const canEdit = +profileId === currentUserId;

  const [isEditMode, setIsEditMode] = useState(false);
  const [profileData, setProfileData] = useState(null);

  const toggleEditMode = () => {
    setIsEditMode(!isEditMode);
  };

  useEffect(
    () => {
      fetch(`http://localhost:8088/profiles/${profileId}?_expand=sunSign&_expand=moonSign&_expand=risingSign`)
        .then(response => response.json())
        .then((data) => {
          setProfileData(data)
        })
    },
    [profileId]
  )

  const handleButtonClick = () => {
    navigate('/CreateProfile');
  }

  const submitEditProfile = (formData) => {
    // TODO: Submit this to the API!
    console.log("SUBMIT EDIT FORM", formData);

    // TODO: When done, use setProfileData to set it to the new data
  }

  if (!profileData) {
    return <Button onClick={handleButtonClick} text="Go to Form" />
  }

  return (
    <div>
      {isEditMode ? (
        <EditProfile data={profileData} onSubmit={submitEditProfile} />
      ) : (
        <ViewProfile data={profileData} />
      )}
      {canEdit && (
        <button onClick={toggleEditMode}>
          {isEditMode ? "Cancel" : "Edit profile"}
        </button>
      )}
    </div>
  );
}
