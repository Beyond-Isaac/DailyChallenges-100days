//Função tradicional
function name() {
    //bloco de código = tudo o que eu jogar dentro da função
    console.log("ação")
    
    nome()
}

function soma(nota_1, nota_2) {
    console.log(nota_1 + nota_2)

}
soma(27, 23) 

let = num1 = 5, num2 = 10
//soma(num1, num2)


//--------------------------------------//


//Função Anônima
console.log("\n")

const division = function(a, b) {
    console.log(a / b)
    
}
division(10, 2)



//--------------------------------------//


//Arrow Function
console.log("\n")

const subtrair = (a, b) => console.log(a - b) 
subtrair(10, 5)