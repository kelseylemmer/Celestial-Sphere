import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { EditProfile } from "./EditProfile.js";
import { ViewProfile } from "./ViewProfile.js";




export const Profile = () => {

  const { profileId } = useParams();

  const localCelestialUser = localStorage.getItem("celestial_user");
  const celestialUserObject = JSON.parse(localCelestialUser);
  const currentUserProfileId = celestialUserObject.profileId;

  const canEdit = +profileId === currentUserProfileId;

  const [isEditMode, setIsEditMode] = useState(false);
  const [profileData, setProfileData] = useState(null);


  useEffect(() => {
    ProfileInfo()

  }, []);

  useEffect(() => {
    ProfileInfo()
  }, [isEditMode])

  const ProfileInfo = () => {
    fetch(
      `http://localhost:8088/profiles/${profileId}?_expand=sun&_expand=moon&_expand=rising&_expand=user`
    )
      .then((response) => response.json())
      .then((data) => {
        setProfileData(data) ;
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



  return (
    <div>
      {!isEditMode &&
        <ViewProfile data={profileData} />
      }
      {canEdit && (
        <button onClick={toggleEditMode}>
          {isEditMode ? "Back" : "Edit profile"}
        </button>
      )}
      {isEditMode && (
        <EditProfile onSave={handleSaveButtonClick} />)
      }
    </div>
  );
};




//  const handleButtonClick = () => {
// navigate("/CreateProfile");
//   };
//  <Button onClick={handleButtonClick} text="Create Profile" />