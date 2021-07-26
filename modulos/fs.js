//El modulo de file system permite leer y escribir archivos.
const fs = require("fs");

//funcion sencilla para lectura de arhcivos de texto
function leer(ruta, cb) {
  fs.readFile(ruta, (err, data) => {
    //personalizamos las acciones de nuestro callback y ejecutamos la funcion
    cb(data.toString());
  });
}

function escribir(ruta, contenido, cb) {
  fs.writeFile(ruta, contenido, (err) => {
    if (err) {
      console.error("Error de escritura", err);
    } else {
      console.log("Escritura completada con exito");
    }
  });
}

function borrar(ruta, cb) {
  fs.unlink(ruta, cb);
}

//aqui pasamos la funcion como un parametro sin llamar a la ejecución.
leer(`${__dirname}/texto.txt`, console.log);
escribir(`${__dirname}/texto1.txt`, "chimichangas", console.log);
borrar(`${__dirname}/texto1.txt`, console.log);
