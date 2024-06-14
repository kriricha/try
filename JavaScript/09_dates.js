let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.getFullYear());
console.log(myDate.getTime());
console.log(myDate.setHours());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);


// let myCreateDate = new Date(2024,0,23,5,3)
// console.log(myCreateDate.toDateString())
let myCreateDate = new Date("01-14-2023")
console.log(myCreateDate.toLocaleString())
let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreateDate.getTime());
console.log(Math.floor(Date.now()/1000))
let newDate = new Date()
console.log(newDate.getDay());
console.log(newDate.getMonth()+1)
