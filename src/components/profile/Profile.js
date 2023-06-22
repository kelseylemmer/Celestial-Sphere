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
  const [isBlank, setisBlank] = useState(false);

  const toggleEditMode = () => {
    setIsEditMode(!isEditMode);
  };

  useEffect(
    () => {
      fetch(`http://localhost:8088/profiles/${profileId}?_expand=sunSign&_expand=moonSign&_expand=risingSign&_expand=user`)
        .then(response => response.json())
        .then((data) => {
          (Object.keys(data).length === 0) ? setisBlank(true)
            : 
          setProfileData(data)

        })
    },
    [profileId]
    // [isBlank]
  )

  const handleButtonClick = () => {
    navigate('/CreateProfile');
  }

  const submitEditProfile = (formData) => {
    // TODO: Submit this to the API!
    console.log("SUBMIT EDIT FORM", formData);

    // TODO: When done, use setProfileData to set it to the new data
  }

  // if (Object.keys(profileData).length === 0) {
  //   return <Button onClick={handleButtonClick} text="Go to Form" />
  // }

  return (
    <div>
    
      {(!isEditMode && !isBlank) && (
        <ViewProfile data={profileData} />
      )}
      {(canEdit && !isBlank) && (
        <button onClick={toggleEditMode}>
          {isEditMode ? "Cancel" : "Edit profile"}
        </button>
      )}
      {(isBlank) && (
        <Button onClick={handleButtonClick} text="Go to Form" />
      )}
    </div>
  );
}

// {
//   isEditMode ? (
//     <EditProfile data={profileData} onSubmit={submitEditProfile} />
//   )
//     : (
//       <ViewProfile data={profileData} />
//     )
// }


