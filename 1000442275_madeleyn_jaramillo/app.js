/*
  FITZONE CLUB - WEB 1
  Esta solución usa variables primitivas, funciones, condicionales y ciclos.
  No crea arreglos ni objetos literales.
*/

// Contadores y acumuladores de las compras facturadas durante la jornada.
let usuariosAtendidos = 0;
let totalRecaudado = 0;
let totalPases = 0;
let totalMeses = 0;
let totalClases = 0;
let totalProductos = 0;
let recepcionEnCurso = false;

// La validación evita registrar opciones fuera de los menús.
function pedirOpcion(mensaje, minimo, maximo) {
    while (true) {
        const entrada = prompt(mensaje);
        if (entrada === null) {
            return null;
        }
        const numero = Number(entrada);
        if (entrada.trim() !== "" && !isNaN(numero) && numero >= minimo && numero <= maximo && numero % 1 === 0) {
            return numero;
        }
        alert("Opción no válida. Ingresa un número entero entre " + minimo + " y " + maximo + ".");
    }
}

// Se aceptan cantidades enteras positivas para evitar facturar medias unidades o valores negativos.
function pedirCantidad(unidad) {
    while (true) {
        const entrada = prompt("¿Cuántos/as " + unidad + " deseas comprar? (Número entero mayor que 0)");
        if (entrada === null) {
            return null;
        }
        const cantidad = Number(entrada);
        if (entrada.trim() !== "" && !isNaN(cantidad) && cantidad > 0 && cantidad % 1 === 0 && Number.isSafeInteger(cantidad)) {
            return cantidad;
        }
        alert("Cantidad inválida. Debes ingresar un número entero mayor que cero.");
    }
}

function mostrarMenuPrincipal() {
    return "=== FITZONE CLUB - RECEPCIÓN ===\n" +
           "1. Atender socio / nuevo usuario\n" +
           "2. Ver balance de caja del día\n" +
           "3. Salir del sistema";
}

function mostrarMenuServicios(nombre, subtotal) {
    return "=== SERVICIOS Y TIENDA ===\n" +
           "Cliente: " + nombre + "\n" +
           "Subtotal actual: " + dinero(subtotal) + "\n\n" +
           "1. Planes de Membresía\n" +
           "2. Clases y Entrenador Personalizado\n" +
           "3. Tienda Fitness y Suplementos\n" +
           "4. Finalizar compra y facturar";
}

function mostrarMenuProductos(categoria) {
    if (categoria === 1) {
        return "=== PLANES DE MEMBRESÍA ===\n" +
               "1. Pase Diario / Tiquetera 1 día - $15.000\n" +
               "2. Mensualidad Básica - $80.000\n" +
               "3. Mensualidad VIP - $120.000\n" +
               "4. Volver al menú de servicios";
    } else if (categoria === 2) {
        return "=== CLASES Y ENTRENADOR ===\n" +
               "1. Spinning / Indoor Cycling - $18.000\n" +
               "2. Entrenador Personal (1 hora) - $35.000\n" +
               "3. Funcional / Cross - $20.000\n" +
               "4. Volver al menú de servicios";
    } else {
        return "=== TIENDA FITNESS ===\n" +
               "1. Bebida Hidratante / Energizante - $7.000\n" +
               "2. Barra de Proteína - $9.000\n" +
               "3. Termo Deportivo Oficial - $25.000\n" +
               "4. Volver al menú de servicios";
    }
}

// Cada precio se consulta desde una función para no repetir valores en los cálculos.
function obtenerPrecio(categoria, articulo) {
    if (categoria === 1) {
        if (articulo === 1) return 15000;
        if (articulo === 2) return 80000;
        return 120000;
    } else if (categoria === 2) {
        if (articulo === 1) return 18000;
        if (articulo === 2) return 35000;
        return 20000;
    } else {
        if (articulo === 1) return 7000;
        if (articulo === 2) return 9000;
        return 25000;
    }
}

