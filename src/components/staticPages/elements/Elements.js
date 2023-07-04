import { useEffect, useState } from "react"
import "./Elements.css"
import { Link } from "react-router-dom"

export const Elements = () => {

    return <>
        <div className="page-container elements-container">
            <h1 className="page-title house-title">The Elements</h1>
            <section className="element">
                <h1 className="details-header">	🜂 Fire</h1>
                <div>Fire signs exude a fiery nature, characterized by passion and enthusiasm that can be larger than life. However, like an untamed fire, Fire signs have the potential to burn out of control, necessitating careful attention to keep their flames in check.</div>
                <br></br>
                <div>Creativity is a defining trait of Fire signs, expressed in diverse and innovative ways. Individuals basking in this element possess remarkable courage and a vibrant spirit, radiating a sense of self-sufficiency and spontaneity, embracing life with immense zest.</div>
                <br></br>
                <div>In matters of love, Fire signs blaze with passion, making them undeniably alluring among the zodiac. Their confidence and pursuit of love are evident as they ascend fearlessly in their romantic endeavors. Furthermore, they often inspire others through their unwavering commitment to ethical and spiritual values. Yet, the flip side of the fiery nature can reveal itself in an overly assertive, even bossy, demeanor. This intensity might be accompanied by selfishness and an inflated ego, forming the shadowy aspects of a Fire sign's personality.</div>
                <br></br>
                <div>In essence, Fire signs embody strength, self-assurance, creativity, and a fun-loving spirit. Nevertheless, when their fervor becomes too intense to handle, it's wise to step back and give them space to temper their flames.</div>
                <br></br>
                <div><span className="intro">Fire Signs:</span> <Link to={`/Aries`}>Aries →</Link>, <Link to={`/Leo`}>Leo →</Link>, and <Link to={`/Sagittarius`}>Sagittarius →</Link></div>
            </section>
            <section className="element">
                <h1 className="details-header">	🜃 Earth</h1>
                <div>Aptly represented by earthy metaphors like being the salt of the Earth or having feet firmly planted on the ground, individuals blessed with an Earth sign in their horoscope are known for their practicality, grounded nature, and dependability. They prefer stability and certainty over taking daring risks.</div>
                <br></br>
                <div>Just as the elements serve as the fundamental building blocks of nature, Earth signs are the architects of the zodiac. Creation holds tangible value to them. Whether it involves constructing physical structures or curating comfortable living spaces filled with possessions, those influenced by Earth are deeply connected to the solidity that surrounds us. They find contentment in accumulating worldly goods, but must be cautious not to succumb to greed and excessive materialism.</div>
                <br></br>
                <div>The Earth element also imbues a sense of duty, responsibility, and reliability in its recipients. These are the individuals you can rely on in times of need. They exhibit a cautious and conservative approach to both their desires and actions. However, they also possess a keen appreciation for sensual pleasures, indulging in the finest food and wine with unmatched enjoyment.</div>
                <br></br>
                <div>The logical mindset of Earth sign individuals is highly regarded, and their measured approach to life is admirable. Furthermore, they possess remarkable resilience and recuperative abilities. On the flip side, their intense focus on their objectives may lead them to overlook the feelings of others. While they are goal-oriented and focused on the end result, they may sometimes disregard the importance of the journey itself.</div>
                <br></br>
                <div>In summary, Earth signs embody dependability, practicality, and conservatism, often accompanied by a certain materialistic inclination. Their feet are firmly planted on the ground, yet their eyes are fixed on the desired prize.</div>
                <br></br>
                <div><span className="intro">Earth Signs:</span> <Link to={`/Taurus`}>Taurus →</Link>, <Link to={`/Virgo`}>Virgo →</Link>, and <Link to={`/Capricorn`}>Capricorn →</Link></div>
            </section>
            <section className="element">
                <h1 className="details-header">	🜁 Air</h1>
                <div>Air signs often find themselves in the realm of intellectual pursuits. They possess sharp minds, excel in abstract reasoning, and thoroughly enjoy the processes of analysis, synthesis, and exploration. Need a problem solved? Entrust it to an Air sign, and witness their intellectual prowess in action.</div>
                <br></br>
                <div>Communication is a fundamental aspect of Air signs. They have a strong desire to express themselves, and their words carry substance and depth. They are attentive, inquisitive, and perceptive individuals. Observing the world through the lens of an Air sign is a fascinating experience, as their insightful analysis and subsequent explanations, usually delivered in accessible terms, shed new light on various subjects. Those influenced by the Air element are inventive and quick-witted, possessing the ability to consider multiple perspectives and determine the most effective approach. Striving for balance is crucial to these airy individuals. So, are they as refreshing as a summer breeze, or do they howl like the wind? Well, it can be both, depending on the circumstances. While they typically exhibit a calm and collected demeanor, they can turn cold if their equilibrium is disrupted. It's wise to avoid provoking an Air sign unnecessarily.</div>
                <br></br>
                <div>Another notable trait of Air signs is their exceptional empathy. They can truly put themselves in others' shoes, maintaining objectivity and cooperation. Their genuine desire to contribute to a better world shines brightly, unclouded by prejudice. Their idealism is a driving force that can bring about significant positive change.</div>
                <br></br>
                <div>In summary, Air signs are communicative, intellectual, clever, and fair. However, their temperament can oscillate, so it's important to beware of their occasional chill.</div>
                <br></br>
                <div><span className="intro">Air Signs:</span> <Link to={`/Gemini`}>Gemini →</Link>, <Link to={`/Libra`}>Libra →</Link>, and <Link to={`/Aquarius`}>Aquarius →</Link></div>
            </section>
            <section className="element">
                <h1 className="details-header">	🜄 Water</h1>
                <div>The element of Water lends itself well to descriptions of fluidity, flow, and wavering. These characteristics aptly reflect the influence of Water on an individual's emotions, which is where this element exerts its most powerful effect.</div>
                <br></br>
                <div>Water signs are known for their intuition, sensitivity, and heightened emotional depth. They experience feelings with great intensity, akin to a river running deep. Their actions are guided by how things feel rather than by logic or intellect. Compassion and understanding are also inherent to Water signs, as their receptive abilities are remarkably attuned. They have a unique capacity to absorb others' emotions, process them, and offer considerate plans or solutions that take into account the well-being of all.</div>
                <br></br>
                <div>Individuals blessed with Water signs often channel their perception of the world into artistic expressions. They have a profound appreciation for aesthetic beauty and aspire for everyone to experience happiness as a result. However, just as still water can become stagnant, Water sign individuals are not at their best when they remain inactive. They find true fulfillment in helping others, and they do so in enchanting, considerate, and even romantic ways.</div>
                <br></br>
                <div>On the flip side of this dreamy Water world lies the tendency for these individuals to brood. Water signs are susceptible to mood swings, and at their worst, they may exhibit self-indulgence, control-seeking behavior, and become entrapped in a fantasy realm. Furthermore, Water sign individuals possess a unique clarity of perception, often bordering on the psychic.</div>
                <br></br>
                <div>In summary, Water signs are characterized by their emotional depth, empathy, receptivity, and profound sensitivity. They can oscillate between serene calmness and the force of torrential rain, evoking a wealth of emotions associated with this element.</div>
                <br></br>
                <div><span className="intro">Water Signs:</span> <Link to={`/Cancer`}>Cancer →</Link>, <Link to={`/Scorpio`}>Scorpio →</Link>, and <Link to={`/Pisces`}>Pisces →</Link></div>


            </section>

        </div>
    </>
}