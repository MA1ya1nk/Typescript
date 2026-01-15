// class chai{
//     flavour: string;
//     price: number

//     constructor(flavour: string, price: number){  // In typescript constructor is mendatory to define otherwise error will occur
//         this.flavour=flavour
//         this.price=price  // this refrers to current object like myChai
//     }
// }

// const myChai = new chai("ginger", 30)
// console.log(myChai.flavour)

class newChai {
    public flavour: string = "masala";
    
    private secrestIngredient: string = "clove";  // #secretIngredient can also be used for private
  // private value is also declare by _ before name like _secretIngredient it is industrial standard
    reveal2(){  // can have any name
        return this.secrestIngredient;
    }

}

const c = new newChai()
// console.log(c.reveal2())
// console.log(c.flavour)


class parent{
    protected name="mayank"
}
class child extends parent{
    getname(){
        return this.name
    }
}

const obj = new child()
console.log(obj.getname())


// readonly modifier
class User {
  readonly id: number; // we can also declare it here
  name: string;

  constructor(id: number, name: string) {
    this.id = id;      // ✅ allowed
    this.name = name;
  }

  changeId() {
    // this.id = 10;   ❌ Error: Cannot assign to 'id'
  }
}

const u1 = new User(1, "Mayank");
u1.name = "MK";        // ✅ allowed
// u1.id = 2;          ❌ Error
 // this readonly can only be assigned one time either at the time of declaration or in constructor

class modernchai{
    private _age = 21
    
    get age(){
        return this._age
    }
    set age(age: number){
        this._age=age
    }
} 

// static member, abstract class

// very very new concept composition over inheritance
class heater{
    heat(){}
}
class winter{
    constructor(private heater: heater){}
    make(){
        this.heater.heat()
    }
}