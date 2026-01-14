type chai={
    water: number
    milk: number
}

class masalaChai implements chai{  // show no error
    water = 100
    milk = 100
}

type cupSize = "small" | "medium" | "large"
// class chai implements cupSize{  // error because cupSize is not chai type
//     water = 100
//     milk = 100
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

// in class implement use interface not type
