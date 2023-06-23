import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { EditProfile } from "./EditProfile.js";
import { ViewProfile } from "./ViewProfile.js";
import { Button } from "./CreateProfileButton.js";



export const Profile = () => {
  const navigate = useNavigate();

  const { profileId } = useParams();

  const localCelestialUser = localStorage.getItem("celestial_user");
  const celestialUserObject = JSON.parse(localCelestialUser);
  const currentUserId = celestialUserObject.id;

  const canEdit = +profileId === currentUserId;

  const [isEditMode, setIsEditMode] = useState(false);
  const [profileData, setProfileData] = useState(null);
  const [isBlank, setIsBlank] = useState(false);

  useEffect(() => {
    ProfileInfo()
    
  }, []);

  useEffect(() => {
    ProfileInfo()
  },[isEditMode])

  const ProfileInfo =() =>  {
    fetch(
      `http://localhost:8088/profiles/${profileId}?_expand=sunSign&_expand=moonSign&_expand=risingSign&_expand=user`
    )
      .then((response) => response.json())
      .then((data) => {
        if (Object.keys(data).length === 0) {
          setIsBlank(true);
        } else {
          setProfileData(data);
        }
      })
  }


  const toggleEditMode = () => {
    setIsEditMode(!isEditMode);
  };

  const handleSaveButtonClick = (updateProfileData) => {
    // Update the profile data with the new data
    setProfileData(updateProfileData);
    setIsEditMode(false);
  };

  const handleButtonClick = () => {
    navigate("/CreateProfile");
  };

  return (
    <div>
      {!isEditMode && !isBlank && 
      <ViewProfile data={profileData} />
      }
      {canEdit && !isBlank && (
        <button onClick={toggleEditMode}>
          {isEditMode ? "Back" : "Edit profile"}
        </button>
      )}
      {isBlank && 
      <Button onClick={handleButtonClick} text="Create Profile" />
      }
      {isEditMode && (
        <EditProfile onSave={handleSaveButtonClick} />)
      }
    </div>
  );
};




