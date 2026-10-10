// VARIABLES GLOBALES 
let cantidadClientes = 0;
let totalProductosServicios = 0;
let opcionPrincipal, opcionDepartamento, opcionProducto;
let subtotalCliente = 0;
let totalCliente = 0;
let descuento = 0;
let donacion = 0;
let nombreCliente, tipoMascota, esAfiliado, deseaDonar;
let cantidad;

//  FUNCIONES 
function mostrarMenuPrincipal() {
  console.log("\n===== PET CENTER - SISTEMA DE VENTAS =====");
  console.log("1. Atender cliente");
  console.log("2. Ver balance de la jornada");
  console.log("3. Salir del sistema");
  return prompt("Seleccione una opción:");
}

function mostrarMenuDepartamentos() {
  console.log("\n===== DEPARTAMENTOS =====");
  console.log("1. Alimentos y Nutrición");
  console.log("2. Accesorios y Juguetes");
  console.log("3. Servicios de Higiene y Cuidado");
  console.log("4. Finalizar compra y facturar");
  return prompt("Seleccione un departamento:");
}

function calcularDescuento(subtotal, afiliado) {
  if (afiliado === "si") {
    console.log("¡Descuento del 15% por ser afiliado al Club de Mascotas!");
    return subtotal * 0.15;
  } else if (subtotal > 70000) {
    console.log("¡Descuento del 8% por compra mayor a $70.000!");
    return subtotal * 0.08;
  } else {
    console.log("No aplica descuento");
    return 0;
  }
}

function calcularTotal(subtotal, descuento, donacion) {
  return subtotal - descuento + donacion;
}

function mostrarFactura(nombre, mascota, afiliado, subtotal, descuento, donacion, total) {
  console.log("\n========== FACTURA ==========");
  console.log("Cliente:      " + nombre);
  console.log("Mascota:      " + mascota);
  console.log("Afiliado:     " + (afiliado === "si" ? "Sí" : "No"));
  console.log("------------------------------");
  console.log("Subtotal:     $" + subtotal.toFixed(2));
  console.log("Descuento:   -$" + descuento.toFixed(2));
  console.log("Donación:    +$" + donacion.toFixed(2));
  console.log("TOTAL A PAGAR:$" + total.toFixed(2));
  console.log("==============================\n");
}

function mostrarBalance(clientes, totalRecaudado, totalItems) {
  console.log("\n===== BALANCE DE LA JORNADA =====");
  console.log("Clientes atendidos:     " + clientes);
  console.log("Total recaudado:        $" + totalRecaudado.toFixed(2));
  console.log("Prod/Serv vendidos:     " + totalItems);
  let promedio = clientes > 0 ? totalRecaudado / clientes : 0;
  console.log("Promedio por cliente:   $" + promedio.toFixed(2));
  console.log("==================================\n");
}

