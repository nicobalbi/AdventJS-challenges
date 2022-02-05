// El Grinch está abriendo las cartas que iban a Santa Claus y las está dejando hechas un lío. 😱

// Las cartas son una cadena de texto que incluyen regalos y paréntesis ().

// Para saber si una carta es válida ✅, debes comprobar que los paréntesis cierran correctamente y que, además, no vayan vacíos.

// ¡Pero ojo! Porque el Grinch ha dejado llaves { y corchetes [ dentro de los paréntesis que hacen que no sean válidas. Por suerte sólo los ha dejado en medio de los paréntesis...

// Ejemplos:

// "bici coche (balón) bici coche peluche" // -> ✅
// "(muñeca) consola bici" // ✅

// "bici coche (balón bici coche" // -> ❌
// "peluche (bici [coche) bici coche balón" // -> ❌
// "(peluche {) bici" // -> ❌
// "() bici" // ❌
      
// Crea una función que pasándole el texto de la carta, devuelva true si es válida y false si no lo es. ¡Y acaba con la travesura del Grinch!

console.log(isValid("bici coche (balón) bici coche peluche"))
console.log(isValid("(muñeca) consola bici"))

console.log(isValid("bici coche (balón bici coche"))
console.log(isValid("peluche (bici [coche) bici coche balón"))
console.log(isValid("(peluche {) bici"))
console.log(isValid("() bici"))
console.log(isValid("(()) bici"))
console.log(isValid(")bici( casa play"))

function isValid(letter) {
    // ¡No dejes que el Grinch gane!
    var posParA = []
    var posParC = []
    for (var i = 0; i < letter.length; i++) {
        if (letter[i] === '{' || letter[i] === '[') {
            return false
        } else if (letter[i] === '(') {
            posParA.push(i)
        } else if (letter[i] === ')') {
            posParC.push(i)
        }
    }
    if (posParA.length !== posParC.length) {
        return false
    }   
    for (var j = 0; j < posParA.length; j++) {
        if (posParA[j] >= posParC[j] - 1) {
            return false
        }
    }
    for (var j = 0; j < posParA.length; j++) {
        for (var k = 0; k < posParC.length; k++) {
            if (posParA[j] === posParC[k] - 1) {
                return false
            }
        }
    }
    return true
}