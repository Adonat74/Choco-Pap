import { nanoid } from "nanoid"

const Data = [{
    id: nanoid(),
    title: "Framboisine",
    priceInCents: 525,
    rating: 4.1,
    image: "produit1.jpg",
    catégories: [
        "chocolatLait",
        "noixNoisette",
        "fruit",
        "liqueur"
    ]
},{
    id: nanoid(),
    title: "Caramel'oeuf",
    priceInCents: 665,
    rating: 3.7,
    image: "produit2.jpg",
    catégories: [
        "chocolatLait",
        "caramel",
    ]
},{
    id: nanoid(),
    title: "Liqu'heureux",
    priceInCents: 585,
    rating: 4.2,
    image: "produit3.jpg",
    catégories: [
        "chocolatNoir",
        "fruit",
        "liqueur"
    ]
},{
    id: nanoid(),
    title: "Blanc Coeur",
    priceInCents: 715,
    rating: 4.5,
    image: "produit4.jpg",
    catégories: [
        "chocolatBlanc",
        "noixNoisette",
    ]
},{
    id: nanoid(),
    title: "L'écureuil",
    priceInCents: 355,
    rating: 4.3,
    image: "produit5.jpg",
    catégories: [
        "chocolatLait",
        "noixNoisette",
        "caramel",
    ]
},{
    id: nanoid(),
    title: "Rocher Blanc",
    priceInCents: 475,
    rating: 3.9,
    image: "produit6.jpg",
    catégories: [
        "chocolatBlanc",
        "chocolatLait",
        "caramel",
    ]
},{
    id: nanoid(),
    title: "Le Moche",
    priceInCents: 510,
    rating: 2.9,
    image: "produit7.jpg",
    catégories: [
        "chocolatLait",
        "noixNoisette",
        "fruit",
        "liqueur"
    ]
},{
    id: nanoid(),
    title: "Love",
    priceInCents: 745,
    rating: 4.7,
    image: "produit8.jpg",
    catégories: [ 
        "chocolatNoir",
        "noixNoisette",
        "fruit",
    ]
},{
    id: nanoid(),
    title: "L'arlequin",
    priceInCents: 825,
    rating: 4.9,
    image: "produit9.jpg",
    catégories: [
        "chocolatNoir",
        "noixNoisette",
        "caramel",
        "liqueur"
]
}]

export default Data;