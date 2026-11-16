
function calcularDesconto() {
    let compra = Number(document.getElementById("compra").value);
    let resultado;

    if (compra <= 0) {
        resultado = "Digite um valor válido.";
    } else if (compra >= 100) {
        resultado = "Desconto de 10%! Valor final: R$ " +
            (compra - compra * 0.10).toFixed(2);
    } else {
        resultado = "Sem desconto. Valor final: R$ " +
            compra.toFixed(2);
    }

    document.getElementById("resultadoDesconto").innerText = resultado;
}

function verificarAprovacao() {
    let nota = Number(document.getElementById("nota").value);
    let resultado;

    if (nota < 0 || nota > 10) {
        resultado = "Digite uma nota entre 0 e 10.";
    } else if (nota >= 7) {
        resultado = "Aluno aprovado!";
    } else {
        resultado = "Aluno reprovado.";
    }

    document.getElementById("resultadoNota").innerText = resultado;
}

function classificarNota() {
    let nota = Number(document.getElementById("notaClassificacao").value);
    let resultado;

    if (nota < 0 || nota > 10) {
        resultado = "Nota inválida!";
    } else if (nota === 10) {
        resultado = "MB - Muito bom!";
    } else if (nota >= 7.5) {
        resultado = "B - Bom!";
    } else if (nota >= 5) {
        resultado = "R - Regular!";
    } else {
        resultado = "I - Insuficiente!";
    }

    document.getElementById("resultadoClassificacao").innerText = resultado;
}

function identificarNumero() {
    let numero = Number(document.getElementById("numero").value);
    let resultado;

    if (numero > 0) {
        resultado = "Número positivo";
    } else if (numero < 0) {
        resultado = "Número negativo";
    } else {
        resultado = "O número é zero";
    }

    if (numero % 2 === 0) {
        resultado += " e par.";
    } else {
        resultado += " e ímpar.";
    }

    document.getElementById("resultadoNumero").innerText = resultado;
}

function calcularSoma() {
    let campos = document.querySelectorAll(".valor");
    let somaTotal = 0;

    for (let i = 0; i < campos.length; i++) {
        if (campos[i].value.trim() === "") {
            document.getElementById("resultadoSoma").innerText =
                "Preencha os cinco números.";
            return;
        }

        somaTotal += Number(campos[i].value);
    }

    document.getElementById("resultadoSoma").innerText =
        "Resultado da soma: " + somaTotal;
}
