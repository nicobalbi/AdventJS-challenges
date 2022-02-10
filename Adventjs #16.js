// Lara Eloft ha encontrado unos restos élficos en una cueva, cerca del Círculo Polar Ártico, a 8 km al norte de Rovaniemi.

// Ahora se encuentra descifrando unas misteriosas cartas que contiene información sobre unos números que le puede hacer llegar al próximo objetivo.

// Lara tiene un documento que contiene una serie de números que pueden ser usados para descifrarlos:

// Símbolo       Valor
//   .             1
//   ,             5
//   :             10
//   ;             50
//   !             100
// Lara, además, ha notado una cosa. Los símbolos se restan si están inmediatamente a la izquierda de otro mayor. 😱

// Tenemos que crear una función que nos pasa una cadena de texto con símbolos y tenemos que transformarlo al número correcto. ¡Ojo! Si encuentras un símbolo que no entendemos, mejor que devolvamos un NaN:

console.log(decodeNumbers('...')) // 3
console.log(decodeNumbers('.,')) // 4 (5 - 1)
console.log(decodeNumbers(',.')) // 6 (5 + 1)
console.log(decodeNumbers(',...')) // 8 (5 + 3)
console.log(decodeNumbers('.........!')) // 107 (1 + 1 + 1 + 1 + 1 + 1 + 1 - 1 + 100)
console.log(decodeNumbers('.;')) // 49 (50 - 1)
console.log(decodeNumbers('..,')) // 5 (-1 + 1 + 5)
console.log(decodeNumbers('..,!')) // 95 (1 - 1 - 5 + 100)
console.log(decodeNumbers('.;!')) // 49 (-1 -50 + 100)
console.log(decodeNumbers('!!!')) // 300
console.log(decodeNumbers(';!')) // 50
console.log(decodeNumbers(';.W')) // NaN
console.log(decodeNumbers(':'))

function decodeNumbers(symbols) {
    // ¡No olvides compartir tu solución en redes!
    var cod = ['.', ',', ':', ';', '!']
    var num = [1, 5, 10, 50, 100]
    if (symbols.length === 1) {
        for (var k = 0; k < cod.length; k++) {
            if (symbols[0] === cod[k]) return num[k]
        }
        return NaN
    }
    var suma = 0
    for (var i = 0; i < symbols.length - 1; i++) {
        var actual = 0
        var sig = 0
        for (var j = 0; j < cod.length; j++) {
            if (symbols[i] === cod[j]) {
                actual = num[j]
            }
            if (symbols[i + 1] === cod[j]) {
                sig = num[j]
            }
        }
        if (actual === 0 || sig === 0) return NaN
        if (actual < sig) {
            suma -= actual
        } else {
            suma += actual
        }
        if (i === symbols.length - 2) suma += sig
    }
     return suma
   }