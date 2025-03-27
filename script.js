let resultado = document.getElementById('resultado');
let calcular = document.getElementById("calcular");
let classificacao = document.getElementById('classificacao');

let valorImc;

calcular.addEventListener('click', CalculateIMC => {
    let altura = document.querySelector("#altura").value;
    let peso = document.querySelector("#peso").value;
    let valorImc = peso/(altura*altura);
    parseFloat (valorImc);
    console.log (valorImc);
    resultado.innerHTML = "Seu IMC é: " + valorImc
    if(valorImc == isNaN){
        alert("Valor invalidos");
    } else if(valorImc < 18.5){
        classificacao.innerHTML = "Classificação: Baixo Peso"
    }
    else if(valorImc >= 18.5 && valorImc < 24.9){
        classificacao.innerHTML = "Classificação Peso Normal"
    }
    else if (valorImc >= 25 && valorImc < 29.9){
        classificacao.innerHTML = "Classificação: Excesso de Peso"
    }
    else if (valorImc >= 30){
        classificacao.innerHTML = "Classificação: Obesidade"
    }
    else if (valorImc >= 30 && valorImc < 35){
        classificacao.innerHTML = "Classificação:Obesidade Grau I"
    }
    else if (valorImc >= 35 && valorImc < 40){
        classificacao.innerHTML = "Classificação: Obesidade Grau Ii"
    }
    else if (valorImc >= 40){
        classificacao.innerHTML = "Classificação: Obesidade Grau III"
    }
});