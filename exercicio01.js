// Exercício 1: Verificação de login
// Escreva um programa que solicita ao usuário um nome de usuário e uma senha. Verifique se o
// nome de usuário é "admin" e a senha é "senha123". Exiba uma mensagem indicando se o login
// foi bem-sucedido ou não.


// Facil:
// let login = prompt("Digite o seu usuário")
// let senha = prompt("Digite a sua senha")

// if(login == "admin" && senha == "senha123"){
//     console.log("Login bem sucedido!")
// }
// else{ 
//     console.log("Você não tem permissão de acesso!")
// }


let login = window.prompt ("Qual o seu nome?")
let senha = window.prompt("Qual é a senha?")


switch (login) {
    case "admin":
        console.log ("Usuário correto. Bem-sucedido")
        break;

    default:
        console.log("Usuário incorreto. Tente novamente")
        break;
}

switch (senha) {
    case "senha123":
        console.log ("Senha correta. Bem-sucedido")
        
        break;

    default:
        console.log ("Senha incorreta. Tente novamente")
        break;
}