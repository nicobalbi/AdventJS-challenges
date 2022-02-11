// Con motivo de las fechas más bonitas del año, en Platzi han lanzado una promoción muy especial porque la educación es un regalo 🎁 para siempre.

// En Platzi tienen más de 800 cursos 📚 pero, claro, nuestro tiempo es limitado. Así que vamos a optimizar nuestro tiempo disponible para completar dos cursos usando el máximo número de horas disponible.

// Tenemos que crear una función que recibe dos parámetros. El primero es el número de horas que tenemos disponible ⏳ y el segundo es un array donde cada índice es un curso y el valor el tiempo que se tarda en completar.

// Tenemos claro que queremos hacer dos cursos así que la función debe devolver un array con el índice de los dos cursos que vamos a poder completar con el tiempo disponible proporcionado y usando el máximo tiempo disponible. Si no nos da tiempo, devolvemos null

// Vamos a ver unos ejemplos:

console.log(learn(10, [2, 3, 8, 1, 4])) // [0, 2] -> con 10 horas disponibles lo mejor es que completemos los cursos en el índice 0 y 2.

console.log(learn(15, [2, 10, 4, 1])) // [1, 2] -> Los cursos en [1, 2] son 14 horas, es la mejor opción.

console.log(learn(25, [10, 15, 20, 5])) // [0, 1] -> los cursos [0, 1] y [2, 3] completan exactamente con 25 horas pero siempre devolvemos el primero que encontremos

console.log(learn(8, [8, 2, 1])) // [1, 2] -> para hacer dos cursos, no podemos hacer el de 8 horas, así que devolvemos el de 1 y 2.

console.log(learn(8, [8, 2, 1, 4, 3])) // [3, 4] -> usamos el máximo tiempo disponible así que [3, 4] usa 7 horas y el [1, 2] sólo usaría 3 horas.

console.log(learn(4, [10, 14, 20])) // null -> no nos da tiempo a hacer dos cursos

console.log(learn(5, [5, 5, 5])) // null -> no nos da tiempo a hacer dos cursos

// Mirando todo el tema de Platzi, además nos hemos dado cuenta que tienen un descuento especial para Navidad. ¿No sabes qué regalar? Regala conocimiento 🎓.

function learn(time, courses) {
    // ¡No olvides compartir tu solución en redes!
    if (courses.length < 2) return null
    var max = 0
    for (var i = 0; i < courses.length - 1; i++) {
        for (var j = i + 1; j < courses.length; j++) {
            if (courses[i] + courses[j] > max && courses[i] + courses[j] <= time) {
                max = courses[i] + courses[j]
                var arr = [i, j]
            }
        }
    }
    if (max === 0) {
        return null
    } else {
        return arr
    }
}