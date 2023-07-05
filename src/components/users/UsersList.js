import { useEffect, useState } from "react"
import "./User.css"
import { Link } from "react-router-dom"
import useLocalStorageState from "use-local-storage-state"


const UserListProfile = ({ profile, editMySphere, findProfileInSphere }) => {

  const [isAdded, setIsAdded] = useState(!findProfileInSphere(profile.id))


  const toggleAddMode = () => {
    setIsAdded(!isAdded)
  }

  return (
    <section className="user">
      <header><Link to={`/Profile/${profile.id}`}><span className="unbounded">{profile?.user.firstName} {profile?.user.lastName}</span></Link></header>
      <section>
        <div>✦ <span className="unbounded">Sun:</span> {profile?.sun?.name}</div>
        <div>✦ <span className="unbounded">Moon:</span> {profile?.moon?.name}</div>
        <div>✦ <span className="unbounded">Rising:</span> {profile?.rising?.name}</div>
      </section>
      <section className="bottom">
        {isAdded && (
          <button
            onClick={(clickEvent) => {
              editMySphere(profile.id, "add");
              toggleAddMode();
            }}
            className="add-delete-button"> ✢ add</button>
        )}
        {!isAdded && (
          <button
            onClick={(clickEvent) => {
              editMySphere(profile.id, "remove");
              toggleAddMode();
            }}
            className="add-delete-button"> ☹️ remove</button>
        )}
      </section>
    </section>
  )
}


export const UserList = () => {
  const [profiles, setProfiles] = useState([])

  const [searchTerm, setSearchTerm] = useState("")
  const [selectedSunSign, setSelectedSunSign] = useState("")
  const [selectedMoonSign, setSelectedMoonSign] = useState("")
  const [selectedRisingSign, setSelectedRisingSign] = useState("")

  const [userSphere, setUserSphere] = useState([])

  const [celestialUserObject, setCelestialUserObject] = useLocalStorageState("celestial_user")
  const currentUserId = celestialUserObject.userId;


  //fetch all connections in current user's sphere and store them
  useEffect(
    () => {
      fetch(`http://localhost:8088/userSpheres?userId=${currentUserId}`)
        .then(response => response.json())
        .then((userSphereArray) => {
          setUserSphere(userSphereArray)
        })
    },
    []
  )


  useEffect(
    () => {
      fetch(`http://localhost:8088/profiles/?_expand=sun&_expand=moon&_expand=rising&_expand=user`)
        .then(response => response.json())
        .then((profileArray) => {
          //fiter out current user's profile from showing in userList
          const filteredUserList = profileArray.filter(item => item.userId !== currentUserId)
          setProfiles(filteredUserList)
        })
    },
    []
  )

  //search by name + filter by sun, moon, rising
  const filteredProfiles = profiles.filter((profile) => {
    const fullName = `${profile?.user.firstName} ${profile?.user.lastName}`.toLowerCase();
    const nameMatch = fullName.startsWith(searchTerm.toLowerCase());
    const sunSignMatch = selectedSunSign === "" || profile?.sun?.name.toLowerCase() === selectedSunSign.toLowerCase();
    const moonSignMatch = selectedMoonSign === "" || profile?.moon?.name.toLowerCase() === selectedMoonSign.toLowerCase();
    const risingSignMatch = selectedRisingSign === "" || profile?.rising?.name.toLowerCase() === selectedRisingSign.toLowerCase();

    return (nameMatch || searchTerm === "") && sunSignMatch && moonSignMatch && risingSignMatch;
  });

  const handleSearch = (event) => {
    setSearchTerm(event.target.value)
  }
  const handleSunSignChange = (event) => {
    setSelectedSunSign(event.target.value)
  }
  const handleMoonSignChange = (event) => {
    setSelectedMoonSign(event.target.value)
  }
  const handleRisingSignChange = (event) => {
    setSelectedRisingSign(event.target.value)
  }

  //filter through userSphere and check for if profileId = profileId exists
  const findProfileInSphere = (profileId) => {
    return userSphere.find(sphere => sphere.profileId === profileId)
  }

  // add or delete
  const editMySphere = (profileId, action) => {

    const currentUserId = celestialUserObject.userId;


    if (action === "add") {
      const mySphereObject = {
        profileId: profileId,
        userId: currentUserId,
      };
      fetch(`http://localhost:8088/userSpheres`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(mySphereObject)
      })
        .then(response => response.json())
        .then(response => {
          setUserSphere([...userSphere, response])
        })
    } else if (action === "remove") {
      const profileToRemove = findProfileInSphere(profileId).id
      fetch(`http://localhost:8088/userSpheres/${profileToRemove}`, {
        method: "DELETE",
      })
        .then(response => response.json())
        .then(response => {
          setUserSphere(userSphere.filter(connection => connection.id !== profileToRemove))
        })
    }
  };


  return <>
    <div className="page-container user-container">
      <h1 className="page-title user-title">Celestial Users</h1>
      <section className="searchUsers">
        <input
          type="text"
          placeholder="Search by name"
          value={searchTerm}
          onChange={handleSearch} />
        <div className="filter-container">
          <select value={selectedSunSign} onChange={handleSunSignChange}>
            <option value="">All Sun Signs</option>
            <option value="Aries">Aries</option>
            <option value="Taurus">Taurus</option>
            <option value="Gemini">Gemini</option>
            <option value="Cancer">Cancer</option>
            <option value="Leo">Leo</option>
            <option value="Virgo">Virgo</option>
            <option value="Libra">Libra</option>
            <option value="Scorpio">Scorpio</option>
            <option value="Sagittarius">Sagittarius</option>
            <option value="Capricorn">Capricorn</option>
            <option value="Aquarius">Aquarius</option>
            <option value="Pisces">Pisces</option>
          </select>
          <select value={selectedMoonSign} onChange={handleMoonSignChange}>
            <option value="">All Moon Signs</option>
            <option value="Aries">Aries</option>
            <option value="Taurus">Taurus</option>
            <option value="Gemini">Gemini</option>
            <option value="Cancer">Cancer</option>
            <option value="Leo">Leo</option>
            <option value="Virgo">Virgo</option>
            <option value="Libra">Libra</option>
            <option value="Scorpio">Scorpio</option>
            <option value="Sagittarius">Sagittarius</option>
            <option value="Capricorn">Capricorn</option>
            <option value="Aquarius">Aquarius</option>
            <option value="Pisces">Pisces</option>
          </select>
          <select value={selectedRisingSign} onChange={handleRisingSignChange}>
            <option value="">All Rising Signs</option>
            <option value="Aries">Aries</option>
            <option value="Taurus">Taurus</option>
            <option value="Gemini">Gemini</option>
            <option value="Cancer">Cancer</option>
            <option value="Leo">Leo</option>
            <option value="Virgo">Virgo</option>
            <option value="Libra">Libra</option>
            <option value="Scorpio">Scorpio</option>
            <option value="Sagittarius">Sagittarius</option>
            <option value="Capricorn">Capricorn</option>
            <option value="Aquarius">Aquarius</option>
            <option value="Pisces">Pisces</option>
          </select>
        </div>
      </section>
      <article className="users">
        {filteredProfiles.length > 0 ? (
          filteredProfiles.map((profile) => (
            <UserListProfile profile={profile} editMySphere={editMySphere} findProfileInSphere={findProfileInSphere} key={`${profile.id}`} />
          ))
        ) : (
          <p>No matching users found.</p>
        )}
      </article>
    </div>
  </>
}
