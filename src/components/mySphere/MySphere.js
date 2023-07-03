import { useEffect, useState } from "react";
import { Link } from "react-router-dom"

import "./mySphere.css";

export const MySphere = () => {

    const [currentUserSphere, setCurrentUserSphere] = useState([])

    const localCelestialUser = localStorage.getItem("celestial_user");
    const celestialUserObject = JSON.parse(localCelestialUser);
    const currentUserId = celestialUserObject.userId;

    useEffect(() => {
        fetch(`http://localhost:8088/userSpheres?_expand=profile`)
            .then(response => response.json())
            .then((userSphereArray) => {
                const filteredUserSphere = userSphereArray.filter(item => item.userId === currentUserId);
                setCurrentUserSphere(filteredUserSphere)
            })
    },
        []
    );

    return <div className="page-container profile-container">
        <h1 className="sphere-title">My Sphere</h1>

        <article className="sphere">
            {currentUserSphere.map(
                (sphereObject) => {
                    return <Link to={`/Profile/${sphereObject?.profile?.id}`} key={sphereObject.id}><section className="sphere-profiles" >
                        <div><img src={sphereObject?.profile?.picture} alt="profile picture" className="profile-pics" /></div>
                            <div>{sphereObject?.profile?.displayName}</div>
                    </section></Link>
                }

            )
            }
        </article>
    </div>

}