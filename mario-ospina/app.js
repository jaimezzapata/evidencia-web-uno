const DESCUENTO_TARJETA = 0.15;
const DESCUENTO_EFECTIVO = 0.05;
const MINIMO_EFECTIVO = 30000;
const VALOR_DONACION = 2000;

let totalClientes = 0;
let totalRecaudado = 0;
let totalItemsVendidos = 0;

function formatear(valor) {
  return "$" + valor.toLocaleString("es-CO");
}

function leerOpcion(mensaje, min, max, valorCancelar) {
  let valida = false;
  let opcion = 0;

  while (!valida) {
    const entrada = prompt(mensaje);

    if (entrada === null) {
      return valorCancelar;
    }

    opcion = Number(entrada);

    if (entrada.trim() !== "" && Number.isInteger(opcion) && opcion >= min && opcion <= max) {
      valida = true;
    } else {
      alert("⚠️ Opción inválida. Ingresa un número entre " + min + " y " + max + ".");
    }
  }
  return opcion;
}

function leerSiNo(pregunta) {
  const opcion = leerOpcion(pregunta + "\n\n1. Sí\n2. No\n\nElige una opción:", 1, 2, 2);
  return opcion === 1;
}

function leerCantidad(nombreProducto) {
  let valida = false;
  let cantidad = 0;

  while (!valida) {
    const entrada = prompt("¿Cuántas unidades de \"" + nombreProducto + "\" desea?");

    if (entrada === null) {
      return 0;
    }

    cantidad = Number(entrada);

    if (entrada.trim() !== "" && Number.isInteger(cantidad) && cantidad > 0) {
      valida = true;
    } else {
      alert("⚠️ La cantidad debe ser un número entero mayor a 0.");
    }
  }
  return cantidad;
}

function textoMenuPrincipal() {
  return "🎬 CINESTAR - MENÚ PRINCIPAL\n\n" +
         "1. Atender cliente\n" +
         "2. Ver balance de la jornada\n" +
         "3. Salir del sistema\n\n" +
         "Elige una opción:";
}

function textoMenuAreas(subtotalActual) {
  return "🛒 ÁREAS DE VENTA\n" +
         "Subtotal actual: " + formatear(subtotalActual) + "\n\n" +
         "1. Entradas de Cine\n" +
         "2. Confitería y Snacks\n" +
         "3. Combos Especiales\n" +
         "4. Finalizar compra y facturar\n\n" +
         "Elige una opción:";
}

function textoMenuProductos(area) {
  switch (area) {
    case 1:
      return "🎟️ ENTRADAS DE CINE\n\n" +
             "1. Entrada General 2D: $12.000\n" +
             "2. Entrada Sala 3D: $16.000\n" +
             "3. Entrada VIP / IMAX: $22.000\n" +
             "4. Volver al menú de áreas\n\n" +
             "Elige una opción:";
    case 2:
      return "🍿 CONFITERÍA Y SNACKS\n\n" +
             "1. Crispetas / Palomitas Grandes: $10.000\n" +
             "2. Gaseosa Grande: $6.000\n" +
             "3. Perro Caliente / Hot Dog: $8.500\n" +
             "4. Volver al menú de áreas\n\n" +
             "Elige una opción:";
    case 3:
      return "🎁 COMBOS ESPECIALES\n\n" +
             "1. Combo Personal (Crispeta Mediana + Gaseosa): $13.500\n" +
             "2. Combo Pareja (Crispeta Grande + 2 Gaseosas + Dulce): $24.000\n" +
             "3. Combo Familiar (2 Crispetas Grandes + 3 Gaseosas + 2 Perros): $38.000\n" +
             "4. Volver al menú de áreas\n\n" +
             "Elige una opción:";
    default:
      return "";
  }
}

function obtenerNombre(area, producto) {
  switch (area) {
    case 1:
      if (producto === 1) return "Entrada General 2D";
      if (producto === 2) return "Entrada Sala 3D";
      return "Entrada VIP / IMAX";
    case 2:
      if (producto === 1) return "Crispetas Grandes";
      if (producto === 2) return "Gaseosa Grande";
      return "Perro Caliente";
    case 3:
      if (producto === 1) return "Combo Personal";
      if (producto === 2) return "Combo Pareja";
      return "Combo Familiar";
    default:
      return "";
  }
}

