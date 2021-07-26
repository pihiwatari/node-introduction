//creamos la funcion del modulo

function saludar() {
  console.log("Hola mundo");
}

//aqui le decimos lo que vamos a exportar
module.exports = {
  saludar,
  prop: "Soy una propiedad del objeto modulo",
};
