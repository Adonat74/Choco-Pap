import React from "react"
import "./Boutique.css"

export default function Filtre (props) {

    const numberListPrice = [1,2,3,4,5,6,7,8,9,10];
    const numberListRating = [1,2,3,4,5];


    const [toggleCategories, setToggleCategories] = React.useState(false);
    const [togglePrice, setTogglePrice] = React.useState(false);
    const [toggleRating, setToggleRating] = React.useState(false);
    
    function handleClickCategories () {
            setToggleCategories(preState => !preState);
    }

    function handleClickPrice () {
        setTogglePrice(preState => !preState);
    }

    function handleClickRating () {
        setToggleRating(preState => !preState);
    }


    const priceSelectOptions = numberListPrice.map((number, index) => {
        return (
            <option 
                value={number}
                key={index}
            >{number} €</option>
        );
    });

    const ratingSelectOptions = numberListRating.map((number, index) => {
        return (
            <option 
                value={number}
                key={index}
            >{number}</option>
        );
    });


    return (
        <div className="filter">
            <h2>Filtre</h2>
            <h3 onClick={handleClickCategories} className="filterNames">Catégories {toggleCategories ? "-" : "+"}</h3>
            <form className={toggleCategories ? "categories" : "hidden"}>
                <label className="checkboxContainer" htmlFor="tous">Tous
                <input
                    type="checkbox" 
                    id="tous" 
                    value={props.tousValue}
                    checked={props.tousValue}
                    onChange={(event) => props.handleAllCategoriesCheckBox(event)}
                    name="tous"
                />
                <span className="checkmark"></span>
                </label><br/>

                <label className="checkboxContainer" htmlFor="chocolatBlanc">Chocolat blanc
                <input
                    type="checkbox"
                    id="chocolatBlanc" 
                    value={props.value.chocolatBlanc}
                    checked={props.value.chocolatBlanc}
                    onChange={(event) => props.handleChange("chocolatBlanc", event)}
                    name="chocolatBlanc"
                />
                <span className="checkmark"></span>
                </label><br/>

                <label className="checkboxContainer" htmlFor="chocolatLait">Chocolat au lait
                <input
                    type="checkbox" 
                    id="chocolatLait" 
                    value={props.value.chocolatLait}
                    checked={props.value.chocolatLait}
                    onChange={(event) => props.handleChange("chocolatLait", event)}
                    name="chocolatLait"
                />
                <span className="checkmark"></span>
                </label><br/>

                <label className="checkboxContainer" htmlFor="chocolatNoir">Chocolat noir
                <input
                    type="checkbox" 
                    id="chocolatNoir" 
                    value={props.value.chocolatNoir}
                    checked={props.value.chocolatNoir}
                    onChange={(event) => props.handleChange("chocolatNoir", event)}
                    name="chocolatNoir"
                />
                <span className="checkmark"></span>
                </label><br/>

                <label className="checkboxContainer" htmlFor="noixNoisette">Noix/Noisette
                <input
                    type="checkbox" 
                    id="noixNoisette" 
                    value={props.value.noixNoisette}
                    checked={props.value.noixNoisette}
                    onChange={(event) => props.handleChange("noixNoisette", event)}
                    name="noixNoisette"
                />
                <span className="checkmark"></span>
                </label><br/>

                <label className="checkboxContainer" htmlFor="fruit">Fruit
                <input
                    type="checkbox" 
                    id="fruit" 
                    value={props.value.fruit}
                    checked={props.value.fruit}
                    onChange={(event) => props.handleChange("fruit", event)}
                    name="fruit"
                />
                <span className="checkmark"></span>
                </label><br/>

                <label className="checkboxContainer" htmlFor="caramel">Caramel
                <input
                    type="checkbox" 
                    id="caramel" 
                    value={props.value.caramel}
                    checked={props.value.caramel}
                    onChange={(event) => props.handleChange("caramel", event)}
                    name="caramel"
                />
                <span className="checkmark"></span>
                </label><br/>

                <label className="checkboxContainer" htmlFor="liqueur">Liqueur
                <input
                    type="checkbox" 
                    id="liqueur" 
                    value={props.value.liqueur}
                    checked={props.value.liqueur}
                    onChange={(event) => props.handleChange("liqueur", event)}
                    name="liqueur"
                />
                <span className="checkmark"></span>
                </label><br/>
            </form>
            <h3 onClick={handleClickPrice} className="filterNames">Prix {togglePrice ? "-" : "+"}</h3>
            <form className={ togglePrice ? "price" : "hidden"}>
                <label className="labelSelect" htmlFor="minPrice">Prix min</label>
                <select className="select"
                    id="minPrice" 
                    value={props.valueSelect.minPrice}
                    onChange={(event) => props.handleSelect(event)}
                    name="minPrice"
                >
                    {priceSelectOptions}
                </select>
                <br/>

                <label className="labelSelect" htmlFor="maxPrice">Prix max</label>
                <select className="select"
                    id="maxPrice" 
                    value={props.valueSelect.maxPrice}
                    onChange={(event) => props.handleSelect(event)}
                    name="maxPrice"
                >
                    {priceSelectOptions}
                </select>
                </form>
                <h3 onClick={handleClickRating} className="filterNames">Notes {toggleRating ? "-" : "+"}</h3>
                <form className={toggleRating ? "rating" : "hidden"}>

                <label className="labelSelect" htmlFor="minRating">Note min</label>
                <select className="select" 
                    id="minRating" 
                    value={props.valueSelect.minRating}
                    onChange={(event) => props.handleSelect(event)}
                    name="minRating"
                >
                    {ratingSelectOptions}
                </select><br/>

                <label className="labelSelect" htmlFor="maxRating">Note max</label>
                <select className="select" 
                    id="maxRating" 
                    value={props.valueSelect.maxRating}
                    onChange={(event) => props.handleSelect(event)}
                    name="maxRating"
                >
                    {ratingSelectOptions}
                </select>
            </form>
        </div>
    );
}