console.log("### ASYNC - AWAIT ###")

// Nos permite simplificar el codigo para ejecutar promesas asincronas con unas sola respuesta correcta

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

// Respuesta de la tarea asincronas con async y await
let informeReserva = async (idDestino, idDia, idAsiento) => {

  let informeDestino = await getDestino(idDestino);
  let informeDia = await getDia(idDia);
  let informeAsiento = await getAsiento(idAsiento);

  return `Tu destino será: ${informeDestino.destino},
          Tu día será: ${informeDia.dia},
          Tu asiento será: ${informeAsiento.asiento}`
}

informeReserva(1, 2, 2)
  .then(mensaje => console.log(mensaje))
  .catch(err => console.log(err))

// // Tarea Sincrónica: Tareas que se ejecutan al mismo tiempo
// // Tarea Asincrona: Tareas que se ejecutan en diferente tiempo, en este caso una tarea espera la ejecucion de la otra

// // Respuesta de la Primera Tarea
// getDestino(2).then(destinoDB => {
//   console.log(`Tu destino será: ${destinoDB.destino}`)
// })
// // Respuesta de la Segunda Tarea
// getDia(1).then(diaDB => {
//   console.log(`Tu día será: ${diaDB.dia}`)
// })
// // Respuesta de la Tercera Tarea
// getAsiento(3).then(asientoDB => {
//     console.log(`Tu asiento será: ${asientoDB.asiento}`)
//   })
//   .catch(err => {
//     console.log("err", err)
//   })
//   .catch(err => {
//     console.log("err", err)
//   })
//   .catch(err => {
//     console.log("err", err)
//   })