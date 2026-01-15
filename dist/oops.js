"use strict";
// class chai{
//     flavour: string;
//     price: number
Object.defineProperty(exports, "__esModule", { value: true });
//     constructor(flavour: string, price: number){  // In typescript constructor is mendatory to define otherwise error will occur
//         this.flavour=flavour
//         this.price=price  // this refrers to current object like myChai
//     }
// }
// const myChai = new chai("ginger", 30)
// console.log(myChai.flavour)
class newChai {
    flavour = "masala";
    secrestIngredient = "clove";
    reveal2() {
        return this.secrestIngredient;
    }
}
const c = new newChai();
console.log(c.reveal2());
console.log(c.flavour);
class parent {
    name = "mayank";
}
class child extends parent {
    getname() {
        return this.name;
    }
}
const obj = new child();
console.log(obj.getname());
//# sourceMappingURL=oops.js.map