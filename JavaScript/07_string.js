const name = "hello" + "world"
const repoCount = 50
console.log(name + repoCount)
console.log(`Hello my name is ${name} and my repo count is ${repoCount} `);
// const gameName = new String('Richi-e')
const gameName = new String('hitesh-hc-com')
console.log(gameName[0]);
console.log(gameName.__proto__)
console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(2))
console.log(gameName.indexOf('h'))
const newString = gameName.substring(0,3)
console.log(newString)
const anotherString = gameName.slice(-8,4)
console.log(anotherString);
//remove white spaces
const newStringOne = "   Richie     "
console.log(newStringOne)
console.log(newStringOne.trim())
const url = "https://richa.com/richa%20kumari"
console.log(url.replace('%20','-'))
console.log(url.includes('richa'))
console.log(url.includes('sundar'))

console.log(gameName.split('-'))

