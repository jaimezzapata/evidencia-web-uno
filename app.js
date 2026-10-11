
let totalClientesAtendidos = 0;
let totalDineroRecaudado = 0;
let totalItemsVendidos = 0;
let subtotalUsuario = 0;
let itemsUsuario = 0;

function pedirCantidad(mensaje) {
  let cantidad = 0;
  while (cantidad <= 0 || isNaN(cantidad)) {
    cantidad = parseInt(prompt(mensaje));
    if (cantidad <= 0 || isNaN(cantidad)) {
      alert("Error: La cantidad debe ser un número entero mayor a 0.");
    }
  }
  return cantidad;
}

function calcularDescuento(subtotal, esEfectivo, esEstudiante) {
  let porcentajeEfectivo = 0;
  let porcentajeEstudiante = 0;

  if (esEfectivo && subtotal > 100000) {
    porcentajeEfectivo = 0.10;
  }
  if (esEstudiante) {
    porcentajeEstudiante = 0.08;
  }

  
  if (porcentajeEfectivo >= porcentajeEstudiante) {
    return subtotal * porcentajeEfectivo;
  } else {
    return subtotal * porcentajeEstudiante;
  }
}

function facturacion() {
  if (subtotalUsuario === 0) {
    alert("El usuario no ha seleccionado ningún servicio o producto.");
    return;
  }

  let metodoPago = prompt("Medio de pago:\n1 - Efectivo\n2 - Tarjeta / Otro");
  let esEfectivo = (metodoPago === "1");

  let respEstudiante = prompt("¿Es estudiante con carné vigente? (S/N):");
  let esEstudiante = (respEstudiante === "s" || respEstudiante === "S");


  let respSeguro = prompt("¿Desea incluir la póliza de seguro médico deportivo por $6.000? (S/N):");
  let seguro = 0;
  if (respSeguro === "s" || respSeguro === "S") {
    seguro = 6000;
  }

 
  let descuento = calcularDescuento(subtotalUsuario, esEfectivo, esEstudiante);
  let totalPagar = subtotalUsuario - descuento + seguro;

  
  alert(
    "RESUMEN DE FACTURA\n" +
    "Subtotal: $" + subtotalUsuario + "\n" +
    "Descuento aplicado: -$" + descuento + "\n" +
    "Seguro médico: +$" + seguro + "\n" +
    "Total a Pagar: $" + totalPagar
  );

  
  totalClientesAtendidos++;
  totalDineroRecaudado += totalPagar;
  totalItemsVendidos += itemsUsuario;
}

function balanceCaja() {
  let promedio = 0;
  if (totalClientesAtendidos > 0) {
    promedio = totalDineroRecaudado / totalClientesAtendidos;
  }

  alert(
    "BALANCE DE CAJA DEL DÍA\n" +
    "Total de clientes atendidos: " + totalClientesAtendidos + "\n" +
    "Total de servicios/productos facturados: " + totalItemsVendidos + "\n" +
    "Total de dinero recaudado: $" + totalDineroRecaudado + "\n" +
    "Promedio de compra por usuario: $" + promedio.toFixed(2)
  );
}


function menuPlanes() {
  let repetirPlanes = true;
  while (repetirPlanes) {
    let op = prompt(
      "PLANES DE MEMBRESÍA:\n" +
      "1 - Pase Diario: $15.000\n" +
      "2 - Mensualidad Básica: $80.000\n" +
      "3 - Mensualidad VIP: $120.000\n" +
      "4 - Volver al menú de servicios"
    );

    if (op === "1") {
      let cant = pedirCantidad("Ingrese el número de pases diarios:");
      subtotalUsuario += 15000 * cant;
      itemsUsuario += cant;
    } else if (op === "2") {
      let cant = pedirCantidad("Ingrese el número de meses básicos:");
      subtotalUsuario += 80000 * cant;
      itemsUsuario += cant;
    } else if (op === "3") {
      let cant = pedirCantidad("Ingrese el número de meses VIP:");
      subtotalUsuario += 120000 * cant;
      itemsUsuario += cant;
    } else if (op === "4") {
      repetirPlanes = false;
    } else {
      alert("Opción no válida.");
    }
  }
}

