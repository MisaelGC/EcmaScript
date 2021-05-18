console.log("### CallBacks ###");

// Callbacks:  Es una funcion que se ejecuta cuando algo sucede en otra funcion

let paises = [{
  id: 1,
  pais: "Argentina",
  continente: "Sudamerica"
}, {
  id: 2,
  pais: "Colombia",
  continente: "Sudamerica"
}, {
  id: 3,
  pais: "México",
  continente: "Centroamerica"
}]

let tomarPais = (id, Callback) => {
  let idPais = paises.find(pais => {
    return pais.id === id;
  })

  if (!idPais) {
    Callback("No existe pais en el BD")
  } else {
    Callback(null, idPais)
  }
}

tomarPais(2, (err, res) => {

  if (err) {
    return console.log(err)
  }

  console.log(res)
})