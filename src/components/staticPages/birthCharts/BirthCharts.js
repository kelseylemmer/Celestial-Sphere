import "./BirthCharts.css"
import { Link } from "react-router-dom"

export const BirthCharts = () => {

    return <>
        <div className="page-container charts-container">
            <h1 className="page-title charts-title">Birth Charts</h1>


            <section className="charts-visual">
                <h1 className="charts-header">What Is A Birth Chart?</h1>
                <div>Also called a "Natal Chart," a birth chart is a visual representation of the celestial sky at the exact moment of an individual's birth. These charts are used in astrology to gain insights into a person's personality traits, life patterns, and potential future events.</div>
                <div>Visually, a birth chart is a circular pie chart divided into 12 sections known as "Houses." Each House corresponds to one of the 12 zodiac signs and represents a significant area of a person's life. Lines intersect the center and are known as "aspects," which depict conjunctions, trines, sextiles, squares, and oppositions. They illustrate the interplay between the planets in your chart, revealing how they communicate with one another. The thickness and color of the lines indicate the strength and type of connection being formed.</div>
            </section>
            <br></br>
            <section>
                <div>To create a birth chart, an astrologer needs the individual's <span className="bold">date of birth, time of birth,</span> and <span className="bold">the location of birth</span>. </div>
                <div>With this data, the astrologer can determine the precise positions of the Sun, Moon, planets, and other astrological points at the moment of birth.</div>
            </section>
            <br></br>
            <section>
                <h1 className="charts-header">Interpreting A Birth Chart</h1>
                <div>To interpret a Birth Chart, you must consider three essential factors in conjunction:</div>
                <ol>
                    <li>the planet in its respective zodiac sign</li>
                    <li>the relationships between the planets, as defined by the aspects (angles) and</li>
                    <li>the balance of signs, elements, houses, and aspects.</li>
                </ol>
                <div>By incorporating this information, a birth chart can provide valuable insights into intricate aspects of your personality, fears, strengths, insecurities, family dynamics, childhood influences, and much more.</div>
            </section>
            <section>
                <h1 className="charts-title">Essential Components</h1>
                <h1 className="charts-header">Sun Signs</h1>
                <div>The Sun sign represents an individual's core essence and ego. It is determined by the position of the Sun at the time of birth and is commonly associated with the zodiac sign people identify with. </div>
                <h1 className="charts-header">Moon Signs</h1>
                <div>The Moon sign represents emotions, instincts, and subconscious patterns. It is determined by the position of the Moon at the time of birth. The Moon governs one's emotional nature and reveals how a person nurtures and responds emotionally. </div>
                <h1 className="charts-header">Rising Signs</h1>
                <div>Also known as the Ascendant sign, the Rising sign represents the individual's outward personality and how they appear to others. It is determined by the sign that was on the eastern horizon at the time of birth. The Ascendant is considered important in understanding a person's physical appearance, behavior, and first impressions.</div>
                <h1 className="charts-header">Planets</h1>
                <div>The birth chart includes the positions of the planets. Each planet symbolizes different aspects of an individual's life, such as communication, love, energy, expansion, discipline, transformation, and so on. The sign and house placement of each planet provide insights into specific areas of life.</div>
                <br></br>
                <div><Link to={`/Planets`}>More On Planets →</Link></div>
                <h1 className="charts-header">Houses</h1>
                <div>The chart is divided into twelve houses, each representing different aspects of life, such as self, finances, communication, home, relationships, career, etc. The position of planets in these houses influences the expression of their energies in specific areas of life.</div>
                <br></br>
                <div><Link to={`/Houses`}>More On The Houses →</Link></div>
                <h1 className="charts-header">Aspects</h1>
                <div>Aspects are geometric angles formed between planets in the chart. They indicate the relationships and interactions between different planetary energies. Major aspects include conjunctions, oppositions, trines, squares, and sextiles. These aspects reveal how different planetary energies work together or create tension.</div>
                <br></br>
                <div><Link to={`/Aspects`}>More On Aspects →</Link></div>




            </section>
        </div >
    </>
}

