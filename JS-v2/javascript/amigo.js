//Introdução
console.log ('One more day!')

var name = 'pedrinho'  
 console.log(name)
let age = 20
 console.log(age)
const city = 'sao paulo - zs'
console.log(city)
name = 'gatinho'
console.log(name)
age = 'abacaxi'
console.log(age)


//  tipos de dados
let lastname = 'isaac' //string
let height = 1.75 //number 
let isAproved = true //Boolean
let nothing = null //null
let undefined //undefined


//type of -> descobrir o tipo de variável
console.log(typeof age)
console.log(typeof undefined)


//operadores 
//matemáticos
let a = 5, b = 2
console.log(a, b) // 5, 2 

console.log(`${a} + ${b} = ${a + b}`) // Adição 
console.log(`${a} - ${b} = ${a - b}`) // Subtração
console.log(`${a} / ${b} = ${a / b}`) // Divisão 
console.log(`${a} * ${b} = ${a * b}`) // Vezes
console.log(`${a} % ${b} = ${a % b}`) // Resto da divisão (módulo)
console.log(`${a} ** ${b} = ${a ** b}`) // Exponenciação

let i = 0 
//incremento
//pre (o pre primeiro faz e depois mostra)
// i = i + 1
console.log("pre", ++i) 

//pos (o pos mostra primeiro e depois faz)
console.log("pos", i++)
console.log("agora incrementou", i++)

let x = 5 
//Decremento
//pre 
// x = x + 1
console.log("pre", --x) 

//pos
console.log("pos", x)
console.log("agora incrementou", x)

//operação + atribuição
let y = 4
// y = y + 10
y += 10
y -= 2
y /= 2
y *= 2

