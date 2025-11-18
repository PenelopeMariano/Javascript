let peso = Number (prompt("Digite seu peso em kg"));
let altura = Number (prompt("Digite sua altura em metros:"));

let imc = peso / (altura * altura);

console.log("Seu IMC é:" + imc.toFixed(2));

let classificacao = "";

if (imc < 18.5){
    classificacao = "abaixo do peso";
}else if (imc <25){
    classificacao = "peso normal";
}else if (imc <30){
classificacao ="sobrepeso";
}else if (imc < 35){
    classificacao = "obesidade grau 1";
}else if (imc <40){
    classificacao = "obesidade grau 2";
}else {
    classificacao = "obesidade grau 3";
}

console.log("classificação: " + classificacao)