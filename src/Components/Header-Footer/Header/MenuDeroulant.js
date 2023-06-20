import React from "react"
import "./Header.css"

export default function MenuDeroulant () {


    return (
        <div className="menuDeroulant">
                <a className="elementsDeroulant accueil">Accueil</a>
                <a className="elementsDeroulant">Boutique</a>
                <div className="elementsDeroulant">
                    <a>Panier</a>
                    <p className="nbPanier">2</p>
                    <img className="cartLogoDeroulant" src="/images/icons/cart-shopping-solid.svg" alt="Cart Logo"></img>
                </div>
            </div>
    );
}