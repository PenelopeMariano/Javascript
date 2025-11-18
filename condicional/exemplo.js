//alert - Apresenta uam mensagem na tela
// window.alert("Ola turma do borges")
// //Confirm - Pergunta com um ok/ cancela (Retorna um verdadeiro ou falso)
// window.confirm("o Jonas vai casar!")
// //prompt - Pega um texto da tela 
// window.prompt("Qual o seu nome?s")

// console.log("Multimidia")

// let nome = prompt("Informe o seu nome")

// console.log("Bem Vindo!" + nome)

// let numero1 = Number.parseInt(prompt ("Digite o primeiro número: ") )
// let numero2 = Number.parseInt (prompt("Digite o segundo número"))

// let numero1 = Number.parseFloat(prompt ("Digite o primeiro número: ") )
// let numero2 = Number.parseFloat (prompt("Digite o segundo número"))

// let resultado = numero1 + numero2

// console.log(resultado)

let idade = window.prompt("Qual sua idade?")

if (idade >= 18) {
    console.log("Maior de idade! dalhee")
} else {
    console.log("Você é menor de idade!")
}

switch (idade) {
    case "18":
        console.log("Maior de idade!")
        break;

    case "27":
        console.log("Esta perto dos 30")
        break;

    default:
        console.log("Nada a dizer")
        break;
}