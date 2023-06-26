import pinkProfile from '../img/profile_pink.png'

export const ViewProfile = ({ data }) => {
  return (
    <>
      <img src={pinkProfile} alt="My Celestial Profile" />

      <article className="bigThree">
        <div>{data?.user.firstName} {data?.user.lastName}</div>
        <div>My Sun Sign: {data?.sun?.name}</div>
        <div>My Moon Sign: {data?.moon?.name}</div>
        <div>My Rising Sign: {data?.rising?.name}</div>
      </article>


      <article className="bigThreeDetails">
        <h1>The sun in {data?.sun?.name}... </h1>
        <p>The Sun represents your core essence and identity, and its placement in a particular zodiac sign offers insights into your fundamental nature, motivations, and self-expression.</p>
        <div>{data?.sun?.trait}</div>
        <br></br>
        <div> Born between {data?.sun?.dates}, {data?.sun?.name} is a {data?.sun?.mode?.name} {data?.sun?.element?.name} sign.</div>
        <div>{data?.sun?.mode?.name} modality {data?.sun?.mode?.about}</div>
        <div>{data?.sun?.element?.name} {data?.sun?.element?.about}</div>
        <br></br>
        <div>{data?.sun?.name} is ruled by {data?.sun?.planet?.name}. {data?.sun?.planet?.name} is {data?.sun?.planet?.description}</div>
        <br></br>
        <div>The {data?.sun?.name} symbol is {data?.sun?.symbol}.</div>

        <h1>The moon in {data?.moon?.name}...</h1>
        <p>The Moon represents your emotions, instincts, and inner needs. Its placement in a particular sign offers insights into your emotional style, desires, and how you seek emotional fulfillment.</p>
        <div>{data?.moon?.trait}</div>
        <br></br>
        <div>{data?.moon?.name} is a {data?.moon?.mode?.name} {data?.moon?.element?.name} sign</div>
        <div>{data?.moon?.mode?.name} modality {data?.moon?.mode?.about}</div>
        <div>{data?.moon?.element?.name} {data?.moon?.element?.about}</div>
        <br></br>
        <div>{data?.moon?.name} is ruled by {data?.moon?.planet?.name}.</div>
        <div>{data?.moon?.planet?.name} is {data?.moon?.planet?.description}</div>
        <br></br>
        <div>{data?.moon?.name} has a love compatibility with {data?.moon?.compatibility} moons.</div>
        <div>The {data?.moon?.name} symbol is {data?.moon?.symbol}.</div>

        <h1>The {data?.rising?.name} rising... </h1>
        <div>{data?.rising?.trait}</div>
        <br></br>
        <div>{data?.rising?.name} is a {data?.rising?.mode?.name} {data?.rising?.element?.name} sign.</div>
        <div>{data?.rising?.mode?.name} modality {data?.rising?.mode?.about}</div>
        <div>{data?.rising?.element?.name} {data?.rising?.element?.about}</div>
        <br></br>
        <div>{data?.rising?.name} is ruled by {data?.rising?.planet?.name}. </div>
        <div>{data?.rising?.planet?.name} is {data?.rising?.planet?.description}</div>
        <div></div>
        <br></br>
        <div>The {data?.rising?.name} symbol is {data?.rising?.symbol}.</div>
      </article>
    </>
  );
};








