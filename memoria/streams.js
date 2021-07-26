const fs = require("fs");

const stream = require("stream");

let data = "";

//creamos un stream de lectura de datos con la libreria fs
let readableStream = fs.createReadStream(__dirname + "/input.txt");

//si conocemos los datos que vamos a recibir podemos encodear el stream,
//para que trabaje siempre con ese tipo de dato
readableStream.setEncoding("UTF8");

//una vez que empezamos a recibir los datos, los agregamos a data
readableStream.on("data", function (chunk) {
  data += chunk;
});

//cuando terminamos de recibir los datos realizamos una funcion
readableStream.on("end", function () {
  console.log(data);
});

//proces.stdout es un buffer de escritura
process.stdout.write("hola");

const Transform = stream.transform;

function mayus() {
  console.log();
}