function menuClases() {
  let repetirClases = true;
  while (repetirClases) {
    let op = prompt(
      "CLASES Y ENTRENADOR:\n" +
      "1 - Clase de Spinning: $18.000\n" +
      "2 - Entrenador Personal (1 hora): $35.000\n" +
      "3 - Paquete Funcional / Cross: $20.000\n" +
      "4 - Volver al menú de servicios"
    );

    if (op === "1") {
      let cant = pedirCantidad("Ingrese el número de clases:");
      subtotalUsuario += 18000 * cant;
      itemsUsuario += cant;
    } else if (op === "2") {
      let cant = pedirCantidad("Ingrese el número de sesiones (horas):");
      subtotalUsuario += 35000 * cant;
      itemsUsuario += cant;
    } else if (op === "3") {
      let cant = pedirCantidad("Ingrese el número de paquetes:");
      subtotalUsuario += 20000 * cant;
      itemsUsuario += cant;
    } else if (op === "4") {
      repetirClases = false;
    } else {
      alert("Opción no válida.");
    }
  }
}

function menuTienda() {
  let repetirTienda = true;
  while (repetirTienda) {
    let op = prompt(
      "TIENDA FITNESS:\n" +
      "1 - Bebida Hidratante: $7.000\n" +
      "2 - Barra de Proteína: $9.000\n" +
      "3 - Termo Deportivo: $25.000\n" +
      "4 - Volver al menú de servicios"
    );

    if (op === "1") {
      let cant = pedirCantidad("Ingrese la cantidad de unidades:");
      subtotalUsuario += 7000 * cant;
      itemsUsuario += cant;
    } else if (op === "2") {
      let cant = pedirCantidad("Ingrese la cantidad de unidades:");
      subtotalUsuario += 9000 * cant;
      itemsUsuario += cant;
    } else if (op === "3") {
      let cant = pedirCantidad("Ingrese la cantidad de unidades:");
      subtotalUsuario += 25000 * cant;
      itemsUsuario += cant;
    } else if (op === "4") {
      repetirTienda = false;
    } else {
      alert("Opción no válida.");
    }
  }
}


function atenderUsuario() {
  let identificacion = prompt("Ingrese código de socio o nombre de usuario:");
  
  
  subtotalUsuario = 0;
  itemsUsuario = 0;

  let atendiendo = true;
  while (atendiendo) {
    let opcionServicio = prompt(
      "MENÚ DE SERVICIOS - Usuario: " + identificacion + "\n" +
      "Subtotal actual: $" + subtotalUsuario + "\n\n" +
      "1 - Planes de Membresía\n" +
      "2 - Clases y Entrenador Personalizado\n" +
      "3 - Tienda Fitness y Suplementos\n" +
      "4 - Finalizar compra y facturar"
    );

    if (opcionServicio === "1") {
      menuPlanes();
    } else if (opcionServicio === "2") {
      menuClases();
    } else if (opcionServicio === "3") {
      menuTienda();
    } else if (opcionServicio === "4") {
      facturacion();
      atendiendo = false;
    } else {
      alert("Opción inválida.");
    }
  }
}


let sistemaActivo = true;
while (sistemaActivo) {
  let opcionPrincipal = prompt(
    " FITZONE CLUB - RECEPCIÓN\n" +
    "1 - Atender socio / nuevo usuario\n" +
    "2 - Ver balance de caja del día\n" +
    "3 - Salir del sistema"
  );

  if (opcionPrincipal === "1") {
    atenderUsuario();
  } else if (opcionPrincipal === "2") {
    balanceCaja();
  } else if (opcionPrincipal === "3") {
    sistemaActivo = false;
    alert("Cerrando sistema. ¡Hasta luego!");
  } else {
    alert("Opción no reconocida.");
  }
}