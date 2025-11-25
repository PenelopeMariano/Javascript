// Faça um programa que receba um número do usuário e continue
// a pedir o número se o numero for diferente de 0.

let numero = parseInt(prompt("Digite um numero:"));

while (numero !==0){
    numero = parseInt(prompt("Numero diferente de 0. Digite novamente"));
}

alert("Você digitou 0. Programa encerrado");