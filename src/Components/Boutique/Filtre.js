import React from "react"
import "./Boutique.css"

export default function Boutique () {

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



    function handleChange() {
        console.log("changed");
    }


    return (
        <div className="filter">
            <h2>Filtre</h2>
            <form>
                <h3>Catégories</h3>
                <input
                    type="checkbox" 
                    id="tous" 
                    value="tous"
                    onChange={handleChange}
                    name="tous"
                />
                <label htmlFor="tous">Tous</label><br/>
                <input
                    type="checkbox" 
                    id="chocolatBlanc" 
                    value="chocolatBlanc"
                    onChange={handleChange}
                    name="chocolatBlanc"
                />
                <label htmlFor="chocolatBlanc">Chocolat blanc</label><br/>
                <input
                    type="checkbox" 
                    id="chocolatLait" 
                    value="chocolatLait"
                    onChange={handleChange}
                    name="chocolatLait"
                />
                <label htmlFor="chocolatLait">Chocolat au lait</label><br/>
                <input
                    type="checkbox" 
                    id="chocolatNoir" 
                    value="chocolatNoir"
                    onChange={handleChange}
                    name="chocolatNoir"
                />
                <label htmlFor="chocolatNoir">Chocolat noir</label><br/>
                <input
                    type="checkbox" 
                    id="noixNoisette" 
                    value="noixNoisette"
                    onChange={handleChange}
                    name="noixNoisette"
                />
                <label htmlFor="noixNoisette">Noix/Noisette</label><br/>
                <input
                    type="checkbox" 
                    id="fruit" 
                    value="fruit"
                    onChange={handleChange}
                    name="fruit"
                />
                <label htmlFor="fruit">Fruit</label><br/>
                <input
                    type="checkbox" 
                    id="caramel" 
                    value="caramel"
                    onChange={handleChange}
                    name="caramel"
                />
                <label htmlFor="caramel">Caramel</label><br/>
                <input
                    type="checkbox" 
                    id="liqueur" 
                    value="liqueur"
                    onChange={handleChange}
                    name="liqueur"
                />
                <label htmlFor="liqueur">Liqueur</label><br/>

                <h3>Prix</h3>

                <label htmlFor="minPrice">Prix min</label>
                <select 
                    id="minPrice" 
                    //value={formData.favColor}
                    onChange={handleChange}
                    name="minPrice"
                >
                    {priceSelectOptions}
                </select>
                <br/>

                <label htmlFor="maxPrice">Prix max</label>
                <select 
                    id="maxPrice" 
                    //value={formData.favColor}
                    onChange={handleChange}
                    name="maxPrice"
                >
                    {priceSelectOptions}
                </select>

                <h3>Notes</h3>

                <label htmlFor="minRating">Note min</label>
                <select 
                    id="minRating" 
                    //value={formData.favColor}
                    onChange={handleChange}
                    name="minRating"
                >
                    {ratingSelectOptions}
                </select><br/>

                <label htmlFor="maxRating">Note max</label>
                <select 
                    id="maxRating" 
                    //value={formData.favColor}
                    onChange={handleChange}
                    name="maxRating"
                >
                    {ratingSelectOptions}
                </select>
            </form>
        </div>
    );
}