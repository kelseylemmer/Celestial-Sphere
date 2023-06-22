import pinkProfile from '../img/profile_pink.png'

export const ViewProfile = ({ data }) => {
  return (
    <>
      <img src={pinkProfile} alt="My Celestial Profile" />
      <article className="bigThree">
        <div>{data?.firstName} {data?.lastName}</div>
        <div>My Sun Sign: {data?.sunSign?.name}</div>
        <div>My Moon Sign: {data?.moonSign?.name}</div>
        <div>My Rising Sign: {data?.risingSign?.name}</div>
      </article>
      <article className="bigThreeDetails">
        <h1>the sun in {data?.sunSign?.name}... </h1>
        <div> Born between {data?.sunSign.dates}, {data?.sunSign.name} is a {data?.sunSign.element} sign ruled by {data?.sunSign.rulingPlanet}.</div>
        <div>{data?.sunSign.name} suns are known to be {data?.sunSign.trait}. </div>
        <div>The {data?.sunSign.name} symbol is {data?.sunSign.symbol}</div>
        <h1>the moon in {data?.moonSign?.name}...</h1>
        <div>{data?.moonSign.name} is a {data?.moonSign.element} sign that is known to be {data?.moonSign.trait}.</div>
        <div>{data?.moonSign.name} has a love compatibility with {data?.moonSign.loveCompatibility}.</div>
        <div>The {data?.moonSign.name} symbol is {data?.moonSign.symbol}</div>
        <h1>the {data?.risingSign?.name} rising... </h1>
        <div>{data?.risingSign.name} is a {data?.risingSign.element} sign that is known to be very {data?.risingSign.trait}.</div>
        <div>The {data?.risingSign.name} symbol is {data?.risingSign.symbol}</div>
      </article>
    </>
  );
};








