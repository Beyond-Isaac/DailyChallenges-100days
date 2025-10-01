//revisão para testar e aperfeiçoar o meu aprendizado
//código 

// console.log("olá") //string
// console.log(2 + 2) //number

// let soma = 2 + 2 //variável mutável
// console.log(soma + soma) 
// console.log(" olá " + soma) 

// O que eu posso chamar o que está acima? Simples! Esses são os meus blocos de códigos. Todo os meus projetos irão ter a presença de blocos de códigos. 
// Eu tenho que prestar atenção se os meus blocos estão sendo aleatórios ou planejados.


//Function
function Sum() {
    //Meu bloco de código reutilizável
    let sum = 5 + 5
    return sum 
    
} //console.log();


//A função tradicional trás para nós desenvolvedores um código mais limpo, organizado e um código reutilizável. 
// O bom da função é que ela apenas vai ser executada quando for chamada!
// note: the word sum is in portuguese soma.

function Division(num_one, num_two) {
    return num_one / num_two
    
    
} //console.log(Division(25, 5));

//Quando aparece NaN significa que o meu número não foi definido. A sigla em inglês NaN é Not a Number = Não é um número.

//Function Unknown

const Times = function (x, y) {
    return x * y
    
} 

//console.log(Times(20, 5));
//A função anônima é uma funcão que não precisa de nome, simples. Posso chama-lá apenas pelo nome da variável.

//Arrow Function  

const times = (a, b) => a * b 
// console.log(times(70,7))

//Essa fução aqui é a queridinha de todos. Ela não precisa term o nome declarado e não precisa que seja escrito função. Com isso ela se torna uma fonte limpa e simples.
//A função abaixo é a mesma, só que ainda mais simples!!!

const respects = name => `Hello, ${name}!`
//console.log(respects("Ashley"))

const Ten = (a, b, c) => {
    console.log(a)
    console.log(b)
    console.log(c)
}
Ten("Ashley", "Isaac", "Vareza")