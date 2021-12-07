// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  var objetoMatriz = Object.entries(objeto);
  return objetoMatriz;  
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  var counter = {};

  for (let i = 0; i < string.length; i++){
      let count = 0;
      for (let a = 0; a < string.length; a++){
           if (string[i] === string[a]){
              count++;
          }
      }
      counter[string[i]] = count; 
  }
  return counter;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var upper = s.toUpperCase();
  var upps = [];
  var lows = [];

  for (let i = 0; i < s.length; i++){
      if (s[i] === upper[i]){
          upps.push(s[i]);
      }else{
          lows.push(s[i]);
      }
  }
  var newWord = upps.join('') + lows.join('');
  return newWord;
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
    var strCopy = str.split(' ');
    var newphrase = [];
    
    for (let i = 0; i < strCopy.length;i++){
        let segment = [];
        for (let a = 0; a < strCopy[i].length;a++){
            segment.unshift(strCopy[i][a]);
        }
        newphrase.push(segment);
    }
    for (let i = 0; i < newphrase.length;i++){
        newphrase[i] = newphrase[i].join('');
    }
    return newphrase.join(' ');
}


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  var inverse = [];
  var stringNumber = numero.toString();

  for(let i = 0; i < stringNumber.length; i++){
      inverse.unshift(stringNumber[i]);
  }

  inverse = inverse.join('');

  if (inverse === stringNumber){
      return 'Es capicua';
  }else{
      return 'No es capicua';
  }
}

function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  var array = Array.from(cadena);
  var newArray = []
  for(let i = 0; i < array.length; i++){
      if (array[i] !== 'a' && array[i] !== 'b' && array[i] !== 'c'){
        newArray.push(array[i]);
      }else{
        array.splice(i, 1, ' ')
      }
  }
  return newArray.join('');
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  var asc = arr.sort((a,b) => a.length - b.length);
  return asc;
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  var nuevo = [];
  if (arreglo1.length >= arreglo2.length){
      for (let i = 0; i < arreglo1.length; i++){
          if (arreglo2.includes(arreglo1[i])){
              nuevo.push(arreglo1[i]);
          }
      }
  }else{
      for(let i = 0; i < arreglo2.length; i++){
          if (arreglo1.includes(arreglo2[i])){
              nuevo.push(arreglo2[i]);
          }
      }
  }
  return nuevo;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports={
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};