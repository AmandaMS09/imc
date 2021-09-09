//window.alert('Olá mundo')
/*window.confirm('Você é legal?')*/
let nome = window.prompt('Qual é o seu nome?')
let peso, altura, imc, result
let aviso = document.getElementById("resultado")

function calcular() {
    peso = document.getElementById("peso").value;
    altura = document.getElementById("altura").value;

    imc = peso / (altura * altura)
    if(imc <= 18.5) {
        result = "abaixo do peso ideal"
    }
    else if(imc <= 24.9) {
        result = "com o peso ideal"
    }
    else if(imc <= 29.9) {
        result = "com um sobrepeso"
    }
    else if(imc <= 34.9) {
        result = "com obesidade I"
    }
    else if(imc <= 39.9) {
        result = "com obesidade II"
    }
    else {
        result = "com obesidade III"
    }

    aviso.innerHTML += "\n Olá, " + nome + "! Com o IMC: "  + imc + "Você está " + result;
}
