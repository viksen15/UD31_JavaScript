function mayusMinus(cadena){
    var resultado = "La cadena " + cadena;

    //  COMPROBAR MAYÚSCULAS Y MINÚSCULAS
    if (cadena == cadena.toUpperCase()) { resultado += " está formada por mayúsculas"; }
    else if (cadena == cadena.toLowerCase()) { resultado += " está formada por minúsculas"; }
    else { resultado += " está formada por una mezcla de mayúsculas y minúsculas"; }
    
    return resultado;
}

alert(mayusMinus("-ESTE TEXTO ES TODO MAYÚSCULAS-"));
alert(mayusMinus("-este texto es todo minúsculas-"));
alert(mayusMinus("-Este Texto Contiene Mayúsculas Y Minúsculas-"));