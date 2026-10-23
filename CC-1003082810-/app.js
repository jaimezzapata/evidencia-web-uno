// Variable principal para controlar el menú del sistema (inicia en 0)
let opcionPrincipal = 0;

// Variables globales para llevar las estadísticas generales del negocio
let clientesAtendidos = 0;
let totalPlata = 0;
let totalProductos = 0;

// Bucle principal: se mantiene abierto hasta que el usuario elija la opción 3 (Salir)
while (opcionPrincipal != 3) {
  // Muestra el menú principal y convierte la respuesta a número entero
  opcionPrincipal = prompt("1. Atender cliente\n2. Ver balance\n3. Salir");
  opcionPrincipal = parseInt(opcionPrincipal);

  // OPCIÓN 1: Atender a un nuevo cliente
  if (opcionPrincipal == 1) {
    let subtotal = 0;        // Acumula el dinero de los productos del cliente actual
    let productosCliente = 0; // Cuenta cuántos productos lleva este cliente
    let opcionArea = 0;      // Controla el submenú de categorías (Entradas, Confitería, etc.)

    // Bucle para el menú de áreas hasta que el usuario elija "Facturar" (opción 4)
    while (opcionArea != 4) {
      opcionArea = prompt("1. Entradas\n2. Confiteria\n3. Combos\n4. Facturar");
      opcionArea = parseInt(opcionArea);

      // Submenú 1: Entradas de cine
      if (opcionArea == 1) {
        let opcionEntrada = 0;

        while (opcionEntrada != 4) {
          opcionEntrada = prompt("1. 2D ($12000)\n2. 3D ($16000)\n3. VIP ($22000)\n4. Volver");
          opcionEntrada = parseInt(opcionEntrada);

          // Entrada 2D
          if (opcionEntrada == 1) {
            let cant = prompt("Cantidad:");
            cant = parseInt(cant);
            if (cant > 0) {
              subtotal = subtotal + (12000 * cant);
              productosCliente = productosCliente + cant;
              alert("Agregado");
            } else {
              alert("Tiene que ser mayor a 0");
            }
          }

          // Entrada 3D
          if (opcionEntrada == 2) {
            let cant = prompt("Cantidad:");
            cant = parseInt(cant);
            if (cant > 0) {
              subtotal = subtotal + (16000 * cant);
              productosCliente = productosCliente + cant;
              alert("Agregado");
            } else {
              alert("Tiene que ser mayor a 0");
            }
          }

          // Entrada VIP
          if (opcionEntrada == 3) {
            let cant = prompt("Cantidad:");
            cant = parseInt(cant);
            if (cant > 0) {
              subtotal = subtotal + (22000 * cant);
              productosCliente = productosCliente + cant;
              alert("Agregado");
            } else {
              alert("Tiene que ser mayor a 0");
            }
          }
        }
      }

      // Submenú 2: Confitería (Snacks)
      if (opcionArea == 2) {
        let opcionSnack = 0;

        while (opcionSnack != 4) {
          opcionSnack = prompt("1. Crispetas ($10000)\n2. Gaseosa ($6000)\n3. Perro ($8500)\n4. Volver");
          opcionSnack = parseInt(opcionSnack);

          // Crispetas
          if (opcionSnack == 1) {
            let cant = prompt("Cantidad:");
            cant = parseInt(cant);
            if (cant > 0) {
              subtotal = subtotal + (10000 * cant);
              productosCliente = productosCliente + cant;
              alert("Agregado");
            } else {
              alert("Tiene que ser mayor a 0");
            }
          }

          // Gaseosa
          if (opcionSnack == 2) {
            let cant = prompt("Cantidad:");
            cant = parseInt(cant);
            if (cant > 0) {
              subtotal = subtotal + (6000 * cant);
              productosCliente = productosCliente + cant;
              alert("Agregado");
            } else {
              alert("Tiene que ser mayor a 0");
            }
          }

          // Perro caliente
          if (opcionSnack == 3) {
            let cant = prompt("Cantidad:");
            cant = parseInt(cant);
            if (cant > 0) {
              subtotal = subtotal + (8500 * cant);
              productosCliente = productosCliente + cant;
              alert("Agregado");
            } else {
              alert("Tiene que ser mayor a 0");
            }
          }
        }
      }

      // Submenú 3: Combos
      if (opcionArea == 3) {
        let opcionCombo = 0;

        while (opcionCombo != 4) {
          opcionCombo = prompt("1. Combo Personal ($13500)\n2. Combo Pareja ($24000)\n3. Combo Familiar ($38000)\n4. Volver");
          opcionCombo = parseInt(opcionCombo);

          // Combo Personal
          if (opcionCombo == 1) {
            let cant = prompt("Cantidad:");
            cant = parseInt(cant);
            if (cant > 0) {
              subtotal = subtotal + (13500 * cant);
              productosCliente = productosCliente + cant;
              alert("Agregado");
            } else {
              alert("Tiene que ser mayor a 0");
            }
          }

          // Combo Pareja
          if (opcionCombo == 2) {
            let cant = prompt("Cantidad:");
            cant = parseInt(cant);
            if (cant > 0) {
              subtotal = subtotal + (24000 * cant);
              productosCliente = productosCliente + cant;
              alert("Agregado");
            } else {
              alert("Tiene que ser mayor a 0");
            }
          }

          // Combo Familiar
          if (opcionCombo == 3) {
            let cant = prompt("Cantidad:");
            cant = parseInt(cant);
            if (cant > 0) {
              subtotal = subtotal + (38000 * cant);
              productosCliente = productosCliente + cant;
              alert("Agregado");
            } else {
              alert("Tiene que ser mayor a 0");
            }
          }
        }
      }

      // Submenú 4: Facturación y aplicación de descuentos/donaciones
      if (opcionArea == 4) {
        // Valida que el cliente haya comprado al menos un producto
        if (productosCliente > 0) {
          let descuento = 0;
          let tarjeta = prompt("¿Tiene tarjeta CineStar Club? (si/no)");

          // Si tiene tarjeta, se aplica un 15% de descuento
          if (tarjeta == "si") {
            descuento = subtotal * 0.15;
          } else {
            // Si no tiene tarjeta, evalúa si paga en efectivo
            let efectivo = prompt("¿Paga en efectivo? (si/no)");
            if (efectivo == "si") {
              // Si el subtotal supera $30000 en efectivo, obtiene un 5% de descuento
              if (subtotal > 30000) {
                descuento = subtotal * 0.05;
              }
            }
          }

          let donacion = 0;
          let quiereDonar = prompt("¿Desea donar $2000? (si/no)");
          if (quiereDonar == "si") {
            donacion = 2000;
          }

          // Calcula el valor total final a pagar
          let totalPagar = subtotal - descuento + donacion;

          // Muestra el resumen de la factura al cliente
          alert("Subtotal: $" + subtotal + "\nDescuento: $" + descuento + "\nDonacion: $" + donacion + "\nTotal: $" + totalPagar);

          // Actualiza las estadísticas globales del negocio
          clientesAtendidos = clientesAtendidos + 1;
          totalPlata = totalPlata + totalPagar;
          totalProductos = totalProductos + productosCliente;
        } else {
          alert("No compró nada");
        }
      }
    }
  }

  // OPCIÓN 2: Ver el balance general del día
  if (opcionPrincipal == 2) {
    let promedio = 0;
    // Evita división por cero si aún no se ha atendido a ningún cliente
    if (clientesAtendidos > 0) {
      promedio = totalPlata / clientesAtendidos;
    }

    // Muestra las estadísticas acumuladas hasta el momento
    alert("Clientes atendidos: " + clientesAtendidos + "\nTotal recaudado: $" + totalPlata + "\nProductos vendidos: " + totalProductos + "\nPromedio por cliente: $" + promedio);
  }
}

// Mensaje al salir del ciclo principal
alert("Programa terminado");