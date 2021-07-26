// //creamos 4 espacios en momria vacios
// let buffer = Buffer.alloc(4);

//guardamos informacion en los espacios
let buffer = Buffer.from("hola");

console.log(buffer); // <Buffer 68 6f 6c 61>
console.log(buffer.toString()); //hola

//Creamos los espacios para signar el abecedario
let abc = Buffer.alloc(26);

//los procesamos con un ciclo for asignando el valor hexadecimal
//correspondiente a cada letra del abecedario
for (let i = 0; i < 26; i++) {
  abc[i] = 97 + i;
}

console.log(abc.toString()); //abcdefghijklmnopqrstuvwxyz
