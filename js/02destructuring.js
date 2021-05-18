console.log("### Destructuring ###");

// Asignación por Destructuring: Nos permite tomar los valores de las ropiedades de un objeto de forma directa, utilizando el mismo nombre de la propiedad

let carro = {
  marca: "Ferrari",
  modelo: 2020,
  color: "Rojo"
}

// let propiedades = "marca"; 
const {
  marca,
  modelo,
  color
} = carro;

console.log("carro", color);