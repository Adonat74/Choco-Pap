import React from "react"
import "./Cart.css"


export default function Cart (props) {

    

    const totalCart = props.cartProducts.reduce((total, product) => total + product.priceInCents / 100 * product.quantity, 0)
    


    const products = props.cartProducts.map(product => {

           return (
               <div className="cartProductContainer" key={product.id}>
                   <button onClick={() => props.handleDeleteCartProduct(product.id)} className="cartDeleteProduct">&times;</button>
                   <img className="cartImageProduct" src={`/images/${product.image}`} alt="Image produit"></img>
                   <div className="cartProductInfo">
                       <div>
                           <h4 className="productCartTitle">{product.title}</h4>
                           <p className="productCartPrice">{product.priceInCents/100} €</p>
                       </div>
                       <input className="cartInputNumber" type="number" onChange={(event) => props.handleCartQuantityChange(event, product.id)} min={1} value={product.quantity}></input>
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
                    <p>Total: {totalCart.toFixed(2)} €</p>
                    <button onClick={() => props.handleDeleteAllCart()} className="validateCartButtons">REINITIALISER LE PANIER</button>
                    <button className="validateCartButtons">VALIDER LE PANIER</button>
                </div>
            </div>
        </div>
    );
}