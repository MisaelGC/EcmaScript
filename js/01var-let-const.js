console.log("### VAR ###");

/*Declaración con VAR: Se utlizan para declara variables globales y pueden ser transformado su valor en cualquier momento*/
var nombre_var = "Misael";

if (nombre_var == "Misael") {
  var edad_var = 30;
  nombre_var = "Uriel";
}

console.log("nombre_var", nombre_var)
console.log("edad_var", edad_var)

console.log("### LET ###");

/*Declaración LET: Se utiliza para declarar variables en contexto especificos y puede cambiar su valor en dicho contexto, se destruye fuera del contexto para ahorra memoria en el navegador*/
let nombre_let = "Misael";

if (nombre_let == "Misael") {
  nombre_let = "Uriel";
  console.log("nombre_let", nombre_let)

  edad_let = 30;
  console.log("edad_let", edad_let)
}

console.log("### CONST ###")

/*Declaración CONST: Se utiliza para declarar variables en contexto especificos y no pueden cambiar su valor en dicho contexto y se destruyen por fuera del contexto por lo tanto ahorra memoria*/
const nombre_const = "Misael";

if (nombre_const == "Misael") {
  const nombre_const = "Uriel";
  console.log("nombre_const", nombre_const)
}

console.log("nombre_const", nombre_const)