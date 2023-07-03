import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Signs.css"

export const Signs = () => {

    const { signName } = useParams();

    const [suns, setSuns] = useState([])
    const [moons, setMoons] = useState([])
    const [risings, setRisings] = useState([])

    useEffect(() => {
        SunInfo()
        MoonInfo()
        RisingInfo()
    }, []);

    useEffect(() => {
        SunInfo()
        MoonInfo()
        RisingInfo()
    }, [signName]);


    const SunInfo = () => {
        fetch('http://localhost:8088/Suns/?_expand')
            .then(response => response.json())
            .then(sunArray => {
                // Filter the sunArray by name key value of "aries"
                const filteredSun = sunArray.filter(item => item.name === signName);
                setSuns(filteredSun);
            });
    }
    const MoonInfo = () => {
        fetch('http://localhost:8088/Moons/?_expand')
            .then(response => response.json())
            .then(moonArray => {
                // Filter the moonArray by name key value of "aries"
                const filteredMoon = moonArray.filter(item => item.name === signName);
                setMoons(filteredMoon);
            });
    }
    const RisingInfo = () => {
        fetch('http://localhost:8088/Risings/?_expand')
            .then(response => response.json())
            .then(risingArray => {
                // Filter the risingArray by name key value of "aries"
                const filteredRising = risingArray.filter(item => item.name === signName);
                setRisings(filteredRising);
            });
    }




    return (
        <>
            <div className="page-container signs-container">
                <h1 className="page-title sign-title">{signName}</h1>
                <section className="quick-facts-container">
                    {
                        suns.map(
                            (sunSignInfo) => {
                                return <section className="quick-facts" key={`${sunSignInfo.id}`}>
                        <div className="quick-fact"><span className="intro">Dates:</span>{sunSignInfo?.dates}</div>
                        <div className="quick-fact"><span className="intro">House:</span>{sunSignInfo?.house?.name}</div>
                        <div className="quick-fact"><span className="intro">Planet:</span>{sunSignInfo?.planet?.name}</div>
                        <div className="quick-fact"><span className="intro">Element:</span>{sunSignInfo?.element?.name}</div>
                        <div className="quick-fact"><span className="intro">Mode:</span>{sunSignInfo?.mode?.name}</div>
                        <div className="quick-fact"><span className="intro">Symbol:</span>{sunSignInfo?.symbol}</div>
                        <div className="quick-fact"><span className="intro">Body Part:</span>{sunSignInfo?.body?.part}</div>
                    </section>
                            }
                        )
                    }
                </section>
            </div>
        </>

    );

};
