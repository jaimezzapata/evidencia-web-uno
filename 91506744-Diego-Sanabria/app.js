let repetir = true;
let acumuladorClientes = 0;
let acumuladorFacturas = 0;
let valorNeto = 0;
let cantidadGlobalProducto = 0;





/* MENU PRINCIPAL ------------------------------------------------------------------------------------------*/

function menuPrincipal() {
  alert("Bienvenido al PetCenter");
  let opcion = prompt(
    "Seleccione: \n1 - Atender Clientes\n2 - Ver balance de la jornada\n3 - Salir del sistema");
  if (opcion == 1) {
    menuDepartamentos();/* llama la funcion que tiene el menu de Atención del cliente*/
    /*console.log("El monto a retirar supera el saldo disponible. Intente con valor menor")*/
  } else if (opcion == 2) {
    balanceGeneral();
  } else if (opcion == 3) {
    let salida = prompt("Esta seguro que quiere salir, marca Si o No")
    if (salida == "Si") {
      alert("Hasta luego");
    } else if (salida == "No") {
      menuPrincipal();
    }
  }

}

menuPrincipal();/* llama la funcion que tiene el menu principal*/


/* MENU DEPARTAMENTOS ------------------------------------------------------------------------------------------*/

function menuDepartamentos() {
  let opcion = prompt("Seleccione: \n1 - Alimentos y Nutrición\n2 - Accesorios y Juguetes\n3 - Servicios de Higiene y Cuidado\n4 - Finalizar compra y facturar");
  if (opcion == 1) {
    menuAlimentos();/* llama la funcion que tiene el menu Alimentos y Nutrición*/
  } else if (opcion == 2) {
    menuAccesorios();
    return saldo - monto
  } else if (opcion == 3) {
    menuServicios();
  } else if (opcion == 4) {
    facturar();/*Función que hace la facturación*/
    menuPrincipal();/* vuelve al menu principal*/
  }
}

/* MENUS POR CADA DEPARTAMENTO ---------------------------------------------------------------------------- */

function menuAlimentos() {
  let opcion = prompt("Seleccione: \n1 - Bulto Concentrado Premium (3 Kg): $45.000\n2 - Paquete de Galletas / Snacks: $12.000\n3 - Lata de Alimento Húmedo: $8.000\n4 - Volver al menú de departamentos");
  if (opcion == 1) {
    let cantidad = Number(prompt("Ingrese la cantidad de Bulto:"));
    valorNeto += 45000 * cantidad;
    cantidadGlobalProducto += cantidad;
    menuAlimentos();
  } else if (opcion == 2) {
    let cantidad = Number(prompt("Ingrese la cantidad de Paquete de Galletas / Snacks:"));
    valorNeto += 12000 * cantidad;
    cantidadGlobalProducto += cantidad;
    menuAlimentos();
  } else if (opcion == 3) {
    let cantidad = Number(prompt("Ingrese la cantidad de Lata de Alimento Húmedo:"));
    valorNeto += 8000 * cantidad;
    cantidadGlobalProducto += cantidad;
    menuAlimentos();
  } else if (opcion == 4) {
    menuDepartamentos();
  }
}

function menuAccesorios() {
  let opcion = prompt("Seleccione: \n1 - Collar de Piel: $25.000\n2 - Juguete de Goma: $15.000\n3 - Arena para Gatos: $20.000\n4 - Volver al menú de departamentos");
  if (opcion == 1) {
    let cantidad = Number(prompt("Ingrese la cantidad de Collar de Piel:"));
    valorNeto += 25000 * cantidad;
    cantidadGlobalProducto += cantidad;
    menuAccesorios();
  } else if (opcion == 2) {
    let cantidad = Number(prompt("Ingrese la cantidad de Juguete de Goma:"));
    valorNeto += 15000 * cantidad;
    cantidadGlobalProducto += cantidad;
    menuAccesorios();
  } else if (opcion == 3) {
    let cantidad = Number(prompt("Ingrese la cantidad de Arena para Gatos:"));
    valorNeto += 20000 * cantidad;
    cantidadGlobalProducto += cantidad;
    menuAccesorios();
  } else if (opcion == 4) {
    menuDepartamentos();
  }
}

function menuServicios() {
  let opcion = prompt("Seleccione: \n1 - Baño y Corte de Pelo: $30.000\n2 - Paseo con Perro: $20.000\n3 - Cuidado Veterinario: $50.000\n4 - Volver al menú de departamentos");
  if (opcion == 1) {
    let cantidad = Number(prompt("Ingrese la cantidad de Baño y Corte de Pelo:"));
    valorNeto += 30000 * cantidad;
    cantidadGlobalProducto += cantidad;
    menuServicios();
  } else if (opcion == 2) {
    let cantidad = Number(prompt("Ingrese la cantidad de Paseo con Perro:"));
    valorNeto += 20000 * cantidad;
    cantidadGlobalProducto += cantidad;
    menuServicios();
  } else if (opcion == 3) {
    let cantidad = Number(prompt("Ingrese la cantidad de Cuidado Veterinario:"));
    valorNeto += 50000 * cantidad;
    cantidadGlobalProducto += cantidad;
    menuServicios();
  } else if (opcion == 4) {
    menuDepartamentos();
  }
}
  /* FUNCIONES DE FACTURACIÓN ------------------------------------------------------------------------------------ */

function facturar(){
  alert("El valor de su factura es: $" + valorNeto);
  acumuladorClientes++;
  acumuladorFacturas = acumuladorFacturas + valorNeto;
  valorNeto = 0; /* reinicia el valor neto para la siguiente factura */
}

/* FUNCION BALANCE GENERAL --------------------------------------------------------------------------------------- */


function balanceGeneral(){
  let balanceGeneral = alert("Balance general de la jornada: " + "\nTotal de clientes atendidos: " + acumuladorClientes + "\nTotal de facturación: $" + acumuladorFacturas + "\nTotal de productos vendidos: " + cantidadGlobalProducto + "\nPromedio de facturación por cliente: $" + (acumuladorFacturas / acumuladorClientes));
}
