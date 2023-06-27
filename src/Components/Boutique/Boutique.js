import React from "react"
import Data from "../Data/Data"
import Filtre from "./Filtre"
import "./Boutique.css"
import { Link } from "react-router-dom"

export default function Boutique (props) {

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
    //state de la checkbox "Tous"
    const [allCategoriesValue, setAllCategoriesValue] = React.useState(true);


    function handleAllCategoriesCheckBox (event) {
        setAllCategoriesValue(true);
        //permet de remettre les valeurs des catégories à false
        setCategoriesFilterValue(prevState => {
            return Object.assign(...Object.keys(prevState).map(k => ({ [k]: false })));
        });
        //remet à zéro le tableau des des catégories à filtrer
        return event.target.checked ? setProductsCategoriesRemoved([]) : null;
    }
    

    function handleChange (category, event) {
        setAllCategoriesValue(false);
        //met à jours le state des catécories
        setCategoriesFilterValue(prevState => {
            return {
                ...prevState,
                [event.target.name]: event.target.checked
                }
        });


        //Ajoute ou enlève les catégories à filtrer
        if (event.target.checked) {
            setProductsCategoriesRemoved([...productsCategoriesRemoved, category]);
        } else {
            setProductsCategoriesRemoved(
                productsCategoriesRemoved.filter(categoryChecked => categoryChecked !== category)
            );
        }
    }



    //filtre les datas en fonction des catégories à filtrer
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



    const productElements = selectedProducts.map(data => {
        return (
            <div className="productContainer" key={data.id}>
                <Link to={`/pageProduit/${data.id}`}>
                    <img className="productImage" src={`/images/${data.image}`}></img>
                    <h3 className="productName">{data.title}</h3>
                </Link>
                <p>{data.priceInCents / 100} €</p>
                <p>Note: {data.rating}</p>
                <button onClick={() => props.handleAddToCart(data.id, 1)} className="productButton">Ajouter au panier</button>
            </div>
        );
    });

    return (
        <div>
            <h1 className="titreBoutique">BOUTIQUE</h1>
            <div className="boutique">
                <Filtre 
                    handleChange={handleChange}
                    handleAllCategoriesCheckBox={handleAllCategoriesCheckBox} 
                    value={categoriesFilterValue}
                    tousValue={allCategoriesValue}
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