function obtenerNombre(categoria, articulo) {
    if (categoria === 1) {
        if (articulo === 1) return "Pase diario";
        if (articulo === 2) return "Mensualidad básica";
        return "Mensualidad VIP";
    } else if (categoria === 2) {
        if (articulo === 1) return "Clase de spinning";
        if (articulo === 2) return "Entrenador personal";
        return "Clase funcional / cross";
    } else {
        if (articulo === 1) return "Bebida hidratante";
        if (articulo === 2) return "Barra de proteína";
        return "Termo deportivo";
    }
}

function obtenerUnidad(categoria, articulo) {
    if (categoria === 1 && articulo === 1) return "días";
    if (categoria === 1) return "meses";
    if (categoria === 2) return "clases o sesiones";
    return "productos";
}

// Los descuentos son excluyentes: efectivo (10 %) tiene prioridad cuando aplica.
function calcularDescuento(subtotal, medioPago, carneValido) {
    if (medioPago === 1 && subtotal > 100000) {
        return subtotal * 0.10;
    } else if (carneValido === 1) {
        return subtotal * 0.08;
    } else {
        return 0;
    }
}

function calcularTotal(subtotal, descuento, seguro) {
    return subtotal - descuento + seguro;
}

function dinero(valor) {
    return "$" + valor.toLocaleString("es-CO");
}

function mostrarFactura(nombre, subtotal, descuento, seguro, total, pago, pases, meses, clases, productos) {
    let medio = "Efectivo";
    if (pago === 2) medio = "Tarjeta";
    if (pago === 3) medio = "Transferencia";

    const factura = "=== FACTURA FITZONE CLUB ===\n" +
        "Cliente: " + nombre + "\n" +
        "Medio de pago: " + medio + "\n" +
        "Pases diarios: " + pases + "\n" +
        "Meses de membresía: " + meses + "\n" +
        "Clases y sesiones: " + clases + "\n" +
        "Productos de tienda: " + productos + "\n" +
        "--------------------------\n" +
        "Subtotal: " + dinero(subtotal) + "\n" +
        "Descuento: -" + dinero(descuento) + "\n" +
        "Seguro deportivo: " + dinero(seguro) + "\n" +
        "TOTAL A PAGAR: " + dinero(total);
    alert(factura);
    console.log(factura);
}

function mostrarBalance() {
    let promedio = 0;
    if (usuariosAtendidos > 0) {
        promedio = totalRecaudado / usuariosAtendidos;
    }

    const unidades = totalPases + totalMeses + totalClases + totalProductos;
    const balance = "=== BALANCE DE CAJA DEL DÍA ===\n" +
        "Usuarios facturados: " + usuariosAtendidos + "\n" +
        "Dinero recaudado: " + dinero(totalRecaudado) + "\n" +
        "Pases diarios vendidos: " + totalPases + "\n" +
        "Meses de membresía vendidos: " + totalMeses + "\n" +
        "Clases / sesiones vendidas: " + totalClases + "\n" +
        "Productos de tienda vendidos: " + totalProductos + "\n" +
        "Total unidades facturadas: " + unidades + "\n" +
        "Promedio por usuario: " + dinero(promedio);
    alert(balance);
    console.log(balance);
}

