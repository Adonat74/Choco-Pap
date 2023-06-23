import React from "react" 
import "./Header.css"

export default function Header (props) {

    return(
        <div>
            <div className={props.cartToggle ? "headerFixed" : "header"}>
                <img className="logo" src="/images/logo.png" alt="Logo Choco-Pap"></img>
                <div className="menu">
                    <a href="/accueil">Accueil</a>
                    <a href="/boutique">Boutique</a>
                    <div onClick={() => props.handleCartToggle()} className="cartContainer">
                        <p>{props.cartQuantity.length}</p>
                        <img className="cartLogo" src="/images/icons/cart-shopping-solid.svg" alt="Cart Logo"></img>
                    </div>
                </div>
                <button className="burger" onClick={() => props.toggleMenu()}><img className="burgerLogo" src="/images/icons/bars-solid-choco-pap.svg" alt="Menu déroulant logo"></img></button>
            </div>

        </div>
    );
}