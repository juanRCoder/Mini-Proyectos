const MeseroVR = ()=>{

  //FUNCION DE SALUDO
  function saludo(){
    // Preguntar por el nombre del cliente
    let nombreCliente = prompt("¡Hola! ¿Cuál es tu nombre?");

    // Saludar al cliente
    alert(`¡Hola ${nombreCliente}! Bienvenido a nuestro restaurante virtual.`);

    // Preguntar por la mesa en la que se sentará el cliente
    let mesa = prompt("¿En qué mesa te sentarás hoy?");
    menu(nombreCliente,mesa);
  }


  //FUNCION DEL MENU
  function menu(nombreCliente,mesa){
    // Preguntar por el menú
    let menu = prompt("¿Qué deseas ordenar hoy? Tenemos las siguientes opciones:\n1. Hamburguesa $10\n2. Pizza $12\n3. Ensalada $8");

    // Repetir la pregunta hasta que el cliente elija una opción válida
    while (menu !== "1" && menu !== "2" && menu !== "3") {
      alert("Lo siento, opción no válida. Por favor elige una opción del menú.");
      menu = prompt("¿Qué deseas ordenar hoy? Tenemos las siguientes opciones:\n1. Hamburguesa $10\n2. Pizza $12\n3. Ensalada $8");
    }

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
        }
        return precio;
        return food;
      }

    // Calcular el precio de la opción elegida por el cliente
    let precio = calcularPrecio(menu);

    bebida(nombreCliente,mesa,precio,food);
  }

  //FUNCION DE BEBIDAS
  function bebida(nombreCliente,mesa,precio,food){
    // Preguntar si desea agregar bebida
    let agregarBebida = confirm("¿Deseas agregar una bebida por $2 adicionales?");

    // Si el cliente desea agregar bebida, sumar $2 al precio
    if (agregarBebida) {
        precio += 2;
        var bebida = prompt("Tenemos las siguientes bebidas:\n1.Coca-Cola\n2.Inka-Kola\n3.Fanta");

      while(bebida !== "1" && bebida !== "2" && bebida !== "3"){
        alert("Lo siento, opción no válida. Por favor elige una opción de la bebida.");
        bebida = prompt("¿Qué bebida desea ordenar? Tenemos las siguientes opciones:\n1.Coca-Cola\n2.Inka-Kola\n3.Fanta");
      }
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
          	 }
          	  return drink;
          }
          var refresco = optionsBebidas(bebida);
      }
    SendChef(nombreCliente,mesa,precio,food,agregarBebida,refresco);
  }

      //FUNCION ENVIO DE DATOS HACIA EL CHEF
  function SendChef(nombreCliente,mesa,precio,food,agregarBebida,refresco){
    // Mostrar el total de la orden al cliente
    alert(`Perfecto, tu total es de $${precio}. Gracias por visitarnos, ${nombreCliente} ¡Que disfrutes tu comida!`);

    // Mostrar el pedido al chef
    if (agregarBebida == true) console.log(`Cliente : ${nombreCliente}\nMesa:${mesa}\nMenu: ${food} y ${refresco}`);
    else console.log(`Cliente : ${nombreCliente}\nMesa:${mesa}\nMenu: ${food}`);
  }

//EMPEZAR A ATENDER:
  saludo();
}

MeseroVR();