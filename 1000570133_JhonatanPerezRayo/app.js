/* ============================================================
   TIENDA DE MASCOTAS "PET CENTER"
   Registro de ventas de mostrador y servicios para mascotas.

   Restricciones:
   - NO se usan arreglos ([]) ni objetos ({}).
   - Solo variables primitivas, contadores y acumuladores.
   - Se usan funciones, condicionales y ciclos anidados.
   ============================================================ */

/* ---------- Acumuladores globales de la jornada ---------- */
let totalClientesAtendidos = 0;
let totalDineroRecaudado = 0;
let totalProductosVendidos = 0;

/* ---------- Acumuladores de la compra del cliente actual ---------- */
let subtotalCliente = 0;
let itemsCliente = 0;

/* ============================================================
   FUNCIONES AUXILIARES
   ============================================================ */

/* Formatea un número entero como pesos colombianos sin usar objetos. */
function formatearMoneda(valor) {
  const redondeado = Math.round(valor);
  let texto = "";
  const signo = redondeado < 0 ? "-" : "";
  let cifras = String(Math.abs(redondeado));
  let contador = 0;

  for (let i = cifras.length - 1; i >= 0; i--) {
    texto = cifras.charAt(i) + texto;
    contador++;
    if (contador % 3 === 0 && i > 0) {
      texto = "." + texto;
    }
  }

  return signo + "$" + texto;
}

/* Solicita un número entero. Repite mientras no sea válido. */
function pedirEntero(mensaje) {
  let valor = parseInt(prompt(mensaje), 10);
  while (isNaN(valor)) {
    valor = parseInt(prompt("Valor inválido. " + mensaje), 10);
  }
  return valor;
}

/* Solicita una cantidad mayor a 0 (validación exigida). */
function pedirCantidad() {
  let cantidad = parseInt(prompt("Ingrese la cantidad (debe ser mayor a 0):"), 10);
  while (isNaN(cantidad) || cantidad <= 0) {
    cantidad = parseInt(prompt("Cantidad inválida. Debe ser mayor a 0:"), 10);
  }
  return cantidad;
}

/* ============================================================
   MENÚS
   ============================================================ */

/* Nivel 1: Menú principal de la caja. */
function mostrarMenuPrincipal() {
  const texto =
    "===== PET CENTER =====\n" +
    "1. Atender cliente\n" +
    "2. Ver balance de la jornada\n" +
    "3. Salir del sistema\n" +
    "Seleccione una opción:";
  return pedirEntero(texto);
}

/* Nivel 2: Menú de departamentos. */
function mostrarMenuDepartamentos() {
  const texto =
    "----- DEPARTAMENTOS -----\n" +
    "1. Alimentos y Nutrición\n" +
    "2. Accesorios y Juguetes\n" +
    "3. Servicios de Higiene y Cuidado\n" +
    "4. Finalizar compra y facturar\n" +
    "Seleccione una opción:";
  return pedirEntero(texto);
}

/* Devuelve el texto del menú del Nivel 3 según el departamento. */
function textoMenuProductos(departamento) {
  if (departamento === 1) {
    return (
      "--- ALIMENTOS Y NUTRICIÓN ---\n" +
      "1. Bulto Concentrado Premium (3 Kg): $45.000\n" +
      "2. Paquete de Galletas / Snacks: $12.000\n" +
      "3. Lata de Alimento Húmedo: $8.000\n" +
      "4. Volver al menú de departamentos\n" +
      "Seleccione una opción:"
    );
  } else if (departamento === 2) {
    return (
      "--- ACCESORIOS Y JUGUETES ---\n" +
      "1. Correa y Collar Ajustable: $22.000\n" +
      "2. Juguete Mordedor Interactivo: $15.000\n" +
      "3. Cama Acolchada Mediana: $60.000\n" +
      "4. Volver al menú de departamentos\n" +
      "Seleccione una opción:"
    );
  } else {
    return (
      "--- SERVICIOS DE HIGIENE Y CUIDADO ---\n" +
      "1. Baño Medicado y Cepillado: $35.000\n" +
      "2. Corte de Pelo Canino/Felino: $28.000\n" +
      "3. Limpieza Dental y Uñas: $18.000\n" +
      "4. Volver al menú de departamentos\n" +
      "Seleccione una opción:"
    );
  }
}

/* Devuelve el precio de un producto/servicio según departamento y opción. */
function obtenerPrecio(departamento, opcion) {
  if (departamento === 1) {
    if (opcion === 1) return 45000;
    if (opcion === 2) return 12000;
    if (opcion === 3) return 8000;
  } else if (departamento === 2) {
    if (opcion === 1) return 22000;
    if (opcion === 2) return 15000;
    if (opcion === 3) return 60000;
  } else if (departamento === 3) {
    if (opcion === 1) return 35000;
    if (opcion === 2) return 28000;
    if (opcion === 3) return 18000;
  }
  return 0;
}

/* Devuelve el nombre del producto/servicio según departamento y opción. */
function obtenerNombre(departamento, opcion) {
  if (departamento === 1) {
    if (opcion === 1) return "Bulto Concentrado Premium (3 Kg)";
    if (opcion === 2) return "Paquete de Galletas / Snacks";
    if (opcion === 3) return "Lata de Alimento Húmedo";
  } else if (departamento === 2) {
    if (opcion === 1) return "Correa y Collar Ajustable";
    if (opcion === 2) return "Juguete Mordedor Interactivo";
    if (opcion === 3) return "Cama Acolchada Mediana";
  } else if (departamento === 3) {
    if (opcion === 1) return "Baño Medicado y Cepillado";
    if (opcion === 2) return "Corte de Pelo Canino/Felino";
    if (opcion === 3) return "Limpieza Dental y Uñas";
  }
  return "";
}

