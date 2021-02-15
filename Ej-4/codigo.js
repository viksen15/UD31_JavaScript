var valores = [true, 5, false, "hola", "adios", 2];
function mostrar(){ document.getElementById("valores").innerHTML = "CONTENIDO DEL ARRAY: " + valores; }
// 1
function mayorOmenor(){
var mayor = valores.reduce((prev, curr) => typeof curr === 'string' && (curr.length > prev.length) ? curr : prev, '');
document.getElementById("mayorOmenor").innerHTML = "El elemento de texto mayor es: " + mayor;
}

// 2
function trueORfalse(){
if (valores[1] = 5)
document.getElementById("true").innerHTML = "La posición 1 del array es 5? " + valores[0];
if (valores[5] != 5)
document.getElementById("false").innerHTML = "La posición 5 del array es 5? " + valores[2];
}

// 3
function suma(){
document.getElementById("suma").innerHTML = "El resultado de la suma es: " + (valores[1] + valores[5]);
}
function resta(){
    document.getElementById("resta").innerHTML = "El resultado de la resta es: " + (valores[1] - valores[5]);
}
function multiplicacion(){
    document.getElementById("multiplicacion").innerHTML = "El resultado de la multiplicación es: " + (valores[1] * valores[5]);
}
function division(){
    document.getElementById("division").innerHTML = "El resultado de la división es: " + (valores[1] / valores[5]);
}
function residuo(){
    document.getElementById("residuo").innerHTML = "El residuo es: " + (valores[1] % valores[5]);
}