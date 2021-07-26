//importamos el modulo de http

const http = require("http");

//creamos una funcion de router para nuestro servidor
//toda peticion de http necesit req y res
function router(req, res) {
  console.log("new request");
  console.log(req.url);

  //con req.url conseguimos la url de la peticion
  switch (req.url) {
    //segun la direccion es la respuesta que nos regresa el servidor
    case "/hola":
      res.write("Hola que tal");
      //siempre que se genera una respuesta, esta debe terminarse al final del proceso
      //con res.end()
      res.end();
      break;

    default:
      res.write("Error 404. Not found");
      res.end();
      break;
  }

  // res.writeHead(201, { "Content-Type": "text/plain" });

  // //escribimos respuesta al usuario
  // res.write("Hola, http desde node");

  // res.end();
}

//creamos un servidor
const server = http.createServer(router);

//inicializamos la escucha del servidor en el puerto 3000
server.listen(3000, (err) => {
  //manejamos los errores que se puedan producir en el servidor
  if (err) {
    console.error("Could not stablish a connection with the server");
    console.error(err.message);
  }

  //logueamos lo que sucede en el servidor
  console.info("> Ready on: http://localhost:3000");
});
