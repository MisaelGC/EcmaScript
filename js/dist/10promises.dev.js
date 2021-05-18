"use strict";

console.log("### PROMISES ###"); // PROMISES: Nos permiten ejecutar un trabajo ya sea sincrono o asincrono despues de que se realiza una tarea anterior

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
}; // Tarea Sincrónica: Tareas que se ejecutan al mismo tiempo
// Tarea Asincrona: Tareas que se ejecutan en diferente tiempo, en este caso una tarea espera la ejecucion de la otra
// Respuesta de la Primera Tarea


getDestino(1).then(function (destinoDB) {
  console.log("Tu destino ser\xE1: ".concat(destinoDB.destino));
}); // Respuesta de la Segunda Tarea

getDia(1).then(function (diaDB) {
  console.log("Tu d\xEDa ser\xE1: ".concat(diaDB.dia));
}); // Respuesta de la Tercera Tarea

getAsiento(1).then(function (asientoDB) {
  console.log("Tu asiento ser\xE1: ".concat(asientoDB.asiento));
})["catch"](function (err) {
  console.log("err", err);
})["catch"](function (err) {
  console.log("err", err);
})["catch"](function (err) {
  console.log("err", err);
});