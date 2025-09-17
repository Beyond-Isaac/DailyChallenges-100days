let idade = console.log("Digite a sua idade!"); //Aqui eu uso o "console.log" no lugar do "prompt". Quando eu utilizo o console.log, posso abrir o comando via terminal. 

if (idade < 18) {
    console.log("Voce é menor de idade!");
} else if (idade >= 18 && idade <= 65) {
    console.log("Voce é uma pessoa velha!");
}   else {
    console.log("Voce é um adulto!");    
}