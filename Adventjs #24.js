// El abuelo 👴 dice que ve todos los árboles de navidad iguales... La abuela 👵, en cambio, piensa que no. Que todos los árboles de navidad son distintos...

// Vamos a hacer una función que nos diga si dos árboles de navidad son iguales. Para ello, vamos a comparar los árboles que ya creamos en el reto 22.

// Tenemos que ver si ambos árboles tienen la misma estructura y los mismos valores en todas las ramas. Aquí tienes unos ejemplos:

const tree = {
  value: 1,
  left: { value: 2, left: null, right: null },
  right: { value: 3, left: null, right: null }
}

console.log(checkIsSameTree(tree, tree)) // true

const tree2 = {
  value: 1,
  left: { value: 3, left: { value: 2, left: null, right: null }, right: null },
  right: { value: 5, left: null, right: { value: 4, left: null, right: null } }
}

console.log(checkIsSameTree(tree, tree2)) // false
console.log(checkIsSameTree(tree2, tree2)) // true

// El cuñado 🦹‍♂️, que se las sabe todas, me ha dicho que tenga cuidado porque el truco del JSON.stringify puede no funcionar... ya que los árboles pueden ser el mismo pero el orden de representación de las ramas izquierda y derecha puede ser inversa...

function checkIsSameTree(treeA, treeB) {
    // ¡No olvides compartir tu solución en redes!
    var keysA = 0
    for (var keyA in treeA) if (treeA.hasOwnProperty(keyA)) keysA++ 
    var keysB = 0
    for (var keyB in treeB) if (treeB.hasOwnProperty(keyB)) keysB++ 
    if (keysA !== keysB) return false
    for (var key in treeA) {
        if (treeA.hasOwnProperty(key) && !treeB.hasOwnProperty(key)) return false
        if (treeA.hasOwnProperty(key) && treeB.hasOwnProperty(key)) {
            if (typeof treeA[key] !== typeof treeB[key]) return false
            else if (typeof treeA[key] === 'object') {
                if (!checkIsSameTree(treeA[key], treeB[key])) return false
            } else if (treeA[key] !== treeB[key]) return false
        } 
    }
    return true
}




console.log(JSON.stringify(tree))
console.log(JSON.stringify(tree2))