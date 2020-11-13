//EJERCICIO 1

// Agregar la etiqueta script
// Seleccionar el elemento ul
// Mostrar en la consola los elemento hijos del elemento ul
// Seleccionar el 2 elemento hijo y guardarlo en una variable
// agregar la clase verde
// Seleccionar el 4 elemento hijo y guardarlo en una variable
// agregar la clase rojo
// Utilizar el hijo 2 o 4 para mostrar en consola quien es su elemento padre
// Utilizando uno de los hijos obtener una referencia al elemento padre y agregarle la clase naranja

const lista = document.getElementById("lista")

console.log(lista.children) //muestra los hijos de lista en consola

const elemento2 = lista.children[1]

console.log(elemento2) //muestra el segundo elemento de la lista
elemento2.classList.add("verde") //agrego clase verde a elemento2

const elemento4 = lista.children[3]
console.log(elemento4)
elemento4.classList.add("rojo")

console.log(elemento4.parentElement)

elemento2.parentElement.classList.add("naranja")

//