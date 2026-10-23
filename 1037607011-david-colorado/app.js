let totalVisitantes = 0;
let totalDineroRecaudado = 0;
let totalPasesVendidos = 0;

function calcularDescuento(pases, subtotal, esEfectivo) {
  if (pases >= 5 && subtotal > 50000) {
    return subtotal * 0.12;
  } else if (esEfectivo) {
    return subtotal * 0.05;
  }
  return 0;
}

function mostrarBalance() {
  alert("=== BALANCE DE LA JORNADA ===" +
    "\n1. Total visitantes/grupos registrados: " + totalVisitantes +
    "\n2. Total dinero recaudado: $" + totalDineroRecaudado +
    "\n3. Total pases vendidos: " + totalPasesVendidos +
    "\n4. Promedio de compra por visitante: $" + (totalVisitantes > 0 ? (totalDineroRecaudado / totalVisitantes).toFixed(2) : 0)
  );
}

let menuPrincipal = true;

while (menuPrincipal) {
  let opcionPrincipal = prompt(
    "=== PARQUE DE DIVERSIONES - AVENTURA PARK ===\n" +
    "1. Registrar visitante / grupo\n" +
    "2. Ver balance del día\n" +
    "3. Salir del sistema\n" +
    "Ingrese una opción (1-3):"
  );

  switch (opcionPrincipal) {
    case "1": {
      let pasesVisitante = 0;
      let subtotalVisitante = 0;
      let menuZonas = true;

      while (menuZonas) {
        let opcionZona = prompt(
          "=== MENÚ DE ZONAS ===\n" +
          "1. Zona Extrema (Montañas Rusas)\n" +
          "2. Zona Familiar e Infantil\n" +
          "3. Zona Acuática\n" +
          "4. Finalizar compra y facturar\n" +
          "Ingrese una opción (1-4):"
        );

        switch (opcionZona) {
          case "1": {
            let menuAtracciones = true;
            while (menuAtracciones) {
              let opcionAtraccion = prompt(
                "--- ZONA EXTREMA ---\n" +
                "a. Pase Vértigo (Montaña Rusa Principal): $20.000\n" +
                "b. Caída Libre 60m: $18.000\n" +
                "c. Simulador 4D Extremo: $15.000\n" +
                "d. Volver al menú de zonas\n" +
                "Seleccione una opción (a, b, c, d):"
              );

              if (opcionAtraccion === "a" || opcionAtraccion === "b" || opcionAtraccion === "c") {
                let precio = 0;
                if (opcionAtraccion === "a") precio = 20000;
                if (opcionAtraccion === "b") precio = 18000;
                if (opcionAtraccion === "c") precio = 15000;

                let cantidad = parseInt(prompt("Ingrese la cantidad de pases (mayor a 0):"));
                if (!isNaN(cantidad) && cantidad > 0) {
                  pasesVisitante += cantidad;
                  subtotalVisitante += precio * cantidad;
                  alert("Pases agregados exitosamente.");
                } else {
                  alert("Cantidad inválida.");
                }
              } else if (opcionAtraccion === "d" || opcionAtraccion === "D") {
                menuAtracciones = false;
              } else {
                alert("Opción inválida.");
              }
            }
            break;
          }

          case "2": {
            let menuAtracciones = true;
            while (menuAtracciones) {
              let opcionAtraccion = prompt(
                "--- ZONA FAMILIAR E INFANTIL ---\n" +
                "a. Carrusel Clásico: $8.000\n" +
                "b. Carros Chocones: $10.000\n" +
                "c. Rueda de la Fortuna Panorámica: $12.000\n" +
                "d. Volver al menú de zonas\n" +
                "Seleccione una opción (a, b, c, d):"
              );

              if (opcionAtraccion === "a" || opcionAtraccion === "b" || opcionAtraccion === "c") {
                let precio = 0;
                if (opcionAtraccion === "a") precio = 8000;
                if (opcionAtraccion === "b") precio = 10000;
                if (opcionAtraccion === "c") precio = 12000;

                let cantidad = parseInt(prompt("Ingrese la cantidad de pases (mayor a 0):"));
                if (!isNaN(cantidad) && cantidad > 0) {
                  pasesVisitante += cantidad;
                  subtotalVisitante += precio * cantidad;
                  alert("Pases agregados exitosamente.");
                } else {
                  alert("Cantidad inválida.");
                }
              } else if (opcionAtraccion === "d" || opcionAtraccion === "D") {
                menuAtracciones = false;
              } else {
                alert("Opción inválida.");
              }
            }
            break;
          }

          case "3": {
            let menuAtracciones = true;
            while (menuAtracciones) {
              let opcionAtraccion = prompt(
                "--- ZONA ACUÁTICA ---\n" +
                "a. Piscina de Olas: $14.000\n" +
                "b. Tobogán Tornado: $16.000\n" +
                "c. Pase Río Lento: $9.000\n" +
                "d. Volver al menú de zonas\n" +
                "Seleccione una opción (a, b, c, d):"
              );

              if (opcionAtraccion === "a" || opcionAtraccion === "b" || opcionAtraccion === "c") {
                let precio = 0;
                if (opcionAtraccion === "a") precio = 14000;
                if (opcionAtraccion === "b") precio = 16000;
                if (opcionAtraccion === "c") precio = 9000;

                let cantidad = parseInt(prompt("Ingrese la cantidad de pases (mayor a 0):"));
                if (!isNaN(cantidad) && cantidad > 0) {
                  pasesVisitante += cantidad;
                  subtotalVisitante += precio * cantidad;
                  alert("Pases agregados exitosamente.");
                } else {
                  alert("Cantidad inválida.");
                }
              } else if (opcionAtraccion === "d" || opcionAtraccion === "D") {
                menuAtracciones = false;
              } else {
                alert("Opción inválida.");
              }
            }
            break;
          }

          case "4": {
            if (pasesVisitante === 0) {
              alert("No ha seleccionado ninguna atracción todavía.");
              menuZonas = false;
              break;
            }

            let respEfectivo = prompt("¿Realizará el pago en efectivo? (SI/NO):");
            let pagoEfectivo = respEfectivo !== null && respEfectivo.trim().toUpperCase() === "SI";

            let respSeguro = prompt("¿Desea incluir seguro médico de accidentes por $5.000? (SI/NO):");
            let seguro = (respSeguro !== null && respSeguro.trim().toUpperCase() === "SI") ? 5000 : 0;

            let descuento = calcularDescuento(pasesVisitante, subtotalVisitante, pagoEfectivo);
            let totalPagar = subtotalVisitante - descuento + seguro;

            alert(
              "=== RESUMEN DE COMPRA ===\n" +
              "Subtotal: $" + subtotalVisitante + "\n" +
              "Descuento aplicado: $" + descuento + "\n" +
              "Seguro médico: $" + seguro + "\n" +
              "---------------------------\n" +
              "TOTAL A PAGAR: $" + totalPagar
            );

            totalVisitantes++;
            totalDineroRecaudado += totalPagar;
            totalPasesVendidos += pasesVisitante;

            menuZonas = false;
            break;
          }

          default:
            alert("Opción no válida en el menú de zonas.");
            break;
        }
      }
      break;
    }

    case "2":
      mostrarBalance();
      break;

    case "3":
      alert("Cerrando la taquilla del parque...");
      menuPrincipal = false;
      break;

    default:
      alert("Opción inválida. Intente de nuevo.");
      break;
  }
}