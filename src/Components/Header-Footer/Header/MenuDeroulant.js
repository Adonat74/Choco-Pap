import React from "react"
import { Link } from "react-router-dom"
import "./Header.css"

export default function MenuDeroulant (props) {


    return (
        <div className="menuDeroulant">
                <Link to="/" className="elementsDeroulant accueil">Accueil</Link>
                <Link to="/boutique-bonbons-chocolats" className="elementsDeroulant">Boutique</Link>
                <div onClick={() => props.handleCartToggle()} className="elementsDeroulant">
                    <a>Panier</a>
                    <p className="nbPanier">{props.cartQuantity.length}</p>
                    <img className="cartLogoDeroulant" src="/images/icons/cart-shopping-solid.svg" alt="Cart Logo"></img>
                </div>
            </div>
    );
}