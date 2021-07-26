//consola: npm i bcrypt

const bcrypt = require("bcrypt");

//bcrypt encripta datos retornando hashes
const pass = "pass123seguro";

//la funcion hash es la encargada de realizar el encriptado de datos
bcrypt.hash((data = pass), (saltOrRounds = 5), function (err, hash) {
  console.log(hash);

  //compare compara los datos originales y el hash resultante
  bcrypt.compare(pass, hash, function (err, result) {
    if (err) {
      console.log(err);
    }
    console.log(result);
  });
});
