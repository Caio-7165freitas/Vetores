function desafio1() {
    let entradas = [];
    entradas[0] = document.getElementById("entrada1").value;
    entradas[1] = document.getElementById("entrada2").value;
    entradas[2] = document.getElementById("entrada3").value;
    entradas[3] = document.getElementById("entrada4").value;
    entradas[4] = document.getElementById("entrada5").value;

    entradas.sort();
    document.getElementById("resposta1").innerHTML = entradas.reverse().join('-');

}


function desafio2() {

    let varEntrada = document.getElementById("entrada").value;


    let array = []

    for (let indice = 0; indice < varEntrada; indice++) {
        array.push(indice)
    }

    document.getElementById("resposta2").innerHTML = array.join(' ')
}

function desafio3() {
    let Frase = document.getElementById('frase').value;
    let array = [Frase.split('')];
    let array2 = Frase.length;

    document.getElementById("resposta3").innerHTML = array + "<p> quantidade de caracter:" + array2 + "</p>";

    

}

function limpar1() {
    document.getElementById("entrada1").value=""
    document.getElementById("entrada2").value=""
    document.getElementById("entrada3").value=""
    document.getElementById("entrada4").value=""
    document.getElementById("entrada5").value=""
}
function limpar2() {
    document.getElementById("entrada").value=""
}
function limpar3() {
    document.getElementById("frase").value=""
}