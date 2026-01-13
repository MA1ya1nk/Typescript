/*
type narrowing
unknown is also a type and it is similar to any just provide a value to this variable before using it so it is safer than any
*/
function getChai(kind: string | number){
    if(typeof kind === 'string'){
        return `Here is your ${kind} chai`;
    }
    return `chai order number: ${kind}`;  // requirement of this separate type is so that is suggest respective methods to both types
}

function chai(size: "small" | "medium" | number){
    if(size === "small")
        return "small chai..."
    if(size === "medium")           // exhausted check for each type
        return "medium chai..."

    return `${size}ml chai...  `
}

class cuttingChai{
    serve(){
        return "cutting chai"
    }
}
class kulhadChai{
    serve(){
        return "kulhad chai..."
    }
}

function chaiServe(chai: cuttingChai | kulhadChai){
    if(chai instanceof cuttingChai){
        return chai.serve();
    }
    return chai.serve();
}  

//Type keyword
type chaiOrder = {
    type: string
    sugar: number
}

function followingChaiOrderProperty(obj: any): obj is chaiOrder{  // v.v imp so by passing an object through this functon we are sure that the object is chaiOrder type hence can use its properties or methods
    return (
        typeof obj === "object" &&
        obj !== null &&
        typeof obj.type === "string" &&
        typeof obj.sugar === "number"
    )
}

type masalaChai = {type: "masala", spiceLevel: number}
type gingerChai = {type: "ginger", amount: number}
type elaichiChai = {type: "elaichi", aroma: number}

type chai = masalaChai | gingerChai | elaichiChai 

function brew(order: masalaChai | gingerChai){
    if("spiceLevel" in order){   // another way of narrowing using 'in' keyword
        return `brewing masala chai with spice level ${order.spiceLevel}`;
    }
}