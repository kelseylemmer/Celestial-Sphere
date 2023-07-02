import { useEffect, useState } from "react"
import "./Houses.css"


export const Houses = () => {
  const [suns, setSuns] = useState([])

  useEffect(
    () => {
      fetch(`http://localhost:8088/suns?_expand=house`)
        .then(response => response.json())
        .then((sunsArray) => {
          setSuns(sunsArray)
        })
    },
    []
  )
  return <>
    <div className="page-container houses-container">

      <h1 className="page-title house-title">The Houses</h1>
      <section className="about">
        <div className="intro">In astrology, the term "houses" refers to the twelve divisions of the celestial plane, which represent specific areas of life and experience for an individual. </div>
        <div>These houses are an essential component of astrological charts, which are used to understand the positions and interactions of celestial bodies at the time of a person's birth.</div>
        <div>Each house is associated with a particular zodiac sign, ruling planet, and represents various aspects of a person's life, personality, and experiences.</div>
        <div>The houses are numbered counterclockwise starting from the Ascendant (the point on the eastern horizon at the time of birth) and continue through the entire circle of the zodiac.</div>
        <div>The positions of the planets and other celestial bodies within these houses, as well as their interactions with each other, provide astrologers with insights into a person's character, potential life events, and areas of focus and challenge throughout their life journey. </div>
      </section>
      <br></br>
      <div><span className="intro">Houses 1-6 are known as the personal houses, which have a direct influence on our private and immediate lives.</span> These houses govern our sense of individuality, our daily environments, relationships with siblings and peers, and the dynamics with our parents. They reflect our attempts to define and express who we are as individuals. Individuals with a significant number of planets in these houses may find it challenging to leave their comfort zone, often remaining nostalgically loyal to childhood friends and familiar surroundings.</div>
      <br></br>
      <div><span className="intro">Houses 7-12 are referred to as the interpersonal houses. </span></div>
      <div>These houses govern our relationships, joint ventures, travel experiences, career aspirations, involvement in society, spiritual pursuits, and even our transition at the end of life. Individuals with a predominant influence of planets in these later houses might exhibit a strong focus on their careers, leaving the past behind and forming close bonds with friends made in adulthood. These houses represent the broader scope of our lives and our interactions with the world beyond our immediate personal sphere.</div>
      <article className="houses">
        {
          suns.map(
            (sun) => {
              return <section className="house" key={`${sun?.house?.name}`}>

                <h1 className="details-header">The {sun?.house?.name} house</h1>
                <section className="houses-about">
                  <div className="intro">The Planet of {sun?.house?.of}</div>
                  <div>The {sun?.house?.name} house {sun?.house?.about}</div>
                </section>


              </section>
            }
          )
        }
      </article>
    
    </div>
  </>
}
