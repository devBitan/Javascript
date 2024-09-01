// Variables
// let nombreVariable = valor;
    // let nombreVariable = valor
    // let nombreVariable = valor esto no se puede porque ya existe esa variable
    // unicamente se crea en memoria a partir de a linea que la defino
// const nombreVariable = valor; 
        // -el valor nos se puede cambiar 
// var nombreVariable = valor;
    // var nombreVariable = valor
    // var nombreVariable = valor se destruye la primera y se crea otra con el mismo nombre
    // var desde la primera linea gaarda un espacio de memoria pero vacio 

// modificar el valor de la variabe
// nombreVariable = nuevo valor;

// Varriables dentro de estructuras
// let edad
// if (nombreVariable) {
//     let edad // la variable es tottalmente local
//     var algo // esta si se crea desde la liena 1
// }

// let variableGlobal;
// // Funciones 
// function nombreFuncion() {
//     //agrupo diferentes acciones s
//     // solo se ejecutan cuando llamo a la función
//     console.log("funcion")
//     var edad
//     let edad // en las funciones var solo tiene scope local 
//     const edad=1
//     variableGlobal // accedo a una variable pero global
//     variablesinesxistir // como no la encuenta y la crea de forma glogal
// }
// console.log(typeof edad)
// tipos e valor
// string
    // let nombre = "juan"
    // let nombre = 'juan'
// number
    // let numero = 1
    // let numero = 1.5
    // let numero = 0b1010
// boolean
    // let verdadero = true
    // let falso = false
 
// null
    // let variable = null
    // let variable = undefined
// undefined
    // let variable
    // let variable = variable // undefined
    // let variable = variable + 1 // undefined + 1 = NaN

// object
    // let persona = {
    //     nombre: "juan",
    //     apellido: "perez",
    //     edad: 30
    // }
    // let persona = new Object({
    //     nombre: "juan",
    //     apellido: "perez",
    //     edad: 30
    // })
    // persona.apellido = "gonzalez"
    // persona["apellido"] = "gonzalez"
    // delete persona.apellido
    // persona = null
    // let persona = undefined
// array
    // let arreglo = [1, 2, 3, 4, 5]
    // let arreglo = Array(1, 2, 3, 4, 5)
    //  acceder console.log(arreglo[1]) indexacion 
    // arreglo.push(6)
    // arreglo.pop()
    // arreglo.shift()
    // arreglo.unshift(0)
    // arreglo.splice(1, 2)
    // arreglo.sort()
    // arreglo.reverse()
    // arreglo = null
    // let arreglo = undefined
// function
    // function saludar(nombre) {
    //     console.log(`hola ${nombre}`)
    // }
    // saludar("juan")
    // let saludar = function(nombre) {
    //     console.log(`hola ${nombre}`)
    // }
    // saludar("juan")
// arrow function
    // let saludar = (nombre) => {
    //     console.log(`hola ${nombre}`)
    // }
    // saludar("juan")
    // let saludar = nombre => console.log(`hola ${nombre}`)
    // saludar("juan")
    // let saludar = () => console.log("hola")
    // saludar()

// spread operator
    // let persona = {
    //     nombre: "juan",
    //     apellido: "perez"
    // }
    // let nuevoObjeto = {...persona, edad: 30}
    // console.log(nuevoObjeto)
    // let arreglo = [1, 2, 3]
    // let nuevoArreglo = [...arreglo, 4, 5]
    // console.log(nuevoArreglo)


// template literals
    // let nombre = "juan"
    // let apellido = "perez"
    // let saludo = `hola ${nombre} ${apellido}`
    // console.log(saludo)
    // let saludo = `hola \n ${nombre} ${apellido}`
    // console.log(saludo)
    // let saludo = `hola ${nombre.toUpperCase()} ${apellido.toLowerCase()}`
    // console.log(saludo)
    // let saludo = `hola ${nombre} ${apellido} ${1 + 2}`
    // console.log(saludo)
    // let saludo = `hola ${nombre} ${apellido} ${(1 + 2) * 3}`
    // console.log(saludo)
