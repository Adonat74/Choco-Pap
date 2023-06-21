import React from "react"
import Data from "./Data/Data"
import Filtre from "./Filtre"
import Produits from "./Produits"
import "./Boutique.css"

export default function Boutique () {


    const [categoriesChecked, setCategoriesChecked] = React.useState([]);
    const [checkBoxesValue, setCheckBoxesValue] = React.useState({chocolatBlanc: false, chocolatLait: false, chocolatNoir: false, noixNoisette: false, fruit: false, caramel: false, liqueur: false});
    const [checkTousValue, setCheckTousValue] = React.useState(true);
    


    const filteredProducts = Data.filter(product => 
            categoriesChecked.length > 0 
                ? categoriesChecked.every(cat => 
                    product.catégories.map(catégorie => catégorie).includes(cat)
                  )
                : Data
    );


    function handleTous (event) {
        setCheckTousValue(true);
        setCheckBoxesValue(prevState => {
            return Object.assign(...Object.keys(prevState).map(k => ({ [k]: false })))
        })
        return event.target.checked ? setCategoriesChecked([]) : null;
    }
    
    
    function handleChange (category, event) {
        setCheckTousValue(false);
        setCheckBoxesValue(prevState => {
            return {
                ...prevState,
                [event.target.name]: event.target.checked
                }
        });
        console.log(checkBoxesValue)
        
        if (event.target.checked) {
            setCategoriesChecked([...categoriesChecked, category]);
        } else {
            setCategoriesChecked(
                categoriesChecked.filter(categoryChecked => categoryChecked !== category)
            );
        }
    }



    const productElements = filteredProducts.map((data, index) => {
        return (
            <Produits 
                key={data.id}
                id={data.id}
                index={index}
                title={data.title}
                price={data.priceInCents}
                rating={data.rating}
                img={data.image}
            />
        );
    });

    return (
        <div>
            <h1 className="titreBoutique">BOUTIQUE</h1>
            <div className="boutique">
                <Filtre 
                    handleChange={handleChange}
                    handleTous={handleTous} 
                    value={checkBoxesValue}
                    tousValue={checkTousValue}
                />
                <div className="productGrid">
                    {productElements}
                </div>
            </div>
        </div>
    );
}