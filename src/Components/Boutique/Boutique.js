import React from "react"
import Data from "./Data/Data"
import Filtre from "./Filtre"
import Produits from "./Produits"
import "./Boutique.css"

export default function Boutique () {

    const [productsCategoriesRemoved, setProductsCategoriesRemoved] = React.useState([]); 

    


    const [selectFilterValues, setSelectFilterValues] = React.useState({minPrice: 1, maxPrice: 10, 
                                                            minRating: 1, maxRating: 5});


    
    function handleSelect (event) {
        setSelectFilterValues(prevState => {
            return {
                ...prevState,
                [event.target.name]: event.target.value
            }
        });
    }

    

    const [categoriesFilterValue, setCategoriesFilterValue] = React.useState({chocolatBlanc: false, chocolatLait: false,
                                                    chocolatNoir: false, noixNoisette: false, fruit: false,
                                                    caramel: false, liqueur: false});

    const [checkTousValue, setCheckTousValue] = React.useState(true);


    function handleTous (event) {
        setCheckTousValue(true);
        setCategoriesFilterValue(prevState => {
            return Object.assign(...Object.keys(prevState).map(k => ({ [k]: false })));
        });
        return event.target.checked ? setProductsCategoriesRemoved([]) : null;
    }
    

    function handleChange (category, event) {
        setCheckTousValue(false);
        setCategoriesFilterValue(prevState => {
            return {
                ...prevState,
                [event.target.name]: event.target.checked
                }
        });
        
        if (event.target.checked) {
            setProductsCategoriesRemoved([...productsCategoriesRemoved, category]);
        } else {
            setProductsCategoriesRemoved(
                productsCategoriesRemoved.filter(categoryChecked => categoryChecked !== category)
            );
        }
    }






    const filteredProducts = Data.filter(product => 
            productsCategoriesRemoved.length > 0 
                ? productsCategoriesRemoved.every(cat => 
                    product.catégories.map(catégorie => catégorie).includes(cat)
                  )
                : Data
    );

    const selectedProducts = filteredProducts.filter(product => {
        return product.priceInCents/100 >= parseInt(selectFilterValues.minPrice) 
            && product.priceInCents/100 <= parseInt(selectFilterValues.maxPrice)
            && product.rating >= parseInt(selectFilterValues.minRating)
            && product.rating <= parseInt(selectFilterValues.maxRating)
    });




    



    const productElements = selectedProducts.map((data, index) => {
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
                    value={categoriesFilterValue}
                    tousValue={checkTousValue}
                    handleSelect={handleSelect}

                    valueSelect={selectFilterValues}
                />
                <div className="productGrid">
                    {productElements}
                </div>
            </div>
        </div>
    );
}