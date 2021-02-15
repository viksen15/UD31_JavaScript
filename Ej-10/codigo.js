function palindromo(cadena) {
    var resultado = "La cadena " + cadena;

    // CADENA A MINÚSCULAS
  var cadenaOriginal = cadena.toLowerCase();

  // CONVERTIR LA CADENA EN ARRAY
  var letrasEspacios = cadenaOriginal.split("");

  // ELIMINAR ESPACIOS EN BLANCO
  var cadenaSinEspacios = "";
  for(i in letrasEspacios) {
    if(letrasEspacios[i] != " ") {
      cadenaSinEspacios += letrasEspacios[i];
    }
  }

  var letras = cadenaSinEspacios.split("");
  var letrasReves = cadenaSinEspacios.split("").reverse();

        // SON IGUALES = ES UN PALÍNDROMO
  var iguales = true;
  for(i in letras) {
    if(letras[i] == letrasReves[i]) {
    }
    else {
      // NO SON IGUALES = NO ES UN PALÍNDROMO
      iguales = false;
    }
  }

  if(iguales) {
    resultado += " es un palíndromo";
  }
  else {
    resultado += " no es un palíndromo";
  }

  return resultado;
}

alert(palindromo("-LA RUTA NOS APORTO OTRO PASO NATURAL-"));
alert(palindromo("-ESTA FRASE ES UNA FRASE CUALQUIERA-"));
