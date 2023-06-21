import React from "react"
import "./Boutique.css"

export default function Filtre (props) {

    const numberListPrice = [1,2,3,4,5,6,7,8,9,10];
    const numberListRating = [1,2,3,4,5];
    


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
            <form>
                <h3>Catégories</h3>
                <input
                    type="checkbox" 
                    id="tous" 
                    value={props.tousValue}
                    checked={props.tousValue}
                    onChange={(event) => props.handleTous(event)}
                    name="tous"
                />
                <label htmlFor="tous">Tous</label><br/>
                
                <input
                    type="checkbox"
                    id="chocolatBlanc" 
                    value={props.value.chocolatBlanc}
                    checked={props.value.chocolatBlanc}
                    onChange={(event) => props.handleChange("chocolatBlanc", event)}
                    name="chocolatBlanc"
                />
                <label htmlFor="chocolatBlanc">Chocolat blanc</label><br/>
                <input
                    type="checkbox" 
                    id="chocolatLait" 
                    value={props.value.chocolatLait}
                    checked={props.value.chocolatLait}
                    onChange={(event) => props.handleChange("chocolatLait", event)}
                    name="chocolatLait"
                />
                <label htmlFor="chocolatLait">Chocolat au lait</label><br/>
                <input
                    type="checkbox" 
                    id="chocolatNoir" 
                    value={props.value.chocolatNoir}
                    checked={props.value.chocolatNoir}
                    onChange={(event) => props.handleChange("chocolatNoir", event)}
                    name="chocolatNoir"
                />
                <label htmlFor="chocolatNoir">Chocolat noir</label><br/>
                <input
                    type="checkbox" 
                    id="noixNoisette" 
                    value={props.value.noixNoisette}
                    checked={props.value.noixNoisette}
                    onChange={(event) => props.handleChange("noixNoisette", event)}
                    name="noixNoisette"
                />
                <label htmlFor="noixNoisette">Noix/Noisette</label><br/>
                <input
                    type="checkbox" 
                    id="fruit" 
                    value={props.value.fruit}
                    checked={props.value.fruit}
                    onChange={(event) => props.handleChange("fruit", event)}
                    name="fruit"
                />
                <label htmlFor="fruit">Fruit</label><br/>
                <input
                    type="checkbox" 
                    id="caramel" 
                    value={props.value.caramel}
                    checked={props.value.caramel}
                    onChange={(event) => props.handleChange("caramel", event)}
                    name="caramel"
                />
                <label htmlFor="caramel">Caramel</label><br/>
                <input
                    type="checkbox" 
                    id="liqueur" 
                    value={props.value.liqueur}
                    checked={props.value.liqueur}
                    onChange={(event) => props.handleChange("liqueur", event)}
                    name="liqueur"
                />
                <label htmlFor="liqueur">Liqueur</label><br/>

                <h3>Prix</h3>

                <label htmlFor="minPrice">Prix min</label>
                <select 
                    id="minPrice" 
                    value={props.valueSelect.minPrice}
                    onChange={(event) => props.handleSelect(event)}
                    name="minPrice"
                >
                    {priceSelectOptions}
                </select>
                <br/>

                <label htmlFor="maxPrice">Prix max</label>
                <select 
                    id="maxPrice" 
                    value={props.valueSelect.maxPrice}
                    onChange={(event) => props.handleSelect(event)}
                    name="maxPrice"
                >
                    {priceSelectOptions}
                </select>

                <h3>Notes</h3>

                <label htmlFor="minRating">Note min</label>
                <select 
                    id="minRating" 
                    value={props.valueSelect.minRating}
                    onChange={(event) => props.handleSelect(event)}
                    name="minRating"
                >
                    {ratingSelectOptions}
                </select><br/>

                <label htmlFor="maxRating">Note max</label>
                <select 
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