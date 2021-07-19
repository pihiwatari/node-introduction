//callbacks en nodejs

//declaramos una funcion asincrona con un callback como parametro
function hola(nombre, miCallback) {
  console.log("Hola soy una funcion asincrona");
  //todo lo que se ejecute dentro del timeOut, lo hara cuando el hilo de ejecución, quede libre
  setTimeout(function () {
    console.log("Hola " + nombre);
    //aqui ejecutamos el callback o funcion asincrona
    miCallback();
  }, 1000);
}

function adios(nombre, otroCallback) {
  //con setTimeout enviamos al final de la pila de ejecucion a la funcion adios
  setTimeout(function () {
    console.log("Adios " + nombre);
    //llamamos al callback de nuevo
    otroCallback();
  }, 1000);
}

console.log("Iniciando proceso...");
//pasamos la funcion que ejecuta el console.log de manera asincrona
//llamamos a la funcion hola que ejecuta el primer console.log saludando.
hola("Pepo", function () {
  //luego llamamos a adios(), que ejecuta el segundo console.log despidiendose
  adios("Peponcio", function () {
    //finalmente cerramos el proceso ejecutando el console.log de nuestro callback
    console.log("Terminando proceso");
  });
});
