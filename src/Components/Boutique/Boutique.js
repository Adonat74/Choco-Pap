import React from "react"
import Data from "./Data/Data"
import Filtre from "./Filtre"
import Produit from "./Produit"
import "./Boutique.css"

export default function Boutique () {

    const productElements = Data.map((data, index) => {
        return (
            <Produit 
                key={data.id}
                id={data.id}
                index={index}
                title={data.title}
                price={data.priceInCents}
                rating={data.rating}
                img={data.image}
            />
        )
    })

    return (
        <div>
            <h1 className="titreBoutique">BOUTIQUE</h1>
            <div className="boutique">
                <Filtre />
                <div>
                    {productElements}
                </div>
            </div>
        </div>
    );
}