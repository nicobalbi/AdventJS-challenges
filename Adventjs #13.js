// ¡Hay demasiados regalos 🎁! Y envolverlos es una locura...

// Vamos a crear una función que pasándole un array de regalos, nos devuelva otro array pero donde todos los regalos han sido envueltos con asteriscos tanto por arriba como por los lados.

// Sólo tienes que tener en cuenta unas cosillas ✌️:

// Si el array está vacío, devuelve un array vacío
// Los regalos son emojis 🎁... por lo que tenlo en cuenta a la hora de contar su longitud...
// Por suerte, cada posición del array siempre tiene la misma longitud...

console.log(wrapGifts(["📷", "⚽️"]))
/* Resultado:
[ '****',
  '*📷*',
  '*⚽️*',
  '****'
]
*/

console.log(wrapGifts(["🏈🎸", "🎮🧸"]))
/* Resultado:
[ '******',
  '*🏈🎸*',
  '*🎮🧸*',
  '******'
]
*/

console.log(wrapGifts(["📷"]))
/* Resultado:
[ '****',
  '*📷*',
  '****'
]
*/

function wrapGifts(gifts) {
    // ¡No olvides compartir tu solución en redes!
    var arr = []
    var tapa = ''
    for (var i = 0; i < gifts[0].length + 2; i++) {
        tapa += '*' 
    }
    arr.push(tapa)
    for (var j = 0; j < gifts.length; j++) {
        arr.push('*' + gifts[j] + '*')
    }
    arr.push(tapa)
    return arr
  }

