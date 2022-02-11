// En la clase de español del pueblo de Laponia han creado un reto a la hora de escribir la carta a Papa Noél 🎅: la carta ✉️ tiene que contener todas las letras del alfabeto.

// Desde el taller de Santa 🎅 se han enterado y quieren escribir una función que les diga si realmente la cadena de texto que les llega tiene, efectivamente, todas las letras del abecedario español 🔎.

// Hay que tener en cuenta las letras en mayúscula y que las letras con acento y diéresis se consideran iguales. Por ejemplo la á y la ä cuenta como una a.

// Vamos a ver unos ejemplos de frases:

console.log(pangram('Extraño pan de col y kiwi se quemó bajo fugaz vaho')) // true
console.log(pangram('Jovencillo emponzoñado y con walkman: ¡qué figurota exhibes!')) // true

console.log(pangram('Esto es una frase larga pero no tiene todas las letras del abecedario')) // false
console.log(pangram('De la a a la z, nos faltan letras')) // false

// Y ya que estás... ¿Cuál es tu pangrama favorito? ¡Compártelo en nuestra comunidad de Discord!

function pangram(letter) {
    // ¡No olvides compartir tu solución en redes!
    var abc = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'ñ', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    var bin = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    for (var i = 0; i < letter.length; i++) {
        if (letter[i].toLowerCase() === 'ñ') {
            bin[14] = 1
        } else {
            for (var j = 0; j < abc.length; j++) {
                if (letter[i].toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "") === abc[j]) {
                    bin[j] = 1
                    break
                }
            }
        }
    }
    for (var k = 0; k < bin.length; k++) {
        if (bin[k] === 0) return false
    }
    return true
}

const str = "Crèmeáñ Brulée"
console.log(str.normalize("NFD").replace(/[\u0300-\u036f]/g, ""))