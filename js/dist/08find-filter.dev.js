"use strict";

var vehiculos = [{
  id: 1,
  marca: "Mazda",
  modelo: 2016
}, {
  id: 2,
  marca: "Toyota",
  modelo: 2017
}, {
  id: 3,
  marca: "Hyundai",
  modelo: 2018
}];
console.log("### FILTER ###"); // FILTER: Recorre cada elemento del array y retorna un nuevo array filtrando solos los elementos solicitados

var filtrarVehiculos = vehiculos.filter(function (vehiculo) {
  return vehiculo.modelo > 2016;
});
console.log("vehiculos", vehiculos);
console.log("filtrarVehiculos", filtrarVehiculos);
console.log("### FIND ###"); // FIND: Recore cada elemento del array y retorna el primer elemento que coincida con la busqueda por fuera del array

var buscarVehiculo = vehiculos.find(function (vehiculo) {
  return vehiculo.modelo > 2016;
});
console.log("buscarVehiculo", buscarVehiculo);