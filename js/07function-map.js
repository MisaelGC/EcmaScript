console.log("### MAP ###");

// MAP: Recorre cada elemento del Array y retona modificaciones que le queramos al array inicial

let deportes = [{
  titulo: "Futbol",
  nivel: "Básico"
}, {
  titulo: "Tennis",
  nivel: "Intermedio"
}, {
  titulo: "Golf",
  nivel: "Avanzado"
}]

let agregarLugar = deportes.map((deporte, index) => {

  if (index === 1) {

    deporte.lugar = "Estadio";
  }

  if (index === 2) {

    deporte.nivel = "Básico"
  }
  return deporte;
})

console.log("agregar Lugar", agregarLugar);