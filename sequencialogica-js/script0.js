let Idade = Number(prompt("Quantos anos voce tem?"));  //Quando eu uso o comando prompt, ele envia um formulário para ser preenchido. Nesse caso, "Quantos anos voce tem?". O Number ele faz com que a minha variável "Idade" seja tratada como um número de real, com isso deixando o código mais seguro e sem probabilidade de erro.
 
  if (Idade < 18) {
    alert("Voce é menor de idade.");
  } else if (Idade >= 18 && Idade <= 65) {
    alert("Voce é adulto.");
  } else {
    alert("Voce é idoso.");
  }

  