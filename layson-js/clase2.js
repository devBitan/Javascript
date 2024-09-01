// selectores js ECMA6
// Interpolación de datos

let nombre1 = "Layson";
let nombre2 = 'Layson';
let nombre3 = `Layson`; // template literals

let edad = 27
let actual = new Date().getFullYear();
console.log(actual) //

let resultado = "mi nombre es" + nombre1;
let resultado2 = `mi nombre es ${nombre2}`

let resultado3 = `mi nombre es ${nombre3} y mi edad es ${edad}`
console.log(resultado3);

function calcularEdad() {
    // return 27;
    return actual - edad
}
let resultado4 = `mi fecha de nacimiento es ${calcularEdad()}`
console.log(resultado4);

// Selectores

document.querySelector('body').innerHTML = `
 <div>hola layson</div>
 <div>como vas</div>
`

// ejercicio
// recrear la imagen de wtp

let usuario = "Layson";
let productoComprado=1; //para manejar indexación en arreglos
const DESCUENTO = 0.1;
let precioDescuento;
const PRODUCTOS = [
    {
        producto: "pantalon",
        precio:10,
        talla:"m",
        imagen: "https://picsum.photos/200"
    },
    {
        producto: "gorra",
        precio:22,
        talla:"l",
        imagen: "https://picsum.photos/200/300"

    }
]

// CalcularDescuento
// precioFinal

// iteración de objetos y arreglos
//                      0   1       2       3
arregloDeNombres = ["pepe","pipa","alex","harlem"] 
arregloDeNombres[3]
objetoDeFactura = {
    cliente: "Layson",
    total: 1000
}
objetoDeFactura.total
