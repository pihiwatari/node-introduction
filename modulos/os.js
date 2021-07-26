const os = require("os");

// retorna la arquitectura del sistema
console.log(os.arch());

// retorna la plataforma de os
console.log(os.platform());

// consigue la informacion de los nucleos
console.log(os.cpus());
// numero de nucleos
console.log(os.cpus().length);

//señales del sistema
console.log(os.constants);

//datos de memoria en bytes
console.log(os.freemem());
//memoria total en gb
console.log(os.totalmem() / 1024 / 1024 / 1024);

//diectorio raiz y temmporal
console.log(os.homedir());
console.log(os.tmpdir());

//datos del servidor
console.log(os.hostname());
//interfaces del servidor
console.log(os.networkInterfaces());
