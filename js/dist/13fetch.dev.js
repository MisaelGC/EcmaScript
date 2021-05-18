"use strict";

// https://github.com/public-apis/public-apis#development
console.log("### FETCH ###"); // FETCH: es una funcion que nos permite ejecutar servicios HTTP, que son de tipo GET, POST, PUT, DELETE

var getApi = function getApi() {
  var endPoint = "http://calapi.inadiutorium.cz/api/v0/en/calendars/general-en";
  var params = {
    method: "GET",
    header: {
      "Content-Type": "application/json"
    }
  };
  fetch(endPoint, params).then(function (response) {
    return response.json();
  }).then(function (result) {
    var resultado = result.sanctorale;
    var title = resultado.title,
        language = resultado.language;
    console.log("title", title);
  });
};

getApi();