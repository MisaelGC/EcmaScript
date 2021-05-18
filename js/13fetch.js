// https://github.com/public-apis/public-apis#development
console.log("### FETCH ###")

// FETCH: es una funcion que nos permite ejecutar servicios HTTP, que son de tipo GET, POST, PUT, DELETE

let getApi = () => {

  const endPoint = "http://calapi.inadiutorium.cz/api/v0/en/calendars/general-en";

  const params = {
    method: "GET",
    header: {
      "Content-Type": "application/json"
    }
  }

  fetch(endPoint, params).then(response => {

    return response.json();
  }).then(result => {

    const resultado = result.sanctorale;

    const {
      title,
      language
    } = resultado;

    console.log("title", title)

  })
}

getApi();