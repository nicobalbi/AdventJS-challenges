function canMouseEat(direction, game) {
    // ¡Gracias por jugar a AdventJS 2021! 🤗
    // ¡Nos vemos el año que viene! 👋
    // Por favor, comparte en las redes qué te ha parecido! 🚀
  
    var posC = []
    for (var i = 0; i < game.length; i++) {
      for (var j = 0; j < game[i].length; j++) {
        if (game[i][j] === 'm') {
          var posR = [i,j]
        } else if (game[i][j] === '*') {
          posC.push([i,j])
        }
      }
    }
  
    var newPos = []
    switch (direction) {
      case 'up':
        if (posR[0] === 0) {
          newPos = posR
        } else {
          newPos = [posR[0]-1,posR[1]]
        }
        break
      case 'down':
        if (posR[0] === game.length - 1) {
          newPos = posR
        } else {
          newPos = [posR[0]+1,posR[1]]
        }
        break
      case 'right':
        if (posR[1] === game[0].length - 1) {
          newPos = posR
        } else {
          newPos = [posR[0],posR[1]+1]
        }
        break
      case 'left':
        if (posR[1] === 0) {
          newPos = posR
        } else {
          newPos = [posR[0],posR[1]-1]
        }
        break
      default:
        return false
    }
  
    for (var k = 0; k < posC.length; k++) {
      if (newPos[0] === posC[k][0] && newPos[1] === posC[k][1]) {
        return true
      }
    }
    return false
}

const room = [
    [' ', ' ', ' '],
    [' ', ' ', 'm'],
    [' ', ' ', '*']
  ]

  const room2 = [
    ['*', ' ', ' ', ' '],
    [' ', 'm', '*', ' '],
    [' ', ' ', ' ', ' '],
    [' ', ' ', ' ', '*']
  ]

  console.log(canMouseEat('up', room))
  console.log(canMouseEat('down', room))
  console.log(canMouseEat('right', room))
  console.log(canMouseEat('left', room))

  console.log(canMouseEat('up', room2))
  console.log(canMouseEat('down', room2))
  console.log(canMouseEat('right', room2))
  console.log(canMouseEat('left', room2))

