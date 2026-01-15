const chaiFlavours: string[] = ["masala", "ginger", "lemon"];

const rating: Array<number> = [5, 4.5, 4, 5];

const mixedArray: (string | number)[] = [ "masala", 5, "ginger", 4.5 ];

type chai = {
    type: string,
    price: number
}

const menu: chai[] = [
    {type: "masala", price: 20},
    {type: "ginger", price: 15}
]

const cities: readonly string[] = ["Delhi", "Mumbai", "Bangalore"];
// cities.push("Chennai")  // THROUGH error bcoz cities is readonly

// multidimensional array
const matrix: number[][] = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];


//                                            TUPLE
let tuple: [string, number, boolean?];  // so boolean value is optional i.e not necessary to be present
tuple=["mak",10];

const location: readonly [number, number] = [40.7128, -74.0060];

                              // ENUMS
enum cupSize {
    SMALL,  // capital is standard practice
    MEDIUM,
    LARGE
}        

const size: cupSize = cupSize.MEDIUM;
// console.log(size)  // output 1 bcoz enum start from 0 index for SMALL=0, MEDIUM=1, LARGE=2
enum status {
    PENDING = 100,
    SERVED,  // IF NOT DEFINED THEN IT WILL TAKE 101
    CANCELLED  // 102
}

// enum can take multiple datatype like string and number both but not mixed in one enum is good practice
// const enum    is used so its values can't be altered
