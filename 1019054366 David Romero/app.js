let totalVisitantes = 0;
let totalRecaudado = 0;
let totalPases = 0;

let subtotalVisitante = 0;
let pasesVisitante = 0;

function pedirOpcion(texto, min, max) {
  let valor = parseInt(prompt(texto));
  while (isNaN(valor) || valor < min || valor > max) {
    alert("Opción inválida. Elige un número entre " + min + " y " + max + ".");
    valor = parseInt(prompt(texto));
  }
  return valor;
}

function pedirCantidad(texto) {
  let valor = parseInt(prompt(texto));
  while (isNaN(valor) || valor <= 0) {
    alert("La cantidad debe ser un número mayor a 0.");
    valor = parseInt(prompt(texto));
  }
  return valor;
}

function menuPrincipal() {
  return pedirOpcion(
    "=== AVENTURA PARK ===\n1. Registrar visitante / grupo\n2. Ver balance del día\n3. Salir del sistema",
    1, 3
  );
}

function menuZonas() {
  return pedirOpcion(
    "=== ZONAS DEL PARQUE ===\n1. Zona Extrema (Montañas Rusas)\n2. Zona Familiar e Infantil\n3. Zona Acuática\n4. Finalizar compra y facturar",
    1, 4
  );
}

function menuAtracciones(zona) {
  let texto = "";
  switch (zona) {
    case 1:
      texto = "=== ZONA EXTREMA ===\n1. Pase Vértigo: $20.000\n2. Caída Libre 60m: $18.000\n3. Simulador 4D Extremo: $15.000\n4. Volver al menú de zonas";
      break;
    case 2:
      texto = "=== ZONA FAMILIAR E INFANTIL ===\n1. Carrusel Clásico: $8.000\n2. Carros Chocones: $10.000\n3. Rueda de la Fortuna Panorámica: $12.000\n4. Volver al menú de zonas";
      break;
    case 3:
      texto = "=== ZONA ACUÁTICA ===\n1. Piscina de Olas: $14.000\n2. Tobogán Tornado: $16.000\n3. Pase Río Lento: $9.000\n4. Volver al menú de zonas";
      break;
  }
  return pedirOpcion(texto, 1, 4);
}

function obtenerPrecio(zona, atraccion) {
  switch (zona) {
    case 1:
      if (atraccion === 1) return 20000;
      if (atraccion === 2) return 18000;
      return 15000;
    case 2:
      if (atraccion === 1) return 8000;
      if (atraccion === 2) return 10000;
      return 12000;
    case 3:
      if (atraccion === 1) return 14000;
      if (atraccion === 2) return 16000;
      return 9000;
  }
  return 0;
}

function comprarEnZona(zona) {
  let atraccion = menuAtracciones(zona);
  while (atraccion !== 4) {
    let cantidad = pedirCantidad("¿Cuántos pases desea?");
    let precio = obtenerPrecio(zona, atraccion);
    subtotalVisitante += precio * cantidad;
    pasesVisitante += cantidad;
    alert("Agregado. Subtotal actual: $" + subtotalVisitante + " | Pases: " + pasesVisitante);
    atraccion = menuAtracciones(zona);
  }
}

function calcularDescuento(subtotal, pases, esEfectivo) {
  if (pases >= 5 && subtotal > 50000) {
    return subtotal * 0.12;
  } else if (esEfectivo) {
    return subtotal * 0.05;
  }
  return 0;
}

function calcularTotal(subtotal, descuento, seguro) {
  return subtotal - descuento + seguro;
}

function facturar() {
  let metodo = pedirOpcion("Método de pago:\n1. Efectivo\n2. Tarjeta", 1, 2);
  let esEfectivo = metodo === 1;

  let seguro = 0;
  let quiereSeguro = pedirOpcion("¿Desea seguro médico de accidentes ($5.000)?\n1. Sí\n2. No", 1, 2);
  if (quiereSeguro === 1) {
    seguro = 5000;
  }

  let descuento = calcularDescuento(subtotalVisitante, pasesVisitante, esEfectivo);
  let total = calcularTotal(subtotalVisitante, descuento, seguro);

  alert(
    "=== FACTURA ===\n" +
    "Subtotal: $" + subtotalVisitante + "\n" +
    "Descuento: $" + descuento + "\n" +
    "Seguro médico: $" + seguro + "\n" +
    "TOTAL A PAGAR: $" + total
  );

  totalVisitantes++;
  totalRecaudado += total;
  totalPases += pasesVisitante;
}

function atenderVisitante() {
  subtotalVisitante = 0;
  pasesVisitante = 0;

  let zona = menuZonas();
  while (true) {
    if (zona === 4) {
      if (pasesVisitante === 0) {
        alert("Debe agregar al menos un pase antes de facturar.");
      } else {
        facturar();
        return; 
      }
    } else {
      comprarEnZona(zona);
    }
    zona = menuZonas();
  }
}

function verBalance() {
  let promedio = 0;
  if (totalVisitantes > 0) {
    promedio = totalRecaudado / totalVisitantes;
  }
  alert(
    "=== BALANCE DEL DÍA ===\n" +
    "Visitantes/grupos: " + totalVisitantes + "\n" +
    "Total recaudado: $" + totalRecaudado + "\n" +
    "Pases vendidos: " + totalPases + "\n" +
    "Promedio por visitante: $" + promedio
  );
}

function iniciarTaquilla() {
  let opcion = menuPrincipal();
  while (opcion !== 3) {
    if (opcion === 1) {
      atenderVisitante();
    } else if (opcion === 2) {
      verBalance();
    }
    opcion = menuPrincipal();
  }
  alert("Taquilla cerrada. ¡Hasta mañana!");
}

iniciarTaquilla();