function iniciarSistema() {
    // Impide abrir una segunda sesión de menús al pulsar el botón de nuevo.
    if (recepcionEnCurso) return;
    recepcionEnCurso = true;
    let recepcionAbierta = true;

    // NIVEL 1: permanece abierto hasta elegir salir de la recepción.
    while (recepcionAbierta) {
        const opcionPrincipal = pedirOpcion(mostrarMenuPrincipal(), 1, 3);

        if (opcionPrincipal === 1) {
            const nombre = prompt("Ingresa el nombre del socio o nuevo usuario:");
            if (nombre === null || nombre.trim() === "") {
                alert("Para atender a una persona debes ingresar su nombre.");
                continue;
            }

            // Las cantidades de esta compra todavía NO forman parte del balance diario.
            let subtotal = 0;
            let pasesCompra = 0;
            let mesesCompra = 0;
            let clasesCompra = 0;
            let productosCompra = 0;
            let atenderUsuario = true;

            // NIVEL 2: se repite hasta facturar o cancelar la atención.
            while (atenderUsuario) {
                const opcionServicio = pedirOpcion(mostrarMenuServicios(nombre, subtotal), 1, 4);

                if (opcionServicio === 1 || opcionServicio === 2 || opcionServicio === 3) {
                    let menuProductosAbierto = true;

                    // NIVEL 3: permanece en la categoría hasta elegir volver.
                    while (menuProductosAbierto) {
                        const opcionProducto = pedirOpcion(mostrarMenuProductos(opcionServicio), 1, 4);

                        if (opcionProducto === null || opcionProducto === 4) {
                            menuProductosAbierto = false;
                        } else {
                            const cantidad = pedirCantidad(obtenerUnidad(opcionServicio, opcionProducto));
                            if (cantidad !== null) {
                                const precio = obtenerPrecio(opcionServicio, opcionProducto);
                                const importe = precio * cantidad;
                                subtotal += importe;

                                if (opcionServicio === 1) {
                                    if (opcionProducto === 1) {
                                        pasesCompra += cantidad;
                                    } else {
                                        mesesCompra += cantidad;
                                    }
                                } else if (opcionServicio === 2) {
                                    clasesCompra += cantidad;
                                } else {
                                    productosCompra += cantidad;
                                }

                                alert("Agregado: " + obtenerNombre(opcionServicio, opcionProducto) +
                                      "\nCantidad: " + cantidad +
                                      "\nImporte: " + dinero(importe) +
                                      "\nSubtotal actualizado: " + dinero(subtotal));
                            }
                        }
                    }
                } else if (opcionServicio === 4) {
                    if (subtotal === 0) {
                        alert("No hay artículos en la compra. Agrega al menos uno para facturar.");
                        continue;
                    }

                    const medioPago = pedirOpcion("MEDIO DE PAGO\n1. Efectivo\n2. Tarjeta\n3. Transferencia", 1, 3);
                    if (medioPago === null) {
                        alert("Facturación pendiente. Tu compra continúa abierta.");
                        continue;
                    }

                    const carneValido = pedirOpcion("¿El usuario presentó carné de estudiante válido?\n1. Sí\n2. No", 1, 2);
                    if (carneValido === null) {
                        alert("Facturación pendiente. Tu compra continúa abierta.");
                        continue;
                    }

                    const incluirSeguro = pedirOpcion("¿Deseas agregar seguro deportivo por $6.000?\n1. Sí\n2. No", 1, 2);
                    if (incluirSeguro === null) {
                        alert("Facturación pendiente. Tu compra continúa abierta.");
                        continue;
                    }

                    const descuento = calcularDescuento(subtotal, medioPago, carneValido);
                    const seguro = incluirSeguro === 1 ? 6000 : 0;
                    const total = calcularTotal(subtotal, descuento, seguro);

                    // Se actualiza la caja SOLO después de completar la facturación.
                    usuariosAtendidos++;
                    totalRecaudado += total;
                    totalPases += pasesCompra;
                    totalMeses += mesesCompra;
                    totalClases += clasesCompra;
                    totalProductos += productosCompra;

                    mostrarFactura(nombre, subtotal, descuento, seguro, total, medioPago,
                                  pasesCompra, mesesCompra, clasesCompra, productosCompra);
                    atenderUsuario = false;
                } else {
                    // Cancelar el segundo menú descarta la compra sin modificar los acumulados.
                    alert("Atención cancelada. No se realizó ningún cobro.");
                    atenderUsuario = false;
                }
            }
        } else if (opcionPrincipal === 2) {
            mostrarBalance();
        } else {
            // La opción 3 (o Cancelar) cierra la recepción.
            alert("Recepción cerrada. Gracias por utilizar FitZone Club.");
            recepcionAbierta = false;
        }
    }
    recepcionEnCurso = false;
}
