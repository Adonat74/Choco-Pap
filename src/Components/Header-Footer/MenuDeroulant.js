import React from "react"
import "./Header-Footer.css"

export default function MenuDeroulant () {


    return (
        <div className="menuDeroulant">
                <a className="elementsDeroulant acceuil">Acceuil</a>
                <a className="elementsDeroulant">Boutique</a>
                <div className="cartContainerDeroulant elementsDeroulant">
                    <a>Panier</a>
                    <p>2</p>
                    <img className="cartLogoDeroulant" src="/images/icons/cart-shopping-solid.svg" alt="Cart Logo"></img>
                </div>
            </div>
    );
}