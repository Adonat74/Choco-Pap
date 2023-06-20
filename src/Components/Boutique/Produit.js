import React from "react"
import "./Boutique.css"

export default function Boutique (props) {


    return (
        <div className="productContainer">
            <img className="productImage" src={`/images/${props.img}`}></img>
            <h3 className="productName">{props.title}</h3>
            <p>{props.price / 100} €</p>
            <p>Note: {props.rating}</p>
            <button className="productButton">Ajouter au panier</button>
        </div>
    );
}