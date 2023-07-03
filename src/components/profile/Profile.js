import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { EditProfile } from "./EditProfile.js";
import { ViewProfile } from "./ViewProfile.js";
import "./profile.css";




export const Profile = () => {

  const { profileId } = useParams();

  const localCelestialUser = localStorage.getItem("celestial_user");
  const celestialUserObject = JSON.parse(localCelestialUser);
  const currentUserProfileId = celestialUserObject.profileId;

  const canEdit = +profileId === currentUserProfileId;

  const [isEditMode, setIsEditMode] = useState(false);
  const [profileData, setProfileData] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    ProfileInfo()
  }, []);

//this fixes the issue of having to refresh when clicking my profile, but breaks delete button and causes infinite loop :(
  // useEffect(() => {
  //   ProfileInfo()
  // }, [profileData]);

  useEffect(() => {
    ProfileInfo()
  }, [isEditMode])

  const ProfileInfo = () => {
    fetch(
      `http://localhost:8088/profiles/${profileId}?_expand=sun&_expand=moon&_expand=rising&_expand=user`
    )
      .then((response) => response.json())
      .then((data) => {
        setProfileData(data);
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

  //navigate to Create Profile if user doesnt already have a profile
  useEffect(() => {
    if (currentUserProfileId === null) {
      navigate("/CreateProfile");
    }
  }, [currentUserProfileId]);



  return (

    <div>

      {!isEditMode && <div className="profile-container page-container">

        <ViewProfile data={profileData} />
        {canEdit && (
          <button onClick={toggleEditMode} className="btn btn-primary">
            Edit Profile →
          </button>
        )}
      </div>
      }
      {isEditMode && (
        <div className="edit-profile-container page-container">
          <h1 className="ProfileForm__title page-title edit-title">Edit Profile</h1>
          {canEdit && (
            <button onClick={toggleEditMode} className="btn btn-primary">
              ← Back
            </button>
          )}
          <EditProfile onSave={handleSaveButtonClick} />

        </div>)
      }
    </div>

  );
};
