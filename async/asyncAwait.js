//async / await en nodejs

//declaramos una funcion asincrona que retorna una promesa
async function hola(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log("Hola " + nombre);
      resolve(nombre);
    }, 1000);
  });
}

async function adios(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log("Adios " + nombre);
      resolve(nombre);
    }, 1000);
  });
}

async function hablar(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log("Blah blah blah");
      resolve(nombre);
    }, 800);
  });
}

async function main() {
  console.log("Iniciando el proceso");
  let nombre = await hola("Pepo");
  await hablar(nombre);
  await hablar(nombre);
  await hablar(nombre);
  await adios(nombre);
  console.log("Finalizando el proceso");
}

main();
