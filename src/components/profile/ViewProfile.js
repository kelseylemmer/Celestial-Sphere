import { useEffect, useState } from "react";
import "./profile.css";
import { Link } from "react-router-dom";



export const ViewProfile = ({ data }) => {

  const [currentUserSphere, setCurrentUserSphere] = useState([])

  useEffect(() => {
    fetch(`http://localhost:8088/userSpheres?_expand=profile`)
      .then(response => response.json())
      .then(userSphereArray => {
        const localCelestialUser = localStorage.getItem("celestial_user");
        const celestialUserObject = JSON.parse(localCelestialUser);
        const currentUserId = celestialUserObject.userId;

        const filteredUserSphere = userSphereArray.filter(
          item =>
            item.userId === currentUserId &&
            item?.profile?.moonId === data?.moon?.compatibility
        );
        setCurrentUserSphere(filteredUserSphere);
      });
  }, [data]);


  return (
    <>

      <div className="top">
        <img src={data?.picture} alt="profile picture" className="profile-pic"/>

        <section className="big-three">
          <h2 className="name">{data?.displayName}</h2>
          <div>✦ <span className="unbounded">My Sun Sign:</span> {data?.sun?.name}</div>
          <div>✦ <span className="unbounded">My Moon Sign:</span> {data?.moon?.name}</div>
          <div>✦ <span className="unbounded">My Rising Sign:</span> {data?.rising?.name}</div>
        </section>

        <article className="sphere">
          {currentUserSphere.map(
            (sphereObject) => {
              return <Link to={`/Profile/${sphereObject?.profile?.id}`}><section className="sphere-profiles" key={`{sphereObject.id}`}>
                <div><img src={sphereObject?.profile?.picture} alt="profile picture" className="profile-pics" /></div>
                <div>{sphereObject?.profile?.displayName}</div>
              </section></Link>
            }

          )
          }
        </article>

      </div>  



      
        <article className="big-three-details">
        <div className='bottom'>
          <h1 className="details-header">The sun in {data?.sun?.name}... </h1>
          <div className="info">
            <p>Your Sun sign is determined based on the position of the Sun on the day of your birth. The Sun represents your core essence and identity, and its placement in a particular zodiac sign offers insights into your fundamental nature, motivations, and self-expression.</p>
            <div>{data?.sun?.trait}</div>
            <br></br>
            <div className="intro"> Born between {data?.sun?.dates}, {data?.sun?.name} is a {data?.sun?.mode?.name} {data?.sun?.element?.name} sign.</div>
            <div>{data?.sun?.mode?.name} modality {data?.sun?.mode?.about}</div>
            <div>{data?.sun?.element?.name} {data?.sun?.element?.about}</div>
            <br></br>
            <div className="intro">{data?.sun?.name} is ruled by {data?.sun?.planet?.name}.</div> 
            <div>{data?.sun?.planet?.name} is {data?.sun?.planet?.description}</div>
            <br></br>
            <div><span className="intro">Symbol:</span> {data?.sun?.symbol}</div>
          </div>

          <h1 className="details-header">The moon in {data?.moon?.name}...</h1>
          <div className="info">
            <p>Your Moon sign is determined based on the position of the Moon at the time of your birth. The Moon represents your emotions, instincts, and inner needs. Its placement in a particular sign offers insights into your emotional style, desires, and how you seek emotional fulfillment.</p>
            <div>{data?.moon?.trait}</div>
            <br></br>
            <div className="intro">{data?.moon?.name} is a {data?.moon?.mode?.name} {data?.moon?.element?.name} sign.</div>
            <div>{data?.moon?.mode?.name} modality {data?.moon?.mode?.about}</div>
            <div>{data?.moon?.element?.name} {data?.moon?.element?.about}</div>
            <br></br>
            <div className="intro">{data?.moon?.name} is ruled by {data?.moon?.planet?.name}.</div>
            <div>{data?.moon?.planet?.name} is {data?.moon?.planet?.description}</div>
            <br></br>
            <div><span className="intro">Compatibility:</span>  {data?.moon?.compatibility} moons</div>
            <div><span className="intro">Symbol:</span> {data?.moon?.symbol}</div>
          </div>

          <h1 className="details-header">The {data?.rising?.name} rising... </h1>
          <div className="info">
            <p>Your rising sign, also known as the ascendant, is determined by the zodiac constellation that was on the eastern horizon at the moment of your birth. This influential energy establishes the initial atmosphere of your entry into the world and creates an energetic blueprint for your life's journey. It acts as a lens through which you express your sun sign, shaping the way your personality and individuality manifest outwardly to others. In essence, the rising sign adds its distinct flavor to the core essence of your sun sign, influencing your overall approach and first impressions in the world.</p>
            <br></br>
            <div>{data?.rising?.trait}</div>
            <br></br>
            <div className="intro">{data?.rising?.name} is a {data?.rising?.mode?.name} {data?.rising?.element?.name} sign.</div>
            <div>{data?.rising?.mode?.name} modality {data?.rising?.mode?.about}</div>
            <div>{data?.rising?.element?.name} {data?.rising?.element?.about}</div>
            <br></br>
            <div className="intro">{data?.rising?.name} is ruled by {data?.rising?.planet?.name}. </div>
            <div>{data?.rising?.planet?.name} is {data?.rising?.planet?.description}</div>
            <div></div>
            <br></br>
            <div><span className="intro">Symbol:</span> {data?.rising?.symbol}</div>
          </div>
        </div>
        </article>
      
      </>
      );
};








