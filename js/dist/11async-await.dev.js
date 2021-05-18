"use strict";

console.log("### ASYNC - AWAIT ###"); // Nos permite simplificar el codigo para ejecutar promesas asincronas con unas sola respuesta correcta

var reservarDestino = [{
  id: 1,
  destino: "Miami"
}, {
  id: 2,
  destino: "New York"
}, {
  id: 3,
  destino: "Los Angeles"
}];
var reservarDia = [{
  id: 1,
  dia: "Lunes"
}, {
  id: 2,
  dia: "Martes"
}, {
  id: 1,
  dia: "Miercoles"
}];
var ReservarAsiento = [{
  id: 1,
  asiento: "Ventana"
}, {
  id: 2,
  asiento: "Medio"
}, {
  id: 3,
  asiento: "Pasillo"
}]; // Primera Tarea: Reservar Destino

var getDestino = function getDestino(id) {
  return new Promise(function (resolve, reject) {
    var destinoDB = reservarDestino.find(function (destino) {
      return destino.id === id;
    });

    if (!destinoDB) {
      reject("No existe el destino seleccionado");
    } else {
      resolve(destinoDB);
    }
  });
}; // Segunda Tarea: Reservar Dia


var getDia = function getDia(id) {
  return new Promise(function (resolve, reject) {
    var diaDB = reservarDia.find(function (dia) {
      return dia.id === id;
    });

    if (!diaDB) {
      reject("No existe dia seleccionado");
    } else {
      resolve(diaDB);
    }
  });
}; // Tercer Tarea: Reservar Asiento


var getAsiento = function getAsiento(id) {
  return new Promise(function (resolve, reject) {
    var asientoDB = ReservarAsiento.find(function (asiento) {
      return asiento.id === id;
    });

    if (!asientoDB) {
      reject("No existe asiento seleccionado");
    } else {
      resolve(asientoDB);
    }
  });
}; // Respuesta de la tarea asincronas con async y await


var informeReserva = function informeReserva(idDestino, idDia, idAsiento) {
  var informeDestino, informeDia, informeAsiento;
  return regeneratorRuntime.async(function informeReserva$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(getDestino(idDestino));

        case 2:
          informeDestino = _context.sent;
          _context.next = 5;
          return regeneratorRuntime.awrap(getDia(idDia));

        case 5:
          informeDia = _context.sent;
          _context.next = 8;
          return regeneratorRuntime.awrap(getAsiento(idAsiento));

        case 8:
          informeAsiento = _context.sent;
          return _context.abrupt("return", "Tu destino ser\xE1: ".concat(informeDestino.destino, ",\n          Tu d\xEDa ser\xE1: ").concat(informeDia.dia, ",\n          Tu asiento ser\xE1: ").concat(informeAsiento.asiento));

        case 10:
        case "end":
          return _context.stop();
      }
    }
  });
};

informeReserva(1, 2, 2).then(function (mensaje) {
  return console.log(mensaje);
})["catch"](function (err) {
  return console.log(err);
}); // // Tarea Sincrónica: Tareas que se ejecutan al mismo tiempo
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