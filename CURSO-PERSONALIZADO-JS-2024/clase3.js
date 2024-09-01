// Operadores y expreciones - peligros

// Operador de asignacion

let a = 5;
a = a + 2; // a = 7
// asignar una ruta
let caja = document.querySelector(".container")
// asignación compuesta
let b = 5;
b += 2; // b = 7 primero realiza la suma y luego la asignación
caja.innerHTML += a

// Operadores ariteticos
// + - * / % - modulo de una division - el resto - siempre 0 cuando es un numero par 
//     - con la suma concatena 
//      - los demas realizan conversión automatica 

// ++ --

let x = 5;
x++; // x = 6
x--; // x = 5

// Operadores de comparación 
// == - igual a - compara el valor
 // === - estrictamente igual a - compara el valor y el tipo
 // != - diferente de - compara el valor
 // !== - estrictamente diferente de - compara el valor y el tipo
 // > - mayor que - compara el valor
 // < - menor que - compara el valor
 // >= - mayor o igual que - compara el valor
 // <= - menor o igual que - compara el valor
 //  ! - operador de negación lógica - solo se aplica a valores booleanos, si se realiza con otros valores hace una conversión 0 siendo false y valor existente siendo true

// Operadores ternarios (son expresiones)

let edad = 18;
let mensaje = edad >= 18? "Puedes votar" : "No puedes votar";
// Si el resultado es true o false
console.log(mensaje)

((true || edad >=18) && edad ===1) // ley de presedencia * y / tienen mas presedencia que la suma y la resta y para indicar la operacion que queremos hacer se pone entre parentesis (1+2)*3  
? "soy juan"
 : "no soy juan"



//  Ejercicio
// Valor a modificar
let nota = 10;

// mostrar en un div si es de 5 a 10 "has aprobado" (color green) o si no "has suspendido" (color red)
// mostrar un div 9 en adelante excelente, de 7 a 9 notable, de 5 a 7 aprobado, menos de 5 suspendido, y menos de 0 o mayor a 10 "tu ta loco mano"
