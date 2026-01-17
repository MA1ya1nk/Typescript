//                           INTERFACE
// it is smilar to type but with some extra features and both can be used interchangebly in most of the cases(80%)
interface Chai{
    type: string,
    price: number,   // readonly name: string // it can only read can't change like chai.name = "new name" will give error
    milk?: boolean // optional property
}

const masala: Chai = {
    type: "masala",
    price: 20
}

interface teaMachine{
    start(): void,
    stop(): void   // : void means it returns nothing(void)
}
const machine: teaMachine = {
    start(){
        console.log("machine started")
        
    },
    stop(){
        console.log("machine stopped")
        
    }
}

interface user{
    name: string
}
interface user{
    age: number 
}

const u: user = {
    name: "mayank",  // if you define only one property it will give error because interface user is merged
    age:20
}

interface A {a:number}
interface B {b: number}
interface C extends A, B{}  // multiple inheritance