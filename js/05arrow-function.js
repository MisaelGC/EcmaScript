console.log("### Arrow Function ###")

//  Arrow Function: Son funciones anónimas y se deben guardar en variables Const o Let  para no ser modificadas en el futuro

// function holaMundo() {
//   console.log("Hola Mundo")
// }
// holaMundo();

// Arrow Function sin parámetros
const holaMundo = () => {
  console.log("Hola Mundo")
}
holaMundo();

// Arrow Functiom con parámetros
const holaMundoParam = mensaje => {
  console.log(mensaje)
}
holaMundoParam("Hola Mundo...");

// Arrow Functiom con varios parámetros

const holaMundoParams = (mensaje1, mensaje2) => {
  console.log(mensaje1, mensaje2)
}
holaMundoParams("Hola Mundo...", "Cómo están?");