// ===== VARIABLES GLOBALES =====
let totalVentasDia = 0;
let cantidadClientes = 0;
let totalProductosServicios = 0;
let opcionPrincipal, opcionDepartamento, opcionProducto;
let subtotalCliente = 0;
let totalCliente = 0;
let descuento = 0;
let donacion = 0;
let nombreCliente, tipoMascota, esAfiliado, deseaDonar;
let cantidad;

// ===== FUNCIONES =====
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
