//promesas en nodejs

//declaramos una funcion asincrona que retorna una promesa
function hola(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log("Hola " + nombre);
      resolve(nombre);
    }, 1000);
  });
}

function adios(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log("Adios " + nombre);
      resolve(nombre);
    }, 1000);
  });
}

function hablar(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log("Blah blah blah");
      resolve(nombre);
    }, 800);
  });
}

//en caso de que una parte de la promesa falle, es interceptado por catch
//evitando que el error se propague.

console.log("Iniciando proceso...");
hola("pepo")
  .then((nombre) => hablar(nombre))
  .then((nombre) => adios(nombre))
  .then((nombre) => console.log("Finalizado el proceso"))
  .catch((error) => {
    console.log(error);
  });
