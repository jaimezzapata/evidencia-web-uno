//EJERCICIO 4
//Planteamiento del Problema: Centro Fitness "FitZone Club"

// VARIABLES GLOBALES PARA EL BALANCE DE CAJA
let totalUsuarios = 0;
let totalRecaudado = 0;
let totalArticulosFacturados = 0;

// FUNCION PARA MOSTRAR EL MENU PRINCIPAL
function mostrarMenuPrincipal() {
  return prompt(
    "FITZONE CLUB\n\n" +
      "1. Atender socio / nuevo usuario\n" +
      "2. Ver balance de caja del dia\n" +
      "3. Salir del sistema\n\n" +
      "Seleccione una opcion:",
  );
}

// FUNCION PARA MOSTRAR EL MENU DE SERVICIOS
function mostrarMenuServicios() {
  return prompt(
    "MENU DE SERVICIOS Y TIENDA\n\n" +
      "1. Planes de Membresia\n" +
      "2. Clases y Entrenador Personalizado\n" +
      "3. Tienda Fitness y Suplementos\n" +
      "4. Finalizar compra y facturar\n\n" +
      "Seleccione una opcion:",
  );
}

// FUNCION PARA CALCULAR EL DESCUENTO
function calcularDescuento(subtotal, efectivo, estudiante) {
  let descuento = 0;

  if (estudiante == "si") {
    descuento = subtotal * 0.08;
  } else if (efectivo == "si" && subtotal > 100000) {
    descuento = subtotal * 0.1;
  }

  return descuento;
}

// FUNCION PARA CALCULAR EL TOTAL
function calcularTotal(subtotal, descuento, seguro) {
  return subtotal - descuento + seguro;
}

// FUNCION PARA MOSTRAR EL BALANCE DE CAJA
function mostrarBalance() {
  let promedio = 0;

  if (totalUsuarios > 0) {
    promedio = totalRecaudado / totalUsuarios;
  }

  alert(
    "BALANCE DE CAJA DEL DIA\n\n" +
      "Usuarios atendidos: " +
      totalUsuarios +
      "\n" +
      "Total recaudado: $" +
      totalRecaudado.toFixed(0) +
      "\n" +
      "Servicios, meses y productos facturados: " +
      totalArticulosFacturados +
      "\n" +
      "Promedio de compra por usuario: $" +
      promedio.toFixed(2),
  );
}

// CICLO 1: MENU PRINCIPAL
let opcionPrincipal = "";

