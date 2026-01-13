/*
type narrowing
Type narrowing is how TypeScript reduces a broad type (usually a union)
into a more specific type using runtime checks, so you can safely access properties and methods.

unknown is also a type and it is similar to any just provide a value to this variable before using it so it is safer than any
*/


//  ways to do type narrowing

// typeof
function getChai(kind: string | number){
    if(typeof kind === 'string'){
        return `Here is your ${kind} chai`;
    }
    return `chai order number: ${kind}`;  // requirement of this separate type is so that is suggest respective methods to both types
}


// equality narrowing
function chai(size: "small" | "medium" | number){
    if(size === "small")
        return "small chai..."
    if(size === "medium")           // exhausted check for each type
        return "medium chai..."

    return `${size}ml chai...  `
}

// discriminated union narrowing
type Shape =
  | { kind: "circle"; radius: number }
  | { kind: "square"; side: number };

function area(shape: Shape) {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "square":
      return shape.side ** 2;
  }
}



// instance narrowing
class User {
  login() {}
}

class Admin {
  access() {}
}

function check(u: User | Admin) {
  if (u instanceof User) {
    u.login();
  } else {
    u.access();
  }
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


// in operator narrowing
type masalaChai = {type: "masala", spiceLevel: number}
type gingerChai = {type: "ginger", amount: number}
type elaichiChai = {type: "elaichi", aroma: number}

type chai = masalaChai | gingerChai | elaichiChai 

function brew(order: masalaChai | gingerChai){
    if("spiceLevel" in order){   // another way of narrowing using 'in' keyword
        return `brewing masala chai with spice level ${order.spiceLevel}`;
    }
}

/*
Type narrowing is the result, while a type guard is a technique used to achieve type narrowing.

A type guard is a check or function that tells TypeScript how to narrow a type.
Type guards can be:
typeof
instanceof
in

*/