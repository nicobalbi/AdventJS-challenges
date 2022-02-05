// Considera una lista/array de ovejas. Cada oveja tiene un nombre y un color. 
// Haz una función que devuelva una lista con todas las ovejas que sean de color rojo y que además 
// su nombre contenga tanto las letras n Y a, sin importar el orden, las mayúsculas o espacios.

const ovejas = [
    { name: 'Noa', color: 'azul' },
    { name: 'Euge', color: 'rojo' },
    { name: 'Navidad', color: 'rojo' },
    { name: 'Ki Na Ma', color: 'rojo'},
    { name: 'AAAAAaaaaa', color: 'rojo' },
    { name: 'Nnnnnnnn', color: 'rojo'}
  ]

  const ovejasFiltradas = contarOvejas(ovejas)

  console.log(ovejasFiltradas)
  
  // [{ name: 'Navidad', color: 'rojo' },
  //  { name: 'Ki Na Ma', color: 'rojo' }]

function contarOvejas(ovejas) {
    // aquí tu magia
    var arr = []
    for (var i = 0; i < ovejas.length; i++) {
        var cumple = [false, false]
        for (var j = 0; j < ovejas[i].name.length; j++) {
            if (ovejas[i].name[j] === 'n' || ovejas[i].name[j] === 'N') {
                cumple[0] = true
            } else if (ovejas[i].name[j] == 'a' || ovejas[i].name[j] == 'A') {
                cumple[1] = true
            }
        }
        if (ovejas[i].color === 'rojo' && cumple[0] === true && cumple[1] === true) {           
            arr.push(ovejas[i])
        }
    }
    return arr
  }