//  CICLO 1 — MENÚ PRINCIPAL 
while (true) {
  opcionPrincipal = mostrarMenuPrincipal();

  // Opción 3: Salir del sistema
  if (opcionPrincipal === "3") {
    console.log("\nCerrando caja... ¡Gracias por usar Pet Center!");
    mostrarBalance(cantidadClientes, totalVentasDia, totalProductosServicios);
    break;
  }

  // Opción 2: Ver balance
  if (opcionPrincipal === "2") {
    mostrarBalance(cantidadClientes, totalVentasDia, totalProductosServicios);
    continue;
  }

  // Opción 1: Atender cliente
  if (opcionPrincipal === "1") {
    subtotalCliente = 0;
    descuento = 0;
    donacion = 0;
    
    nombreCliente = prompt("Nombre del dueño:");
    tipoMascota = prompt("Tipo de mascota:");
    esAfiliado = prompt("¿Es afiliado al Club de Mascotas? (si/no):").toLowerCase();
    
    console.log("\n Atendiendo a: " + nombreCliente + " |  Mascota: " + tipoMascota);

    //  CICLO 2 — MENÚ DE DEPARTAMENTOS 
    while (true) {
      opcionDepartamento = mostrarMenuDepartamentos();

      if (opcionDepartamento === "4") {
        break;
      }

      if (opcionDepartamento !== "1" && opcionDepartamento !== "2" && opcionDepartamento !== "3") {
        console.log("Opción inválida. Intente nuevamente.");
        continue;
      }

      //  CICLO 3 — MENÚ DE PRODUCTOS 
      while (true) {
        if (opcionDepartamento === "1") {
          console.log("\n===== ALIMENTOS Y NUTRICIÓN =====");
          console.log("1. Bulto Concentrado Premium (3 Kg): $45.000");
          console.log("2. Paquete de Galletas / Snacks: $12.000");
          console.log("3. Lata de Alimento Húmedo: $8.000");
          console.log("4. Volver al menú de departamentos");
          
          opcionProducto = prompt("Seleccione un producto:");
          
          if (opcionProducto === "4") break;
          
          if (opcionProducto === "1") {
            cantidad = Number(prompt("Cantidad (mayor a 0):"));
            if (cantidad > 0) {
              subtotalCliente += 45000 * cantidad;
              totalProductosServicios += cantidad;
            }
          } else if (opcionProducto === "2") {
            cantidad = Number(prompt("Cantidad (mayor a 0):"));
            if (cantidad > 0) {
              subtotalCliente += 12000 * cantidad;
              totalProductosServicios += cantidad;
            }
          } else if (opcionProducto === "3") {
            cantidad = Number(prompt("Cantidad (mayor a 0):"));
            if (cantidad > 0) {
              subtotalCliente += 8000 * cantidad;
              totalProductosServicios += cantidad;
            }
          }
          
        } else if (opcionDepartamento === "2") {
          console.log("\n===== ACCESORIOS Y JUGUETES =====");
          console.log("1. Correa y Collar Ajustable: $22.000");
          console.log("2. Juguete Mordedor Interactivo: $15.000");
          console.log("3. Cama Acolchada Mediana: $60.000");
          console.log("4. Volver al menú de departamentos");
          
          opcionProducto = prompt("Seleccione un producto:");
          
          if (opcionProducto === "4") break;
          
          if (opcionProducto === "1") {
            cantidad = Number(prompt("Cantidad (mayor a 0):"));
            if (cantidad > 0) {
              subtotalCliente += 22000 * cantidad;
              totalProductosServicios += cantidad;
            }
          } else if (opcionProducto === "2") {
            cantidad = Number(prompt("Cantidad (mayor a 0):"));
            if (cantidad > 0) {
              subtotalCliente += 15000 * cantidad;
              totalProductosServicios += cantidad;
            }
          } else if (opcionProducto === "3") {
            cantidad = Number(prompt("Cantidad (mayor a 0):"));
            if (cantidad > 0) {
              subtotalCliente += 60000 * cantidad;
              totalProductosServicios += cantidad;
            }
          }
          
        } else if (opcionDepartamento === "3") {
          console.log("\n===== SERVICIOS DE HIGIENE Y CUIDADO =====");
          console.log("1. Baño Medicado y Cepillado: $35.000");
          console.log("2. Corte de Pelo Canino/Felino: $28.000");
          console.log("3. Limpieza Dental y Uñas: $18.000");
          console.log("4. Volver al menú de departamentos");
          
          opcionProducto = prompt("Seleccione un servicio:");
          
          if (opcionProducto === "4") break;
          
          if (opcionProducto === "1") {
            subtotalCliente += 35000;
            totalProductosServicios += 1;
          } else if (opcionProducto === "2") {
            subtotalCliente += 28000;
            totalProductosServicios += 1;
          } else if (opcionProducto === "3") {
            subtotalCliente += 18000;
            totalProductosServicios += 1;
          }
        }
        
        console.log("Subtotal actual: $" + subtotalCliente.toFixed(2));
        break;
      }
    }

    // APLICAR DESCUENTO 
    descuento = calcularDescuento(subtotalCliente, esAfiliado);

    //  APORTE VOLUNTARIO 
    deseaDonar = prompt("¿Desea donar $3.000 al Refugio de Rescate Animal? (si/no):").toLowerCase();
    if (deseaDonar === "si") {
      donacion = 3000;
      console.log("¡Gracias por su donación de $3.000 al Refugio de Rescate Animal!");
    } else {
      donacion = 0;
    }

    //  CALCULAR TOTAL 
    totalCliente = calcularTotal(subtotalCliente, descuento, donacion);

    //  MOSTRAR FACTURA 
    mostrarFactura(nombreCliente, tipoMascota, esAfiliado, subtotalCliente, descuento, donacion, totalCliente);

    //  ACTUALIZAR ESTADÍSTICAS
    totalVentasDia += totalCliente;
    cantidadClientes++;
  }
}