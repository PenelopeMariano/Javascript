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