// Primitive
// 7 types : String,Number,Boolean,null,undefined,Symbol used to make unique,BigInt
// Reference (Non primitive)
// Array , Objects, Function
const score = 100
const scoreValue =100.4
const isLoggedIn = false
const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId)
//to represent big int
const bigNumber = 45678924578n
const heros = ["IronMan","Nagraj","doga"]
let myObj ={
    name:"Richa Kumari",
    age : 22,
}
const myfunction = function(){
    console.log("Hello World")

}
console.log(typeof(myObj));
console.log(typeof myfunction);
console.log( typeof heros);
console.log(typeof id);
console.log(typeof bigNumber);

