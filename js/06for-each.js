console.log("### For ###")

// For:

let cursos = [{
  titulo: "Aprende JavaScript",
  nivel: "Basico"
}, {
  titulo: "Aprende ECMAScript",
  nivel: "Intermedio"
}, {
  titulo: "Aprende Angular",
  nivel: "Avanzado"
}]

for (let i = 0; i < cursos.length; i++) {

  console.log(cursos[i].titulo)

  if (i > 0) {
    break;
  }
}

console.log("### ForEach ###")

// ForEach: Es una reducción del ciclo For, y para interrumpirlo se debe colocar en primera instancia el return

cursos.forEach((cursos, index) => {

  if (index > 0) {
    return;
  }
  console.log(cursos.titulo)
  console.log("index", index)
})