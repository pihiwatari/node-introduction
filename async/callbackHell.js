//callbacks en nodejs

//declaramos una funcion asincrona con un callback como parametro
function hola(nombre, miCallback) {
  // console.log("Hola soy una funcion asincrona");
  //todo lo que se ejecute dentro del timeOut, lo hara cuando el hilo de ejecución, quede libre
  setTimeout(function () {
    console.log("Hola " + nombre);
    //aqui ejecutamos el callback o funcion asincrona
    miCallback(nombre);
  }, 1000);
}

function adios(nombre, otroCallback) {
  setTimeout(function () {
    console.log("Adios", nombre);
    otroCallback();
  }, 1000);
}

function hablar(callback) {
  setTimeout(function () {
    console.log("Blah blah blah");
    callback();
  }, 800);
}

function conversacion(nombre, veces, callback) {
  if (veces > 0) {
    hablar(function () {
      conversacion(nombre, --veces, callback);
    });
  } else {
    adios(nombre, callback);
  }
}
console.log("Iniciando proceso...");

hola("Pepo", function (nombre) {
  conversacion(nombre, 3, function () {
    console.log("Finalizando proceso");
  });
});
