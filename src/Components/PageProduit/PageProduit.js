import React from "react"
import { useParams } from "react-router-dom"
import Data from "../Data/Data"
import "./PageProduit.css"

export default function PageProduit () {

    const {productId} = useParams()
    const thisProduct = Data.find(prod => prod.id === productId)

    return (
        <div className="pageProduit">
            <div className="pProductContainer">
                <div className="produit">
                    <img className="pProductImage" src={`/images/${thisProduct.image}`}></img>
                    <div className="details">
                        <h2 className="nomProduit">{thisProduct.title}</h2>
                        <p className="price">{thisProduct.priceInCents/100} €</p>
                        <p className="description">Aliquam ultricies, quam et efficitur ornare, eros ipsum tempor augue, vel laoreet mauris diam in neque. Sed ac neque efficitur eros placerat sodales a tincidunt justo. Quisque ultricies venenatis suscipit. Pellentesque ultrices tellus ut augue eleifend, et convallis nulla mollis. Integer a libero et sem bibendum semper.</p>
                        <div className="quantityButton">
                            <input className="productQuantity" type="number" min={1} value={1}/>
                            <button className="addToCartButton">Ajouter au panier</button>
                        </div>
                    </div>
                </div>
                <div className="textIngredients">
                    <h4>Ingrédients</h4>
                    <p className="ingredients">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut elit justo. Maecenas fermentum pellentesque sodales. Suspendisse sit amet sem id lorem elementum tincidunt eget et nibh. Sed interdum tincidunt aliquet. Phasellus ex tortor, auctor sit amet ultrices sit amet, varius vitae lorem.</p>
                </div>
            </div>
        </div>
    )
}