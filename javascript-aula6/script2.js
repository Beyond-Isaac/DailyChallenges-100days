//Function que recebe dois números e devolve o maior deles:
console.log("\n")

function number(num1, num2) {
    console.log("Qual é o maior número entre esses?")
    if (num1 > num2) {
        console.log(`Número ${num1} é maior que o número ${num2}.`)
    } else {
        console.log(`Número ${num2} é maior que o número ${num1}.`)
    }    
} 

number(10, 20)

//Function que recebe a idade e fala se você é maior ou menor de idade:

function age(age1) { 
console.log("\n")
    if (age1 >= 18) {
        console.log(`Você tem ${age1}, logo você é de maior.`)
        
    } else {
        console.log(`Você tem ${age1}, logo você é de menor de idade.`)
        
    }
    
}

age(20)

//Function faça a média de três notas
console.log("\n")
const grades = (grade1, grade2, grade3) => console.log(`A média das suas 3 notas é igual: ${(grade1 + grade2 + grade3) / 3}`) 

grades (4, 7, 1)