// destructuring
    // let persona = {
    //     nombre: "juan",
    //     apellido: "perez",
    //     edad: 30
    // }
    // let { nombre, apellido } = persona
    // console.log(nombre)
    // console.log(apellido)
    // let { nombre: nombrePersona, apellido: apellidoPersona } = persona
    // console.log(nombrePersona)
    // console.log(apellidoPersona)
    // let [primerElemento, , tercerElemento] = arreglo
    // console.log(primerElemento)
    // console.log(tercerElemento)
// async/await
    // async function saludar() {
    //     console.log("hola")
    //     await new Promise(resolve => setTimeout(resolve, 1000))
    //     console.log("mundo")
    // }
    // saludar()
    // async function saludar() {
    //     try {
    //         console.log("hola")
    //         await new Promise((resolve, reject) => setTimeout(() => reject(new Error("error")), 1000))
    //         console.log("mundo")
    //     } catch (error) {
    //         console.error(error)
    //     }
    // }
    // saludar()
// spread operator en argumentos
    // function saludar(nombre, ...despedida) {
    //     console.log(`hola ${nombre}`)
    //     console.log(...despedida)
    // }
    // saludar("juan", "perez", "amigo")
    // saludar("juan")
    // saludar()
// rest operator en argumentos
    // function saludar(...despedidas) {
    //     console.log(`hola ${despedidas.join(", ")}`)
    // }
    // saludar("juan", "perez", "amigo")
    // saludar("juan")
    // saludar()
    // rest operator en objetos
    // let persona = {
    //     nombre: "juan",
    //     apellido: "perez",
    //     edad: 30
    // }
    // function saludar({ nombre, apellido }) {
    //     console.log(`hola ${nombre} ${apellido}`)
    // }
    // saludar(persona)
    // spread operator en objetos
    // let persona = {
    //     nombre: "juan",
    //     apellido: "perez",
    //     edad: 30
    // }
    // let nuevoObjeto = { ...persona, nombre: "pedro" }
    // console.log(nuevoObjeto)
    // let nuevoObjeto = { ...persona, edad: 35 }
    // console.log(nuevoObjeto)
// operadores bitwise
    // let numero = 10
    // console.log(numero.toString(2)) // 1010
    // console.log(~numero) // -1101
    // console.log(numero & 3) // 2
    // console.log(numero | 3) // 11
    // console.log(numero ^ 3) // 9
    // console.log(numero << 1) // 20
    // console.log(numero >> 1) // 5
    // console.log(numero >>> 1) // 5
    // console.log(numero.toString(2).padStart(5, '0')) // 01010
    // console.log(numero.toString(2).padEnd(5, '0')) // 10100
    // console.log(numero.toString(2).padStart(5, '1')) // 11010
    // console.log(numero.toString(2).padEnd(5, '1')) // 11010
// operadores de comparacion
    // console.log(1 === 1) // true
    // console.log(1 === "1") // false
    // console.log(1 !== 1) // false
    // console.log(1 !== "1") // true
    // console.log(1 < 2) // true
    // console.log(1 > 2) // false
    // console.log(1 <= 2) // true
    // console.log(1 >= 2) // false
    // console.log(1 < "2") // true
    // console.log(1 > "2") // false
    // console.log(1 <= "2") // true
    // console.log(1 >= "2") // false
    // console.log(1 < true) // true
    // console.log(1 > true) // false
    // console.log(1 <= true) // true
    // console.log(1 >= true) // true
    // console.log(1 < false) // false
    // console.log(1 > false) // true
    // console.log(1 <= false) // false
    // console.log(1 >= false) // false
    // console.log(1 < null) // false
    // console.log(1 > null) // true
    // console
    