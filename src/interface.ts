// why type?
function makeChai(order: {type: string, cups: number, sugar: boolean}){
    console.log("making chai...")
}
function chaiOrder(order: {type: string, cups: number, sugar: boolean}){
    console.log("Chai order received")
}
// here we again and agin writing same type
type Chai1 = {
    type: string,
    cups: number,
    sugar: boolean
}
function newChaiOrder(order: Chai1){}




type chai={
    water: number
    milk: number
}

class masalaChai implements chai{  // show no error
    water = 100
    milk = 100
}

//this type can't be used for implementing in class reason is below

type cupSize = "small" | "medium" | "large"
// class chai implements cupSize{  // error because cupSize is not chai type
//     cupSize: "small"
// }

// so use interface for such cases
interface name {
    first: string
    last: string
}

interface cup_size {
    size: "small" | "medium" | "large"
}
class Chai implements cup_size{
    size: "small" | "medium" | "large" = "medium"
}

// in class implement use interface not type(it is a general statement)


type TeaType = "masala" | "ginger" | "lemon" // union type
function tea2(t: TeaType){  // 
    console.log(t)  // only masala, ginger, lemon can be passed
}

