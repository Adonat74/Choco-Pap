import { nanoid } from "nanoid"

const Data = [{
    id: nanoid(),
    title: "Framboisine",
    priceInCents: 525,
    rating: 4.1,
    image: "produit1.jpg",
    catégories: {
        chocolatBlanc: false,
        chocolatLait: true,
        chocolatNoir: false,
        noixNoisette: true,
        fruit: true,
        caramel: false,
        liqueur: true
    }
},{
    id: nanoid(),
    title: "Caramel'oeuf",
    priceInCents: 665,
    rating: 3.7,
    image: "produit2.jpg",
    catégories: {
        chocolatBlanc: false,
        chocolatLait: true,
        chocolatNoir: false,
        noixNoisette: false,
        fruit: false,
        caramel: true,
        liqueur: false
    }
},{
    id: nanoid(),
    title: "Liqu'heureux",
    priceInCents: 585,
    rating: 4.2,
    image: "produit3.jpg",
    catégories: {
        chocolatBlanc: false,
        chocolatLait: false,
        chocolatNoir: true,
        noixNoisette: false,
        fruit: true,
        caramel: false,
        liqueur: true
    }
},{
    id: nanoid(),
    title: "T'es blanc comme un Coeur",
    priceInCents: 715,
    rating: 4.5,
    image: "produit4.jpg",
    catégories: {
        chocolatBlanc: true,
        chocolatLait: false,
        chocolatNoir: false,
        noixNoisette: true,
        fruit: false,
        caramel: false,
        liqueur: false
    }
},{
    id: nanoid(),
    title: "L'écureuil",
    priceInCents: 355,
    rating: 4.3,
    image: "produit5.jpg",
    catégories: {
        chocolatBlanc: false,
        chocolatLait: true,
        chocolatNoir: false,
        noixNoisette: true,
        fruit: false,
        caramel: true,
        liqueur: false
    }
},{
    id: nanoid(),
    title: "Rocher Blanc",
    priceInCents: 475,
    rating: 3.9,
    image: "produit6.jpg",
    catégories: {
        chocolatBlanc: true,
        chocolatLait: true,
        chocolatNoir: false,
        noixNoisette: false,
        fruit: false,
        caramel: true,
        liqueur: false
    }
},{
    id: nanoid(),
    title: "Le Moche",
    priceInCents: 510,
    rating: 2.9,
    image: "produit7.jpg",
    catégories: {
        chocolatBlanc: false,
        chocolatLait: true,
        chocolatNoir: false,
        noixNoisette: true,
        fruit: true,
        caramel: false,
        liqueur: true
    }
},{
    id: nanoid(),
    title: "Love",
    priceInCents: 745,
    rating: 4.7,
    image: "produit8.jpg",
    catégories: {
        chocolatBlanc: false,
        chocolatLait: false,
        chocolatNoir: true,
        noixNoisette: true,
        fruit: true,
        caramel: false,
        liqueur: false
    }
},{
    id: nanoid(),
    title: "L'arlequin",
    priceInCents: 825,
    rating: 4.9,
    image: "produit9.jpg",
    catégories: {
        chocolatBlanc: false,
        chocolatLait: false,
        chocolatNoir: true,
        noixNoisette: true,
        fruit: false,
        caramel: true,
        liqueur: true
    }
}]

export default Data;