//For - loop contato
//Contador do 0 ao 10
// for(inicializador; condicação; contador)

// for(let num = 0; num <= 10; num++){
//     console.log( "Eu vim Barganhar" + num)
// }

// while - loop condicional 
// let salario = 1000

// while(salario < 5000){
//     // salario = 100 + salario
//     salario += 100

//     console.log("O salário é de R$: " + salario)
// }

// // Do while - loop condicional
// let aumento = 1000

// do{
//     console.log("Esse é o seu salário:" + aumento)
//     aumento += 100
// } while (aumento < 5000)

// Array
let frutas = ["Banana" , "Laranja" , "Maça" , "Melancia" , "Morango" , "Uva"]
// o array sempre vai começar do 0

// console.log(fruta[3])
// console.log(fruta[5])

// forEach => percorre uma lista
// "pode ser qualquer nome pq ela é uma variavel"
frutas.forEach(batata =>{
    console.log("A fruta é: " + batata)
})

// Percorrer uma lista com for
for(let indice = 0; indice < frutas.length; indice++){
    console.log(frutas[indice])

    if(frutas [indice] == "Uva"){
        console.log("Eu gosto de" + frutas [indice])
    }
}