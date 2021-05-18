console.log("### JSON ###")

// Notacion de objetos de JS
let json = {
  "squadName": "Super hero squad",
  "homeTown": "Metro City",
  "formed": 2016,
  "secretBase": "Super tower",
  "active": true,
  "members": [{
      "name": "Molecule Man",
      "age": 29,
      "secretIdentity": "Dan Jukes",
      "powers": [
        "Radiation resistance",
        "Turning tiny",
        "Radiation blast"
      ]
    },
    {
      "name": "Madame Uppercut",
      "age": 39,
      "secretIdentity": "Jane Wilson",
      "powers": [
        "Million tonne punch",
        "Damage resistance",
        "Superhuman reflexes"
      ]
    },
    {
      "name": "Eternal Flame",
      "age": 1000000,
      "secretIdentity": "Unknown",
      "powers": [
        "Immortality",
        "Heat Immunity",
        "Inferno",
        "Teleportation",
        "Interdimensional travel"
      ]
    }
  ]
}
console.log(json)

// JSON STRINGIFY: Tomar mi cracion de array y objetos y convertirlo en JSON para ser enviado a otras instacias: cliente servidor, lo envia como cadena de texto

let enviarJSON = JSON.stringify(json);
console.log(enviarJSON)

// JSON PARSE: Recibe un dato JSON que provengande otras instancias para convertirlo en array y object

let convertirJSON = JSON.parse(enviarJSON);
console.log(convertirJSON);