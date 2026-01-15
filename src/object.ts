let tea : {
    name: string,
    price: number,
    isHot: boolean
}

tea = {
    name: "ginger",
    price: 30,
    isHot: true
}


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
type address = {street: string, pin: number}

type order = {
    id: string,
    item: Item[], // array of Item type
    shippingAddress: address
}

type chai2 = {
    name: string,
    price: number,
    isHot: boolean
}

const updateChai = (updates: Partial<chai2>) => {
    console.log("updating...")
}
updateChai({price: 40})  // we can pass either name or price or both

const readChai = (chai: Readonly<chai2>) => {
    // chai.price=50  // THROUGH error bcoz chai is readonly
    console.log(`Chai name is ${chai.name} and price is ${chai.price}`)
}

readChai({name: "masala", price: 30, isHot: true})

const func = (obj: Required<chai2>) => {
    console.log("nabsdhjksm...")
}
//func({name: "mayank"})  // THROUGH error bcoz all properties are required in Required<> so price is also necessary
func({name: "mayank", price: 20, isHot: false})

type chaiPicked = Pick<chai2, "name" | "isHot">  // only name and isHot property is picked
const pickedChai: chaiPicked = {
    name: "ginger",
    isHot: true,
    // price: 30  // THROUGH error bcoz price is not picked
}

// similarly we have Omit<> that omits the specified properties i.e excludes them and cannot be used