// Verficar a nota escolar. Criar uma variável nota, acima do número 6 aprovado e abaixo reprovado.

let schoolgrade = 6.5
let medium = 5
console.log (medium >= 5)


if (schoolgrade >= 5) {
    //bloco de código desse if
    console.log(`Aproved, your note is ${schoolgrade}`)
} else if (schoolgrade >= 4 && schoolgrade <= 5) { 

} else {
    console.log(`Reproved, your note dosent in the medium ${schoolgrade}`)
}

