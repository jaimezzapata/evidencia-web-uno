// ============================================================
//  AVENTURA PARK - Sistema de taquilla
// ============================================================

// ---------- Constantes ----------
const DESCUENTO_GRUPO = 0.12;
const DESCUENTO_EFECTIVO = 0.05;
const MINIMO_PASES_GRUPO = 5;
const MINIMO_SUBTOTAL_GRUPO = 50000;
const VALOR_SEGURO = 5000;

// ---------- Acumuladores globales de la jornada ----------
let totalVisitantes = 0;
let totalRecaudado = 0;
let totalPases = 0;

// ============================================================
//  FUNCIONES AUXILIARES
// ============================================================

function formatearDinero(valor) {
  return "$" + Math.round(valor).toLocaleString("es-CO");
}

// Pide un entero entre min y max y repite hasta que sea válido
function leerEntero(mensaje, min, max) {
  let valor = 0;
  let valido = false;
  while (!valido) {
    const entrada = prompt(mensaje);
    valor = Number(entrada);
    if (entrada === null || entrada.trim() === "" || !Number.isInteger(valor) || valor < min || valor > max) {
      alert("Entrada no válida. Intente de nuevo.");
    } else {
      valido = true;
    }
  }
  return valor;
}

// ============================================================
//  MENÚS
// ============================================================

function mostrarMenuPrincipal() {
  return leerEntero(
    "=== AVENTURA PARK - TAQUILLA ===\n" +
    "1. Registrar visitante / grupo\n" +
    "2. Ver balance del día\n" +
    "3. Salir del sistema\n\n" +
    "Elija una opción:", 1, 3);
}

function mostrarMenuZonas(subtotal, pases) {
  return leerEntero(
    "=== ZONAS DEL PARQUE ===\n" +
    "Llevas " + pases + " pase(s) | Subtotal: " + formatearDinero(subtotal) + "\n\n" +
    "1. Zona Extrema (Montañas Rusas)\n" +
    "2. Zona Familiar e Infantil\n" +
    "3. Zona Acuática\n" +
    "4. Finalizar compra y facturar\n\n" +
    "Elija una opción:", 1, 4);
}

function mostrarMenuAtracciones(zona) {
  let texto = "";
  switch (zona) {
    case 1:
      texto = "=== ZONA EXTREMA ===\n" +
        "1. Pase Vértigo (Montaña Rusa Principal): $20.000\n" +
        "2. Caída Libre 60m: $18.000\n" +
        "3. Simulador 4D Extremo: $15.000\n" +
        "4. Volver al menú de zonas\n\nElija una opción:";
      break;
    case 2:
      texto = "=== ZONA FAMILIAR E INFANTIL ===\n" +
        "1. Carrusel Clásico: $8.000\n" +
        "2. Carros Chocones: $10.000\n" +
        "3. Rueda de la Fortuna Panorámica: $12.000\n" +
        "4. Volver al menú de zonas\n\nElija una opción:";
      break;
    case 3:
      texto = "=== ZONA ACUÁTICA ===\n" +
        "1. Piscina de Olas: $14.000\n" +
        "2. Tobogán Tornado: $16.000\n" +
        "3. Pase Río Lento: $9.000\n" +
        "4. Volver al menú de zonas\n\nElija una opción:";
      break;
  }
  return leerEntero(texto, 1, 4);
}

// ============================================================
//  CÁLCULOS
// ============================================================

function obtenerPrecio(zona, atraccion) {
  let precio = 0;
  if (zona === 1) {
    if (atraccion === 1) precio = 20000;
    else if (atraccion === 2) precio = 18000;
    else if (atraccion === 3) precio = 15000;
  } else if (zona === 2) {
    if (atraccion === 1) precio = 8000;
    else if (atraccion === 2) precio = 10000;
    else if (atraccion === 3) precio = 12000;
  } else if (zona === 3) {
    if (atraccion === 1) precio = 14000;
    else if (atraccion === 2) precio = 16000;
    else if (atraccion === 3) precio = 9000;
  }
  return precio;
}

function obtenerNombre(zona, atraccion) {
  let nombre = "";
  if (zona === 1) {
    if (atraccion === 1) nombre = "Pase Vértigo";
    else if (atraccion === 2) nombre = "Caída Libre 60m";
    else if (atraccion === 3) nombre = "Simulador 4D Extremo";
  } else if (zona === 2) {
    if (atraccion === 1) nombre = "Carrusel Clásico";
    else if (atraccion === 2) nombre = "Carros Chocones";
    else if (atraccion === 3) nombre = "Rueda de la Fortuna Panorámica";
  } else if (zona === 3) {
    if (atraccion === 1) nombre = "Piscina de Olas";
    else if (atraccion === 2) nombre = "Tobogán Tornado";
    else if (atraccion === 3) nombre = "Pase Río Lento";
  }
  return nombre;
}

