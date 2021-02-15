var letras = ['T','R','W','A','G','M','Y','F','P','D','X','B','N','J','Z','S','Q','V','H','L','C','K','E','T'];

//  1
var numero = prompt("Introduce el numero de DNI");
var letra = prompt("Introduce la letra del DNI");
letra.toUpperCase();
//  2
if (numero < 0 || numero > 99999999)
{ alert("El número proporcionado no es valido!"); }
//  3
else {
    var calculoLetra = letras[numero % 23];
//  4
    if (calculoLetra != letra) { alert("La letra o el número proporcionados no son correctos"); }
    else { alert("El número y la letra del DNI son correctos."); }
}


