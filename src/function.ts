function makeChai(type: string, cups: number){
    console.log(`making ${cups} cups of ${type} chai`)
}

makeChai("masala", 2)

function getChaiPrice(): number {  // number return type
    //return "50"  // THROUGH error
    return 30
}

function solve(size: number){  // here datatype is not defined so it can return any type
    if(!size)
        return null
    return size;
}

function logChai(): void {  // void when nothing is returning from function
    console.log("This function returns nothing")
}

//optional parameters
function orderChai(type? : string){

}

// default parameters
function solve2(name: string = "Alice"){
    console.log(`Hello, ${name}`)
}

function complex(chai: {
   type: string,
   sugar: number
}): number{
    return 56
}