/* Nivel 3: ciclo que permite elegir productos hasta volver al Nivel 2. */
function mostrarMenuProductos(departamento) {
  let opcion = 0;

  do {
    opcion = pedirEntero(textoMenuProductos(departamento));

    if (opcion >= 1 && opcion <= 3) {
      const precio = obtenerPrecio(departamento, opcion);
      const nombre = obtenerNombre(departamento, opcion);
      const cantidad = pedirCantidad();

      subtotalCliente += precio * cantidad;
      itemsCliente += cantidad;

      alert(
        "Agregado: " + nombre + "\n" +
        "Cantidad: " + cantidad + "\n" +
        "Subtotal acumulado: " + formatearMoneda(subtotalCliente)
      );
    } else if (opcion !== 4) {
      alert("Opción inválida. Intente de nuevo.");
    }
  } while (opcion !== 4);
}

/* ============================================================
   CÁLCULOS DE FACTURACIÓN
   ============================================================ */

/* Calcula el descuento según afiliación o monto de la compra. */
function calcularDescuento(subtotal, esAfiliado) {
  if (esAfiliado) {
    return subtotal * 0.15;
  } else if (subtotal > 70000) {
    return subtotal * 0.08;
  }
  return 0;
}

/* Total a pagar = subtotal - descuento + donación. */
function calcularTotal(subtotal, descuento, donacion) {
  return subtotal - descuento + donacion;
}

/* ============================================================
   FLUJO DE ATENCIÓN (Nivel 1 -> Nivel 2 -> Nivel 3)
   ============================================================ */

/* Atiende a un cliente: departamentos, productos y facturación. */
function atenderCliente() {
  subtotalCliente = 0;
  itemsCliente = 0;

  const esAfiliado = confirm("¿El cliente es afiliado al Club de Mascotas?");

  let opcionDepartamento = 0;
  do {
    opcionDepartamento = mostrarMenuDepartamentos();

    if (opcionDepartamento >= 1 && opcionDepartamento <= 3) {
      mostrarMenuProductos(opcionDepartamento);
    } else if (opcionDepartamento === 4) {
      finalizarCompra(esAfiliado);
    } else {
      alert("Opción inválida. Intente de nuevo.");
    }
  } while (opcionDepartamento !== 4);
}

/* Genera la factura del cliente y actualiza los acumulados globales. */
function finalizarCompra(esAfiliado) {
  if (itemsCliente === 0) {
    alert("El cliente no registró productos ni servicios. No se factura.");
    return;
  }

  const descuento = calcularDescuento(subtotalCliente, esAfiliado);

  let donacion = 0;
  const deseaDonar = confirm(
    "¿Desea aportar $3.000 voluntarios al refugio de rescate animal?"
  );
  if (deseaDonar) {
    donacion = 3000;
  }

  const totalPagar = calcularTotal(subtotalCliente, descuento, donacion);

  alert(
    "===== FACTURA PET CENTER =====\n" +
    "Cliente afiliado: " + (esAfiliado ? "Sí" : "No") + "\n" +
    "Subtotal: " + formatearMoneda(subtotalCliente) + "\n" +
    "Descuento: " + formatearMoneda(descuento) + "\n" +
    "Donación refugio: " + formatearMoneda(donacion) + "\n" +
    "-------------------------------\n" +
    "TOTAL A PAGAR: " + formatearMoneda(totalPagar)
  );

  totalClientesAtendidos++;
  totalDineroRecaudado += totalPagar;
  totalProductosVendidos += itemsCliente;
}

/* Muestra los acumulados globales de la jornada. */
function mostrarBalance() {
  if (totalClientesAtendidos === 0) {
    alert(
      "===== BALANCE DE LA JORNADA =====\n" +
      "Aún no se han atendido clientes."
    );
    return;
  }

  const promedio = totalDineroRecaudado / totalClientesAtendidos;

  alert(
    "===== BALANCE DE LA JORNADA =====\n" +
    "Clientes atendidos: " + totalClientesAtendidos + "\n" +
    "Dinero recaudado: " + formatearMoneda(totalDineroRecaudado) + "\n" +
    "Productos/servicios vendidos: " + totalProductosVendidos + "\n" +
    "Promedio de gasto por cliente: " + formatearMoneda(promedio)
  );
}

/* ============================================================
   CICLO PRINCIPAL DEL SISTEMA
   ============================================================ */

function iniciarSistema() {
  let opcion = 0;

  do {
    opcion = mostrarMenuPrincipal();

    if (opcion === 1) {
      atenderCliente();
    } else if (opcion === 2) {
      mostrarBalance();
    } else if (opcion === 3) {
      alert("Caja cerrada. ¡Gracias por usar Pet Center!");
    } else {
      alert("Opción inválida. Intente de nuevo.");
    }
  } while (opcion !== 3);
}

/* Arranca el sistema cuando se hace clic en el botón. */
const botonIniciar = document.getElementById("btn-iniciar");
if (botonIniciar) {
  botonIniciar.addEventListener("click", iniciarSistema);
}