// Aplica 12% por grupo/volumen; si no aplica y paga en efectivo, 5%
function calcularDescuento(subtotal, pases, esEfectivo) {
  let descuento = 0;
  if (pases >= MINIMO_PASES_GRUPO && subtotal > MINIMO_SUBTOTAL_GRUPO) {
    descuento = subtotal * DESCUENTO_GRUPO;
  } else if (esEfectivo) {
    descuento = subtotal * DESCUENTO_EFECTIVO;
  }
  return descuento;
}

function calcularTotal(subtotal, descuento, seguro) {
  return subtotal - descuento + seguro;
}

// ============================================================
//  FACTURACIÓN Y BALANCE
// ============================================================

function facturar(subtotal, pases) {
  const medioPago = leerEntero("Medio de pago:\n1. Efectivo\n2. Tarjeta / otro", 1, 2);
  const esEfectivo = medioPago === 1;

  const quiereSeguro = leerEntero(
    "¿Desea agregar el seguro médico de accidentes por " + formatearDinero(VALOR_SEGURO) + "?\n1. Sí\n2. No", 1, 2);
  const seguro = quiereSeguro === 1 ? VALOR_SEGURO : 0;

  const descuento = calcularDescuento(subtotal, pases, esEfectivo);
  const total = calcularTotal(subtotal, descuento, seguro);

  alert(
    "=== RESUMEN DE COMPRA ===\n" +
    "Pases comprados:  " + pases + "\n" +
    "Subtotal:         " + formatearDinero(subtotal) + "\n" +
    "Descuento:        -" + formatearDinero(descuento) + "\n" +
    "Seguro médico:    " + formatearDinero(seguro) + "\n" +
    "-----------------------------\n" +
    "TOTAL A PAGAR:    " + formatearDinero(total));

  // Acumuladores de la jornada
  totalVisitantes++;
  totalRecaudado += total;
  totalPases += pases;
}

function mostrarBalance() {
  let promedio = 0;
  if (totalVisitantes > 0) {
    promedio = totalRecaudado / totalVisitantes;
  }
  alert(
    "=== BALANCE DEL DÍA ===\n" +
    "Visitantes/grupos registrados: " + totalVisitantes + "\n" +
    "Total recaudado:               " + formatearDinero(totalRecaudado) + "\n" +
    "Total de pases vendidos:       " + totalPases + "\n" +
    "Promedio de compra por visitante: " + formatearDinero(promedio));
}

// ============================================================
//  PROGRAMA PRINCIPAL (3 ciclos anidados)
// ============================================================

function iniciarTaquilla() {
  let opcionPrincipal = 0;

  // CICLO 1: menú principal
  while (opcionPrincipal !== 3) {
    opcionPrincipal = mostrarMenuPrincipal();

    if (opcionPrincipal === 1) {
      // Datos de la compra del visitante actual
      let subtotal = 0;
      let pases = 0;
      let opcionZona = 0;

      // CICLO 2: menú de zonas
      while (opcionZona !== 4) {
        opcionZona = mostrarMenuZonas(subtotal, pases);

        if (opcionZona >= 1 && opcionZona <= 3) {
          let opcionAtraccion = 0;

          // CICLO 3: menú de atracciones de la zona
          while (opcionAtraccion !== 4) {
            opcionAtraccion = mostrarMenuAtracciones(opcionZona);

            if (opcionAtraccion >= 1 && opcionAtraccion <= 3) {
              const cantidad = leerEntero("¿Cuántos pases desea? (mayor a 0)", 1, Infinity);
              const precio = obtenerPrecio(opcionZona, opcionAtraccion);
              subtotal += precio * cantidad;
              pases += cantidad;
              alert("Agregado: " + cantidad + " x " + obtenerNombre(opcionZona, opcionAtraccion) +
                    " = " + formatearDinero(precio * cantidad));
            }
          }
        } else if (opcionZona === 4) {
          if (pases === 0) {
            alert("No se agregó ningún pase. No se registra la compra.");
          } else {
            facturar(subtotal, pases);
          }
        }
      }
    } else if (opcionPrincipal === 2) {
      mostrarBalance();
    } else {
      alert("Taquilla cerrada. ¡Hasta mañana!");
    }
  }
}

iniciarTaquilla();
