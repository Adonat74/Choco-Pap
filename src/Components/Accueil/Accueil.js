import React from "react"
import { Link } from "react-router-dom"
import RadioButtons from "./RadioButtons"
import "./Accueil.css"


export default function Accueil () {

    const [liens, setLiens] = React.useState([true, false, false]);

        function changeStyle (index) {
            setLiens(prevState => prevState.map((clicked, ind) => {
                return index === ind ? clicked = true : false;
            }));
        }                                       

        const sliderButtons = liens.map((lien, index) => {
            return (
                <RadioButtons 
                    key={index}
                    id={index + 1}
                    clicked={lien}
                    changeStyle={changeStyle}
                />
            );
        });                                 

    return (
        <div className="sliderContainer">
            <div className="slider">
                <h1 className="titreAccueil">CHOCO PAP</h1>
                <Link to="/boutique-bonbons-chocolats" className="buttonAccueil">Voir la boutique</Link>
                <div className="slides">
                    <div id="slide1" className="slide">
                        <img className="slidesImages" src="/images/accueil1.jpg" alt="Slides Images 1"></img>
                    </div>
                    <div id="slide2" className="slide">
                        <img className="slidesImages" src="/images/accueil2.jpg" alt="Slides Images 1"></img>
                    </div>
                    <div id="slide3" className="slide">
                        <img className="slidesImages" src="/images/accueil3.jpg" alt="Slides Images 1"></img>
                    </div>
                </div>
                <div className="sliderNav">
                    {sliderButtons}
                </div>
            </div>
        </div>
    );
}
