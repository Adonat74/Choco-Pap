import React from "react"
import Data from "../Data/Data"
import "./Cart.css"


export default function Cart (props) {

    


    const products = props.cartProducts.map(product => {

         Data.filter(item => {
                return item.id === product.index
        })
    });

        products.map(cartData => {
            return (
                <div className="cartProductContainer" key={cartData.id}>
                    <button className="cartDeleteProduct">&times;</button>
                    <img className="cartImageProduct" src={`/images/${cartData.image}`} alt="Image produit"></img>
                    <div className="cartProductInfo">
                        <div>
                            <h4 className="productCartTitle">{cartData.title}</h4>
                            <p className="productCartPrice">{cartData.priceInCents/100} €</p>
                        </div>
                        <input className="cartInputNumber" type="number" min={1} defaultValue={1}></input>
                    </div>
                </div>
            );
        });
    




    return (
        <div className={props.cartToggle ? "cartDisplay" : "cartHidden"}>
            <div className="blank"></div>
            <div className="cart">
                <div className="cartHeader">
                    <button className="closeCartButton" onClick={props.closeCart}>&times;</button>
                    <h3>PANIER</h3>
                </div>
                <div className="cartBody">
                    {products}
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