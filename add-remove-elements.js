let secao = document.getElementsByTagName("section");
let novoParagrafo = document.createElement("p"); //cria um elemento no meu html
let formularioElemento = document.getElementById("formulario")
let labelElemento = document.getElementById("label")

novoParagrafo.textContent = "Paragrafo criado via JS"; //poe um conteudo no p

secao[0].appendChild(novoParagrafo);

