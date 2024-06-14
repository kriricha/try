// singleton
// object literals
// object.create
const mySym = Symbol("key1")
const Jsuser = {
    name: "Richa",
    "fullname": "Richa Sharma",
    [mySym]: "mykey1",
    age: 19,
    location: "Jaipur",
    email: "kriricha0@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","saturday"]
    

}
console.log(Jsuser.email);
console.log(Jsuser["email"]);
console.log(Jsuser.fullname);
console.log(Jsuser["fullname"]);
// console.log( typeof Jsuser.mySym);
console.log(Jsuser[mySym]);
// console.log(typeof mySym);
Jsuser.email = "lambda@gmail.com"
Object.freeze(Jsuser)
Jsuser.email = "ani@123gmail.com" 
console.log(Jsuser);
Jsuser.greeting = function(){
    console.log(`Hello JS user, ${this.name}`);
};
Jsuser.greetingTwo = function(){
console.log("Hello js user");
};
// console.log(Jsuser.greeting());
// console.log(Jsuser.greetingTwo());
Jsuser.greeting();
Jsuser.greetingTwo();