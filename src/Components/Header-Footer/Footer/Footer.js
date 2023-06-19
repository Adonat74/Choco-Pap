import React from "react" 
import "./Footer.css"

export default function Footer () {



    return(
        <div className="footer">
            <div className="footerText">
                <h3>Choco Pap</h3>
                <p className="loremFooter">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis lacinia lacus. Ut cursus mauris id ligula dictum pellentesque. Donec vestibulum lacus id dolor feugiat.</p>
            </div>
            <div className="footerText">
                <h3>Contact</h3>
                <p>Adresse : 51 rue du chocolat 75000 Paris<br/>
                   Téléphone: 01 23 45 67 89<br/>
                   Horaires: 9h00-17h00 du Lundi au vendredi
                </p>
            </div>
            <div className="footerLogos">
                <img src="/images/icons/square-facebook-choco-pap.svg" alt="Facebook"></img>
                <img src="/images/icons/instagram-choco-pap.svg" alt="Instagram"></img>
                <img src="/images/icons/square-twitter-choco-pap.svg" alt="Twitter"></img>
            </div>
        </div>
    );
}