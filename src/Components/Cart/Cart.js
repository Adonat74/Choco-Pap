import React from "react"
import "./Cart.css"


export default function Cart (props) {





    return (
        <div className={props.cartToggle ? "cartDisplay" : "cartHidden"}>
            <div className="blank"></div>
            <div className="cart">
                <div className="cartHeader">
                    <button className="closeCartButton" onClick={props.closeCart}>&times;</button>
                    <h3>PANIER</h3>
                </div>
                <div className="cartBody">
                    
                </div>
                <div className="cartFooter">
                    <p>Total: 10 €</p>
                    <button className="validateCartButtons">REINITIALISER LE PANIER</button>
                    <button className="validateCartButtons">VALIDER LE PANIER</button>
                </div>
            </div>
        </div>
    );
}