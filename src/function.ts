function makeChai(type: string, cups: number){
    console.log(`making ${cups} cups of ${type} chai`)
}

makeChai("masala", 2)

function getChaiPrice(): number {
    //return "50"  // THROUGH error
    return 30
}

function solve(size: number){  // here dattatype can't determine
    if(!size)
        return null
    return size;
}

function solve2(): void {  // void when nothing is returning from function
    console.log("This function returns nothing")
}