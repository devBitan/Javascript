// Operadores y expreciones

// = operador de asignacion
// asignación compuesta

let a = 5;
a += 3; // a = a + 3
// primero realiza la ejecuón aritmetica y luego hace la asignaicón 
console.log(a); // 8

let caja = document.querySelector(".container")
console.log(caja)

caja.innerHTML += "hola" // diferente caja.innerHTML = "hola"

// Operadores aritmeticos

let x = 5;
let y = 3;

console.log(x + y); 
console.log(x - y); 
console.log(x * y); 
console.log(x / y); //division
console.log(x % y); // modulo

let num1 = 6
let num2 = "3"
console.log(num1 / num2) //2
console.log(num1 % num2) // 0 --util a nivel de codigo para temas de pares de impares

// Operadores de comparación
// == - igual a - compara el valor
 // === - estrictamente igual a - compara el valor y el tipo
 // != - diferente de - compara el valor
 // !== - estrictamente diferente de - compara el valor y el tipo
 // > - mayor que - compara el valor
 // < - menor que - compara el valor
 // >= - mayor o igual que - compara el valor
 // <= - menor o igual que - compara el valor
 //  ! - operador de negación lógica - solo se aplica a valores booleanos

 let bandera = false
  if(!bandera) //entra en false, pero como lo niego es true, entonces entra en verdadero
  {
    console.log("verdadero")
  } else {
    console.log("falso")
  }

// ||  &
let var1 = true
let var2 = false

console.log(var1 || var2) //true

console.log(var1 && var2) //false

// Operador ternario

let edad2 = 18

let mensaje = edad2 >= 18 ? "puedes pasar" : "no puedes pasar" //evalua dos casos 
console.log(mensaje)

//  Ejercicio
// Valor a modificar
let nota = 10;
(nota<0 || nota>10)
? dibujar("tu ta loco mano")


function dibujar(parametro){
    (parametro >=5 && parametro <=10) 
    ? document.querySelector(".resultado1").innerHTML = `aprobado`
    : document.querySelector(".resultado1").innerHTML = `has supendido`
    document.querySelector(".resultado2").innerHTML 

}

// mostrar en un div si es de 5 a 10 "has aprobado" (color green) o si no "has suspendido" (color red)
// mostrar un div, 9 en adelante excelente, de 7 a 9 notable, de 5 a 7 aprobado, menos de 5 suspendido, y menos de 0 o mayor a 10 "tu ta loco mano"