function obtenerPrecio(area, producto) {
  switch (area) {
    case 1:
      if (producto === 1) return 12000;
      if (producto === 2) return 16000;
      return 22000;
    case 2:
      if (producto === 1) return 10000;
      if (producto === 2) return 6000;
      return 8500;
    case 3:
      if (producto === 1) return 13500;
      if (producto === 2) return 24000;
      return 38000;
    default:
      return 0;
  }
}

function calcularDescuento(subtotal, tieneTarjeta, pagaEfectivo) {
  if (tieneTarjeta) {
    return subtotal * DESCUENTO_TARJETA;
  } else if (pagaEfectivo && subtotal > MINIMO_EFECTIVO) {
    return subtotal * DESCUENTO_EFECTIVO;
  }
  return 0;
}

function calcularTotal(subtotal, descuento, donacion) {
  return subtotal - descuento + donacion;
}

function facturar(subtotal) {
  const tieneTarjeta = leerSiNo("💳 ¿El cliente tiene Tarjeta CineStar Club?");
  let pagaEfectivo = false;

  if (!tieneTarjeta) {
    pagaEfectivo = leerSiNo("💵 ¿El cliente pagará en Efectivo?");
  }

  const descuento = calcularDescuento(subtotal, tieneTarjeta, pagaEfectivo);

  const quiereDonar = leerSiNo(
    "🎭 ¿Desea donar " + formatear(VALOR_DONACION) + " para el fondo de fomento cinematográfico nacional?"
  );
  const donacion = quiereDonar ? VALOR_DONACION : 0;

  const total = calcularTotal(subtotal, descuento, donacion);

  alert(
    "🧾 RESUMEN DE FACTURA\n" +
    "-----------------------------\n" +
    "Subtotal:   " + formatear(subtotal) + "\n" +
    "Descuento: -" + formatear(descuento) + "\n" +
    "Donación:  +" + formatear(donacion) + "\n" +
    "-----------------------------\n" +
    "TOTAL A PAGAR: " + formatear(total)
  );

  return total;
}

function mostrarBalance() {
  let promedio = 0;
  if (totalClientes > 0) {
    promedio = totalRecaudado / totalClientes;
  }

  alert(
    "📊 BALANCE DE LA JORNADA\n" +
    "-----------------------------\n" +
    "Clientes atendidos: " + totalClientes + "\n" +
    "Total recaudado: " + formatear(totalRecaudado) + "\n" +
    "Entradas y productos vendidos: " + totalItemsVendidos + "\n" +
    "Promedio de gasto por cliente: " + formatear(promedio)
  );
}

function iniciarTaquilla() {
  let opcionPrincipal = 0;

  while (opcionPrincipal !== 3) {
    opcionPrincipal = leerOpcion(textoMenuPrincipal(), 1, 3, 3);

    if (opcionPrincipal === 1) {
      let subtotal = 0;
      let itemsCliente = 0;
      let opcionArea = 0;

      while (opcionArea !== 4) {
        opcionArea = leerOpcion(textoMenuAreas(subtotal), 1, 4, 4);

        if (opcionArea >= 1 && opcionArea <= 3) {
          let opcionProducto = 0;

          while (opcionProducto !== 4) {
            opcionProducto = leerOpcion(textoMenuProductos(opcionArea), 1, 4, 4);

            if (opcionProducto >= 1 && opcionProducto <= 3) {
              const nombre = obtenerNombre(opcionArea, opcionProducto);
              const precio = obtenerPrecio(opcionArea, opcionProducto);
              const cantidad = leerCantidad(nombre);

              if (cantidad > 0) {
                subtotal += precio * cantidad;
                itemsCliente += cantidad;
                alert("✅ Agregado: " + cantidad + " x " + nombre + " = " + formatear(precio * cantidad));
              }
            }
          }
        } else if (opcionArea === 4) {
          if (subtotal === 0) {
            alert("⚠️ El cliente no compró nada. No se registra la venta.");
          } else {
            const totalPagar = facturar(subtotal);

            totalClientes++;
            totalRecaudado += totalPagar;
            totalItemsVendidos += itemsCliente;
          }
        }
      }
    } else if (opcionPrincipal === 2) {
      mostrarBalance();
    } else if (opcionPrincipal === 3) {
      alert("👋 Taquilla cerrada. ¡Hasta mañana!");
      mostrarBalance();
    }
  }
}
