import React from "react"
import { Link } from "react-router-dom"
import "./Boutique.css"

export default function Produits (props) {

    return (
        <div className="productContainer">
            <Link to={`/pageProduit/${props.id}`}>
                <img className="productImage" src={`/images/${props.img}`}></img>
                <h3 className="productName">{props.title}</h3>
            </Link>
            <p>{props.price / 100} €</p>
            <p>Note: {props.rating}</p>
            <button className="productButton">Ajouter au panier</button>
        </div>
    );
}