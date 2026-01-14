

type Tea = {
    name: string;
    price: number;
    ingredients: string[];
}

const adrakChai: Tea = {
    name: "Adrak Chai",
    price: 50,
    ingredients: ["water", "milk", "tea leaves", "ginger", "sugar"]
}

type chai = {size: string}

//const normalChai: chai = {size: "200ml", isHot: true} // through error bcoz type of normalChai is chai but
const normalChai = {size: "300ml", isHot: true}
const newChai: chai = normalChai

type Item = {name: string, quantity: number}
type address = {street: string, zip: number}

type order = {
    id: string,
    item: Item,
    shippingAddress: address
}