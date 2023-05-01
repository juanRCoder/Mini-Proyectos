// Preguntar por el nombre del cliente
let nombreCliente = prompt("¡Hola! ¿Cuál es tu nombre?");

// Saludar al cliente
alert(`¡Hola ${nombreCliente}! Bienvenido a nuestro restaurante virtual.`);

// Preguntar por la mesa en la que se sentará el cliente
let mesa = prompt("¿En qué mesa te sentarás hoy?");

// Preguntar por el menú
let menu = prompt("¿Qué deseas ordenar hoy? Tenemos las siguientes opciones:\n1. Hamburguesa $10\n2. Pizza $12\n3. Ensalada $8");

// Crear una función para calcular el precio
function calcularPrecio(opcion) {
  let precio = 0;
  switch (opcion) {
    case "1":
      food = "Hamburguesa";
      precio = 10;
      break;

    case "2":
      food = "Pizza";
      precio = 12;
      break;

    case "3":
      food = "Ensalada";
      precio = 8;
      break;

    default:
      alert("Lo siento, no entendí tu elección.");
      break;
  }
  return precio;
  return food;
}


// Calcular el precio de la opción elegida por el cliente
let precio = calcularPrecio(menu);

// Preguntar si desea agregar bebida
let agregarBebida = confirm("¿Deseas agregar una bebida por $2 adicionales?");

// Si el cliente desea agregar bebida, sumar $2 al precio
if (agregarBebida) {
  precio += 2;
	var bebida = prompt("Tenemos las siguientes bebidas:\n1.Coca-Cola\n2.Inka-Kola\n3.Fanta");
	function optionsBebidas(opcion) {
	  switch (opcion) {
	    case "1":
	      drink = "Coca-Cola";
	      break;

	    case "2":
	      drink = "Inka-Kola";
	      break;

	    case "3":
	      drink = "Fanta";
	      break;

	    default:
	      alert("Lo siento, no entendí tu elección.");
	      break;
	  }
	  return drink;
	}
    var refresco = optionsBebidas(bebida);
}

// Mostrar el total de la orden al cliente
alert(`Perfecto, tu total es de $${precio}. Gracias por visitarnos, ${nombreCliente} ¡Que disfrutes tu comida!`);

// Mostrar el pedido al chef
if (agregarBebida == true) {
	console.log(`Cliente : ${nombreCliente}\nMesa:${mesa}\nMenu: ${food} y ${refresco}`);
}else console.log(`Cliente : ${nombreCliente}\nMesa:${mesa}\nMenu: ${food}`);