while (opcionPrincipal != "3") {
  opcionPrincipal = mostrarMenuPrincipal();

  if (opcionPrincipal == null) {
    opcionPrincipal = "3";
  }

  switch (opcionPrincipal) {
    case "1":
// VARIABLES DE LA COMPRA ACTUAL
      let subtotal = 0;
      let cantidadFacturada = 0;
      let opcionServicios = "";

// CICLO 2: MENU DE SERVICIOS Y TIENDA
      while (opcionServicios != "4") {
        opcionServicios = mostrarMenuServicios();

        if (opcionServicios == null) {
          opcionServicios = "4";
        }

        switch (opcionServicios) {
// CICLO 3: PLANES DE MEMBRESIA
          case "1":
            let opcionPlan = "";

            while (opcionPlan != "4") {
              opcionPlan = prompt(
                "PLANES DE MEMBRESIA\n\n" +
                  "1. Pase Diario / Tiquetera 1 dia: $15000\n" +
                  "2. Mensualidad Basica: $80000\n" +
                  "3. Mensualidad VIP: $120000\n" +
                  "4. Volver al menu de servicios\n\n" +
                  "Seleccione una opcion:",
              );

              if (opcionPlan == null) {
                opcionPlan = "4";
              }

              if (opcionPlan == "1" || opcionPlan == "2" || opcionPlan == "3") {
                let cantidad = Number(
                  prompt("Ingrese la cantidad de pases o meses:"),
                );

                if (cantidad > 0 && Number.isInteger(cantidad)) {
                  if (opcionPlan == "1") {
                    subtotal = subtotal + 15000 * cantidad;
                  } else if (opcionPlan == "2") {
                    subtotal = subtotal + 80000 * cantidad;
                  } else if (opcionPlan == "3") {
                    subtotal = subtotal + 120000 * cantidad;
                  }

                  cantidadFacturada = cantidadFacturada + cantidad;

                  alert("Producto agregado correctamente.");
                } else {
                  alert("La cantidad debe ser un numero entero mayor a 0.");
                }
              } else if (opcionPlan != "4") {
                alert("Opcion no valida.");
              }
            }

            break;
// CICLO 3: CLASES Y ENTRENADOR PERSONALIZADO
          case "2":
            let opcionClase = "";

            while (opcionClase != "4") {
              opcionClase = prompt(
                "CLASES Y ENTRENADOR PERSONALIZADO\n\n" +
                  "1. Clase de Spinning: $18000\n" +
                  "2. Entrenador Personal (1 hora): $35000\n" +
                  "3. Clase de Funcional / Cross: $20000\n" +
                  "4. Volver al menu de servicios\n\n" +
                  "Seleccione una opcion:",
              );

              if (opcionClase == null) {
                opcionClase = "4";
              }

              if (
                opcionClase == "1" ||
                opcionClase == "2" ||
                opcionClase == "3"
              ) {
                let cantidad = Number(
                  prompt("Ingrese la cantidad de clases o sesiones:"),
                );

                if (cantidad > 0 && Number.isInteger(cantidad)) {
                  if (opcionClase == "1") {
                    subtotal = subtotal + 18000 * cantidad;
                  } else if (opcionClase == "2") {
                    subtotal = subtotal + 35000 * cantidad;
                  } else if (opcionClase == "3") {
                    subtotal = subtotal + 20000 * cantidad;
                  }

                  cantidadFacturada = cantidadFacturada + cantidad;

                  alert("Servicio agregado correctamente.");
                } else {
                  alert("La cantidad debe ser un numero entero mayor a 0.");
                }
              } else if (opcionClase != "4") {
                alert("Opcion no valida.");
              }
            }

            break;

// CICLO 3: TIENDA FITNESS Y SUPLEMENTOS
          case "3":
            let opcionProducto = "";

            while (opcionProducto != "4") {
              opcionProducto = prompt(
                "TIENDA FITNESS Y SUPLEMENTOS\n\n" +
                  "1. Bebida Hidratante / Energizante: $7000\n" +
                  "2. Barra de Proteina: $9000\n" +
                  "3. Termo Deportivo Oficial: $25000\n" +
                  "4. Volver al menu de servicios\n\n" +
                  "Seleccione una opcion:",
              );

              if (opcionProducto == null) {
                opcionProducto = "4";
              }

              if (
                opcionProducto == "1" ||
                opcionProducto == "2" ||
                opcionProducto == "3"
              ) {
                let cantidad = Number(
                  prompt("Ingrese la cantidad de productos:"),
                );

                if (cantidad > 0 && Number.isInteger(cantidad)) {
                  if (opcionProducto == "1") {
                    subtotal = subtotal + 7000 * cantidad;
                  } else if (opcionProducto == "2") {
                    subtotal = subtotal + 9000 * cantidad;
                  } else if (opcionProducto == "3") {
                    subtotal = subtotal + 25000 * cantidad;
                  }

                  cantidadFacturada = cantidadFacturada + cantidad;

                  alert("Producto agregado correctamente.");
                } else {
                  alert("La cantidad debe ser un numero entero mayor a 0.");
                }
              } else if (opcionProducto != "4") {
                alert("Opcion no valida.");
              }
            }

            break;

// FINALIZAR COMPRA Y FACTURAR
          case "4":
            if (subtotal > 0) {
              let efectivo = prompt("¿El usuario paga en efectivo? (si/no)");

              let estudiante = prompt(
                "¿El usuario presenta carné de estudiante valido? (si/no)",
              );

              efectivo = efectivo == null ? "no" : efectivo.toLowerCase();
              estudiante = estudiante == null ? "no" : estudiante.toLowerCase();

              let descuento = calcularDescuento(subtotal, efectivo, estudiante);

              let seguroRespuesta = prompt(
                "¿Desea incluir el seguro deportivo por $6000? (si/no)",
              );

              let seguro = 0;

              if (
                seguroRespuesta != null &&
                seguroRespuesta.toLowerCase() == "si"
              ) {
                seguro = 6000;
              }

              let total = calcularTotal(subtotal, descuento, seguro);

// MOSTRAR FACTURA
              alert(
                "FACTURA - FITZONE CLUB\n\n" +
                  "Subtotal: $" +
                  subtotal.toFixed(0) +
                  "\n" +
                  "Descuento aplicado: $" +
                  descuento.toFixed(0) +
                  "\n" +
                  "Seguro deportivo: $" +
                  seguro.toFixed(0) +
                  "\n" +
                  "TOTAL A PAGAR: $" +
                  total.toFixed(0),
              );

// ACTUALIZAR ESTADISTICAS GLOBALES
              totalUsuarios = totalUsuarios + 1;
              totalRecaudado = totalRecaudado + total;
              totalArticulosFacturados =
                totalArticulosFacturados + cantidadFacturada;
            } else {
              alert("No hay productos ni servicios para facturar.");
              opcionServicios = "";
            }

            break;

          default:
            alert("Opcion no valida. Intente nuevamente.");
        }
      }

      break;

    case "2":
// MOSTRAR ESTADISTICAS DE LA JORNADA
      mostrarBalance();

      break;

    case "3":
      alert("Recepcion cerrada. Gracias por utilizar FitZone Club.");

      break;

    default:
      alert("Opcion no valida. Intente nuevamente.");
  }
}
