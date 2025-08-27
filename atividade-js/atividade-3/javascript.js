let IdadeOne = Number(prompt('Digite a sua idade!'))
let IdadeTwo = Number(prompt('Digite a sua idade!'))

if ( IdadeOne > IdadeTwo) {
    alert(`A idade ${IdadeOne} é maior.`)
} else if (IdadeTwo > IdadeOne) {
    alert(`A idade ${IdadeTwo} é maior.`)
} else {
    alert('Idades iguais.')
}