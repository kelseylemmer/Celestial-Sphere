import { useEffect, useState } from "react";



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

    return <>
        <h1>My Sphere</h1>

        <article>
            {currentUserSphere.map(
                (sphereObject) => {
                    return <section key={`{sphereObject.id}`}>
                        <header><Link to={`/Profile/${sphereObject.profileId}`}>
                            <span className="unbounded">{sphereObject?.user.firstName} {sphereObject?.user.lastName}</span>
                        </Link></header>
                        <section>
                            <div>✦ <span className="unbounded">Sun:</span> {sphereObject?.sun?.name}</div>
                            <div>✦ <span className="unbounded">Moon:</span> {sphereObject?.moon?.name}</div>
                            <div>✦ <span className="unbounded">Rising:</span> {sphereObject?.rising?.name}</div>
                        </section>
                    </section>
                }

            )
            }
        </article>
    </>

}