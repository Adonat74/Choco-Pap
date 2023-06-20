import React from "react" 
import MenuDeroulant from "./MenuDeroulant";
import "./Header.css"

export default function Footer () {

    const [menuToggle, setMenuToggle] = React.useState(false);

    function toggleMenu () {
        setMenuToggle(prevState => !prevState);
    }

    return(
        <div>
            <div className="header">
                <img className="logo" src="/images/logo.png" alt="Logo Choco-Pap"></img>
                <div className="menu">
                    <a>Accueil</a>
                    <a>Boutique</a>
                    <div className="cartContainer">
                        <p>2</p>
                        <img className="cartLogo" src="/images/icons/cart-shopping-solid.svg" alt="Cart Logo"></img>
                    </div>
                </div>
                <button className="burger" onClick={toggleMenu}><img className="burgerLogo" src="/images/icons/bars-solid-choco-pap.svg" alt="Menu déroulant logo"></img></button>
            </div>

            {menuToggle ? <MenuDeroulant /> : null}

        </div>
    );
}