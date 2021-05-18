console.log("### If Ternario ###")

// IF TERNARIO: Sirve para hacer comprobaciones rápidas de False or True

let camisa = {
  talla: 34,
  cantidad: 3,
  existencia: true
}

const {
  talla,
  cantidad,
  existencia
} = camisa;

let respuesta;
// if (existencia) {
//   respuesta = "Hay " + cantidad + " camisas";
// } else {
//   respuesta = "No hay Camisas";
// }

existencia ? respuesta = "Hay " + cantidad + " camisas" : respuesta = "No hay Camisas";

console.log(respuesta)