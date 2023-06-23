import React from "react"
import "./Header.css"

export default function MenuDeroulant (props) {


    return (
        <div className="menuDeroulant">
                <a href="/accueil" className="elementsDeroulant accueil">Accueil</a>
                <a href="/boutique" className="elementsDeroulant">Boutique</a>
                <div onClick={() => props.handleCartToggle()} className="elementsDeroulant">
                    <a>Panier</a>
                    <p className="nbPanier">{props.cartQuantity.length}</p>
                    <img className="cartLogoDeroulant" src="/images/icons/cart-shopping-solid.svg" alt="Cart Logo"></img>
                </div>
            </div>
    );
}