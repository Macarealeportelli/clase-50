//EJERCICIO 2

// Agregar la etiqueta script
// Seleccionar el elemento body
// Crear un elemento título h1
// Agregarle al h1 el texto 'Vestibulum suscipit nulla quis orci'
// Crear un elemento párrafo
// Agregarle al p el texto 'Donec venenatis vulputate lorem. Maecenas vestibulum mollis diam.'
// Insertar el elemento título dentro del elemento body
// Insertar el elemento párrado dentro del elemento body

const body = document.getElementsByTagName("body")
console.log(body)

const h1 = document.createElement("h1")
h1.textContent = "Vestibulum suscipit nulla quis orci"
document.body.appendChild(h1)

const parrafo = document.createElement("p")
parrafo.textContent = 'Donec venenatis vulputate lorem. Maecenas vestibulum mollis diam.'
document.body.appendChild(parrafo)