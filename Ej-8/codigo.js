var numero = prompt("Introduce un numero para saber si es Par o Impar");

function parOimpar(numero){
    if (numero % 2 == 0) { return "par"; }
    else { return "impar"; }
}
var resultado = parOimpar(numero);

alert("El número " + numero + " es " + resultado);