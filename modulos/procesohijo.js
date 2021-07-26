//exec se utiliza para ejecutar comandos de sistema usando la terminal

const { exec, spawn } = require("child_process");

//nota: los comando cambian segun el SO en el que se ejecuta el programa. Tambien se pueden
//ejecutar otros procesos node y otros programas desde este programa.

//en este caso le estamos pidiendo que ejecute el comando para obtener los archivos
//de la carpeta actual

// exec("dir", (err, stdout, stderr) => {
//   if (err) {
//     console.error(err);
//     console.error(stderr);
//     return false;
//   }

//   console.log(stdout);
// });

// //spawn se utiliza para procesos mas sencillos
// const proceso = spawn("dir");

// //proceso.stdout regresa un stream de datos
// proceso.stdout.on("data", (data) => {
//   console.log(data.toString());
// });

// //los eventos del proceso se pueden manejar con process.on y se agrega el escucha del proceso
// //similar a los eventListener en el frontend.
// proceso.on("exit", () => {
//   console.log("proceso terminado");
// });

exec(
  "cd C:\\Program Files\\Rhino 6\\System\\ && start Rhino.exe",
  function (err, stdout, stderr) {
    if (err) {
      console.error(err);
      return false;
    }
    console.log(stdout);

    process.exit(0);
  }
);
