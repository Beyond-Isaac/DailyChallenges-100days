//Function Tradicional
console.log("\n")

function name(nome, idade) {
    console.log(`Seu nome é ${nome} e sua idade é ${idade}`)
    
}
name("Carvalho", 18)

//Function Anônima
console.log("\n")

const double = function(a, b) {
    
    console.log(`Você tem o número 4 e o dobro dele é: ${a * b}`)
}
double(4, 2)

//Function Arrow 
console.log("\n")

const soma = (a, b) => console.log(a + b) 
soma(10, 2)
