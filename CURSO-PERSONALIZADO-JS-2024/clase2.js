// selectores js, ECMASCRIPT 6
// interpolacion 

// Almacenat texto
let nombre1 = "layson";
let nombre2 = 'layson';
let nombre3 = `layson`; // ahora esto es importante cuando quiero combinar texto con variables o ejecuciones lógicas (funciones)

let resultado = "Mi nombre es " + nombre1; //sumando un string con un texto
let resultado2 = `Mi nombre es ${nombre2}` //para indicarle a js cual es el contenido de variables o 

let edad = 27;
let actual = new Date().getFullYear(); //creo un objeto de tipo Date y con el el método de esa clase getFullYear obtento la fecha 
console.log(actual); //
function calcularNacimiento() {
    return actual - edad;
}
let resultado3 = `mi edad es ${calcularNacimiento()}`

//ejemplo con parametros --ejercicio como lo haria layson y zapata

// function calcularNacimiento(miEdad){
//     return actual - miEdad
// }

// let resultado3 = `mi edad es ${calcularNacimiento(edad)}`

// Los selecctores me permiten acceder a ewtiquetas html desde js
document.querySelector('body') // toma el primero que encuente, como solo tenemos un body todo bien
document.querySelector('body').innerHTML = `
    <div class="card" style="width: 18rem;">
        <img src="..." class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
    </div>
`

//Ejercicio Layson

let usuario = "Juan"
let productoComprado = 1;
const DESCUENTO = 0.1;
let precioDescuento; //analizar esta variabel que puede ser o que podria hacer 
const PRODUCTOS = [
    {
        producto: "Pantalon",
        precio: 10,
        talla: "m",
        imagen: "lorem.picsum"
    }, {
        producto: "Zapatos",
        precio: 20,
        talla: "42",
        imagen: "lorem.picsum"
    }
]

function calcularDescuento() {
    precioDescuento = PRODUCTOS[productoComprado].precio * DESCUENTO;
    return precioDescuento
}
function precioFinal() {
    return PRODUCTOS[productoComprado].precio - calcularDescuento();
}

