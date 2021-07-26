//creamos la funcion del modulo

function saludar() {
  console.log("Hola mundo");
}

//aqui le decimos lo que vamos a exportar usando export default
export default {
  saludar,
  //tambien agregamos una propiedad para acceder a ella
  prop: "Soy un modulo de ES6",
};
