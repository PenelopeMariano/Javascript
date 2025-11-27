let elementosPorClass = document.getElementsByClassName("texto");
let elementoPorID = document.getElementById("formulario")
let elementoPorTag = document.getElementsByTagName("p")


//exibindo 
console.log(elementosPorClass);
console.log(elementosPorClass [0]); //acessa a posicao do array
console.log(elementoPorID);
console.log(elementoPorTag);
console.log(elementoPorTag [0].textContent);

//modificando
elementoPorTag[0].textContent = "Video engraçado"; //modifica o conteudo do elemento
elementoPorTag[0].style.color = "red";
elementoPorTag[0].style.fontSize= "30px";


//DESAFIOS
//exiba o 2 elemento da variavel elementos 
//crie uma variavel que tenha o valor de uma elemento buscado pela sua tag
//Acesse a propriedade innertext da variavel elementoPorTag(é uma array, vão ter que acessar a 
// Posicao do elemento) e exiba no console.log//
//Pcesse a propriedade style.color e atribui uma nova cor red em formato de string para a posição 0 da variavel
//elementoPorTag
