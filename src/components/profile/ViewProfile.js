export const ViewProfile = ({ data }) => {
    return (
        <div>
            <p>
                Name: {data.firstName} {data.lastName}
            </p>
        </div>
    );
};










// export const CreateProfile = ({ data }) => {
//     const [profile, setProfile] = useState([])

//     // const localCelestialUser = localStorage.getItem("celestial_user")
//     // const celestialUserObject = JSON.parse(localCelestialUser)

//     const { userId } = useParams()
//     const [currentUser, setCurrentUser] = useState({})

//     useEffect(
//         () => {
//             fetch(`http://localhost:8088/users/${userId}?_expand=sunSign&_expand=moonSign&_expand=risingSign`)
//                 .then(response => response.json())
//                 .then((data) => {
//                     const user = data[0]
//                     setCurrentUser(currentUser)
//                 })
//         },
//         [userId]
//     )

//     return (
//         <div>
//             <p>
//                 <img src="../img/profile_pink.png" alt="My Celestial Profile"/>
//                 <h1>{currentUser.firstName} {currentUser.lastName}</h1>
//                 <article className="currentUserProfile">
//                     {
//                         currentUser.map(
//                             (user) => {
//                                 return <section className="userBigThree" key={`${user.id}`}>
//                                     <div>My Sun Sign: {user?.sunSign?.name}</div>
//                                     <div>My Moon Sign: {user?.moonSign?.name}</div>
//                                     <div>My Rising Sign: {user?.risingSign?.name}</div>
//                                 </section>
//                             }
//                         )
//                     }
//                 </article>
//                 <article className="bigThreeDetails">
//                     <h1>the sun in... </h1>
//                 </article>
//             </p>
//         </div>
//     );
// };
