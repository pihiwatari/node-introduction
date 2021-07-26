//funciona similar a los lifecycle hooks en vue

console.log("Iniciando proceso...");

setTimeout(function () {
  console.log(
    "aqui si me veo porque me llaman desde e hilo principal, voy beforeExit"
  );
}, 0);

//cuando ocurre una excepcion no atrapada en un catch, usar como ultimo recurso
process.on("uncaughtException", (err, ori) => {
  console.log("Ocurrio un error, pero me vale 3kg de berenjena");
  console.error(err);
  console.error(ori);
});

//cuando una promesa es rechasada y no hay un catch
process.on("uncaughtRejection", () => {
  console.log("No me prometas cosas que no cumpliras, nepecio");
});

//antes de terminar la ejecucion
process.on("beforeExit", () => {
  console.log("Ya voy a terminar");
});

//finalizando la ejecucion
process.on("exit", () => {
  console.log("Ya termine");
  //cualquier accion asincrona que se ejecute en este bloque
  //nunca se va a realizar
  setTimeout(function () {
    console.log("Nunca me voy a ver");
  }, 0);
});

//aqui forzamos un error y aun asi el programa continua. El bloque dentro de uncaughtException
//se ejecuta primero porque esta al inicio del programa
// errorfunc();
