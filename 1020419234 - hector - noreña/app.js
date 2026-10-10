
let repetirPrincipal = true;
let totalUsuariosAtendidos = 0;
let totalDineroRecaudado = 0;
let totalItemsVendidos = 0;

alert("Bienvenido a FitZone Club");

while (repetirPrincipal) {
    let opcion = Number(prompt("Menu de opciones \n1. Atender socio / nuevo usuario \n2. Ver balance de caja del dia \n3. Salir del sistema"));

    if (opcion == 3) {
        alert("Cerrando el sistema. ¡Regresa pronto!");
        repetirPrincipal = false;

    } else if (opcion == 2) {
        
        if (totalUsuariosAtendidos == 0) {
            alert("Aún no se han atendido clientes hoy.");
        } else {
            let promedio = totalDineroRecaudado / totalUsuariosAtendidos;
            alert("=== BALANCE DE LA JORNADA ===\nTotal usuarios atendidos: " + totalUsuariosAtendidos + "\nTotal servicios/productos vendidos: " + totalItemsVendidos + "\nTotal dinero        recaudado: $" + totalDineroRecaudado + "\nPromedio de compra por usuario: $" + promedio);
        }

    } else if (opcion == 1) {
        
        let repetirServicios = true;
        let subtotalUsuario = 0;
        let itemsUsuario = 0;

        
        while (repetirServicios) {
            let menuServicios = Number(prompt("Menu de servicios y tienda \n1. Planes de Membresia \n2. Clases y Entrenador Personalizado \n3. Tienda Fitness y Suplementos \n4. Finalizar compra y facturar \n5. Volver al menu principal / Cancelar atencion"));

            if (menuServicios == 1) {
                let repetirMembresias = true;

                
                while (repetirMembresias) {
                    let opcionMem = Number(prompt("Planes de Membresia \n1. Pase Diario / Tiquetera 1 dia ($15.000) \n2. Mensualidad Basica ($80.000) \n3. Mensualidad VIP ($120.000) \n4. Volver al menu de servicios"));

                    if (opcionMem == 1) {
                        let cantidad = Number(prompt("Ingrese la cantidad de pases diarios:"));
                        if (cantidad > 0) {
                            subtotalUsuario = subtotalUsuario + (cantidad * 15000);
                            itemsUsuario = itemsUsuario + cantidad;
                            alert("Pase diario agregado. Subtotal actual: $" + subtotalUsuario);
                        } else {
                            alert("La cantidad debe ser mayor a 0.");
                        }
                    } else if (opcionMem == 2) {
                        let cantidad = Number(prompt("Ingrese la cantidad de meses de mensualidad basica:"));
                        if (cantidad > 0) {
                            subtotalUsuario = subtotalUsuario + (cantidad * 80000);
                            itemsUsuario = itemsUsuario + cantidad;
                            alert("Mensualidad basica agregada. Subtotal actual: $" + subtotalUsuario);
                        } else {
                            alert("La cantidad debe ser mayor a 0.");
                        }
                    } else if (opcionMem == 3) {
                        let cantidad = Number(prompt("Ingrese la cantidad de meses de mensualidad VIP:"));
                        if (cantidad > 0) {
                            subtotalUsuario = subtotalUsuario + (cantidad * 120000);
                            itemsUsuario = itemsUsuario + cantidad;
                            alert("Mensualidad VIP agregada. Subtotal actual: $" + subtotalUsuario);
                        } else {
                            alert("La cantidad debe ser mayor a 0.");
                        }
                    } else if (opcionMem == 4) {
                        repetirMembresias = false; 
                    } else {
                        alert("Opcion no valida.");
                    }
                }

            } else if (menuServicios == 2) {
                let repetirClases = true;

                
                while (repetirClases) {
                    let opcionClase = Number(prompt("Clases y Entrenador Personalizado \n1. Clase de Spinning ($18.000) \n2. Sesion con Entrenador Personal ($35.000) \n3. Paquete Clase de Funcional / Cross ($20.000) \n4. Volver al menu de servicios"));

                    if (opcionClase == 1) {
                        let cantidad = Number(prompt("Ingrese la cantidad de clases de spinning:"));
                        if (cantidad > 0) {
                            subtotalUsuario = subtotalUsuario + (cantidad * 18000);
                            itemsUsuario = itemsUsuario + cantidad;
                            alert("Clase de spinning agregada. Subtotal actual: $" + subtotalUsuario);
                        } else {
                            alert("La cantidad debe ser mayor a 0.");
                        }
                    } else if (opcionClase == 2) {
                        let cantidad = Number(prompt("Ingrese la cantidad de sesiones con entrenador:"));
                        if (cantidad > 0) {
                            subtotalUsuario = subtotalUsuario + (cantidad * 35000);
                            itemsUsuario = itemsUsuario + cantidad;
                            alert("Sesion con entrenador agregada. Subtotal actual: $" + subtotalUsuario);
                        } else {
                            alert("La cantidad debe ser mayor a 0.");
                        }
                    } else if (opcionClase == 3) {
                        let cantidad = Number(prompt("Ingrese la cantidad de paquetes de funcional:"));
                        if (cantidad > 0) {
                            subtotalUsuario = subtotalUsuario + (cantidad * 20000);
                            itemsUsuario = itemsUsuario + cantidad;
                            alert("Paquete funcional agregado. Subtotal actual: $" + subtotalUsuario);
                        } else {
                            alert("La cantidad debe ser mayor a 0.");
                        }
                    } else if (opcionClase == 4) {
                        repetirClases = false; 
                    } else {
                        alert("Opcion no valida.");
                    }
                }

            } else if (menuServicios == 3) {
                let repetirTienda = true;

                
                while (repetirTienda) {
                    let opcionTienda = Number(prompt("Tienda Fitness y Suplementos \n1. Bebida Hidratante ($7.000) \n2. Barra de Proteina ($9.000) \n3. Termo Deportivo Oficial ($25.000) \n4. Volver al menu de servicios"));

                    if (opcionTienda == 1) {
                        let cantidad = Number(prompt("Ingrese la cantidad de bebidas hidratantes:"));
                        if (cantidad > 0) {
                            subtotalUsuario = subtotalUsuario + (cantidad * 7000);
                            itemsUsuario = itemsUsuario + cantidad;
                            alert("Bebida hidratante agregada. Subtotal actual: $" + subtotalUsuario);
                        } else {
                            alert("La cantidad debe ser mayor a 0.");
                        }
                    } else if (opcionTienda == 2) {
                        let cantidad = Number(prompt("Ingrese la cantidad de barras de proteina:"));
                        if (cantidad > 0) {
                            subtotalUsuario = subtotalUsuario + (cantidad * 9000);
                            itemsUsuario = itemsUsuario + cantidad;
                            alert("Barra de proteina agregada. Subtotal actual: $" + subtotalUsuario);
                        } else {
                            alert("La cantidad debe ser mayor a 0.");
                        }
                    } else if (opcionTienda == 3) {
                        let cantidad = Number(prompt("Ingrese la cantidad de termos deportivos:"));
                        if (cantidad > 0) {
                            subtotalUsuario = subtotalUsuario + (cantidad * 25000);
                            itemsUsuario = itemsUsuario + cantidad;
                            alert("Termo deportivo agregado. Subtotal actual: $" + subtotalUsuario);
                        } else {
                            alert("La cantidad debe ser mayor a 0.");
                        }
                    } else if (opcionTienda == 4) {
                        repetirTienda = false;
                    } else {
                        alert("Opcion no valida.");
                    }
                }

            } else if (menuServicios == 4) {
              
                if (subtotalUsuario == 0) {
                    alert("No ha seleccionado ningun servicio o producto. Agregue articulos antes de facturar.");
                } else {
                    let medioPago = prompt("¿Paga en efectivo? (si / no)");
                    let esEstudiante = prompt("¿Presenta carne valido de estudiante? (si / no)");

                    let descuentoEfectivo = 0;
                    let descuentoEstudiante = 0;

                    if (medioPago.toLowerCase() == "si" && subtotalUsuario > 100000) {
                        descuentoEfectivo = subtotalUsuario * 0.10;
                    }

                    if (esEstudiante.toLowerCase() == "si") {
                        descuentoEstudiante = subtotalUsuario * 0.08;
                    }

                  
                    let descuentoTotal = 0;
                    if (descuentoEfectivo >= descuentoEstudiante) {
                        descuentoTotal = descuentoEfectivo;
                    } else {
                        descuentoTotal = descuentoEstudiante;
                    }

                    
                    let seguro = prompt("¿Desea incluir seguro deportivo por $6.000 adicional? (si / no)");
                    let valorSeguro = 0;
                    if (seguro.toLowerCase() == "si") {
                        valorSeguro = 6000;
                    }

                    let totalPagar = subtotalUsuario - descuentoTotal + valorSeguro;

                    alert("=== FACTURA FITZONE CLUB ===\nSubtotal: $" + subtotalUsuario + "\nDescuento: -$" + descuentoTotal + "\nSeguro Medico: +$" + valorSeguro + "\n---------------------------\nTOTAL A PAGAR: $" + totalPagar);

                    
                    totalUsuariosAtendidos = totalUsuariosAtendidos + 1;
                    totalDineroRecaudado = totalDineroRecaudado + totalPagar;
                    totalItemsVendidos = totalItemsVendidos + itemsUsuario;

                    repetirServicios = false; 
                }

            } else if (menuServicios == 5) {
              
                alert("Atención cancelada. Volviendo al menú principal.");
                repetirServicios = false; 

            } else {
                alert("Opcion no valida.");
            }
        }

    } else {
        alert("Opcion no valida.");
    }
}