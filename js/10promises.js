console.log("### PROMISES ###")

// PROMISES: Nos permiten ejecutar un trabajo ya sea sincrono o asincrono despues de que se realiza una tarea anterior

let reservarDestino = [{
  id: 1,
  destino: "Miami"
}, {
  id: 2,
  destino: "New York"
}, {
  id: 3,
  destino: "Los Angeles"
}]

let reservarDia = [{
  id: 1,
  dia: "Lunes"
}, {
  id: 2,
  dia: "Martes"
}, {
  id: 1,
  dia: "Miercoles"
}]

let ReservarAsiento = [{
  id: 1,
  asiento: "Ventana"
}, {
  id: 2,
  asiento: "Medio"
}, {
  id: 3,
  asiento: "Pasillo"
}]

// Primera Tarea: Reservar Destino
let getDestino = id => {
  return new Promise((resolve, reject) => {
    let destinoDB = reservarDestino.find(destino => destino.id === id)

    if (!destinoDB) {
      reject("No existe el destino seleccionado");
    } else {
      resolve(destinoDB);
    }
  })
}

// Segunda Tarea: Reservar Dia
let getDia = id => {

  return new Promise((resolve, reject) => {

    let diaDB = reservarDia.find(dia => dia.id === id)

    if (!diaDB) {

      reject("No existe dia seleccionado")
    } else {
      resolve(diaDB)
    }
  })
}

// Tercer Tarea: Reservar Asiento
let getAsiento = id => {

  return new Promise((resolve, reject) => {

    let asientoDB = ReservarAsiento.find(asiento => asiento.id === id)

    if (!asientoDB) {

      reject("No existe asiento seleccionado")
    } else {
      resolve(asientoDB)
    }
  })
}

// Tarea Sincrónica: Tareas que se ejecutan al mismo tiempo
// Tarea Asincrona: Tareas que se ejecutan en diferente tiempo, en este caso una tarea espera la ejecucion de la otra

// Respuesta de la Primera Tarea
getDestino(1).then(destinoDB => {
  console.log(`Tu destino será: ${destinoDB.destino}`)
})

// Respuesta de la Segunda Tarea
getDia(1).then(diaDB => {
  console.log(`Tu día será: ${diaDB.dia}`)
})

// Respuesta de la Tercera Tarea
getAsiento(1).then(asientoDB => {
    console.log(`Tu asiento será: ${asientoDB.asiento}`)
  })
  .catch(err => {
    console.log("err", err)
  })
  .catch(err => {
    console.log("err", err)
  })
  .catch(err => {
    console.log("err", err)
  })