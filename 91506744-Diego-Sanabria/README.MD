# 📌 Planteamiento del Problema: Tienda de Mascotas "Pet Center"

## Contexto y Planteamiento del Problema
La tienda y centro de bienestar animal **"Pet Center"** necesita un programa en JavaScript para el registro de ventas de mostrador y servicios para mascotas. El sistema debe permitir atender a los dueños de mascotas, registrar alimentos, accesorios o servicios de cuidado, liquidar su factura con promociones especiales y generar el balance del día.

Para evaluar el razonamiento lógico básico, **queda estrictamente prohibido el uso de arreglos (arrays) y objetos**. Todo el sistema debe gestionarse utilizando variables primitivas (`number`, `string`, `boolean`), funciones, condicionales y ciclos anidados.

---

## Requerimientos del Sistema

### 1. Estructura de Menús (3 Ciclos Anidados)
El sistema debe estar estructurado obligatoriamente mediante **tres niveles de ciclos anidados**:

- **Nivel 1 — Menú Principal (Ciclo 1):**  
  Debe repetirse hasta que se cierre la caja de la tienda:
  1. Atender cliente - menuDepartamentos
  2. Ver balance de la jornada
  3. Salir del sistema

- **Nivel 2 — Menú de Departamentos (Ciclo 2):**  
  Se ejecuta al atender un cliente y se repite hasta que el cliente finalice su compra:
  1. Alimentos y Nutrición
  2. Accesorios y Juguetes
  3. Servicios de Higiene y Cuidado
  4. Finalizar compra y facturar

- **Nivel 3 — Menú de Productos y Servicios (Ciclo 3):**  
  Permite al cliente seleccionar el producto o servicio deseado e indicar la cantidad (debe ser mayor a 0). Se repite hasta que elija volver al menú de departamentos:
  - **Alimentos y Nutrición:**
    - 1. Bulto Concentrado Premium (3 Kg): $45.000
    - 2. Paquete de Galletas / Snacks: $12.000
    - 3. Lata de Alimento Húmedo: $8.000
    - 4. Volver al menú de departamentos
  - **Accesorios y Juguetes:**
    - 1. Correa y Collar Ajustable: $22.000
    - 2. Juguete Mordedor Interactivo: $15.000
    - 3. Cama Acolchada Mediana: $60.000
    - 4. Volver al menú de departamentos
  - **Servicios de Higiene y Cuidado:**
    - 1. Baño Medicado y Cepillado: $35.000
    - 2. Corte de Pelo Canino/Felino: $28.000
    - 3. Limpieza Dental y Uñas: $18.000
    - 4. Volver al menú de departamentos

---

### 2. Cálculos y Facturación por Cliente
Al seleccionar la opción **Finalizar compra y facturar** en el Menú de Departamentos:
1. **Descuento por Tipo de Cliente o Monto:**
   - Si el cliente es afiliado al **Club de Mascotas**, recibe un **15% de descuento** sobre el subtotal.
   - Si no es afiliado, pero su compra supera los **$70.000**, recibe un **8% de descuento**.
   - En caso contrario, no aplica descuento.
2. **Aporte Voluntario a Refugio de Rescate Animal:**
   - Preguntar si desea donar **$3.000** para el albergue de animales rescatados.
3. **Total:**
   - $\text{Total a Pagar} = \text{Subtotal} - \text{Descuento} + \text{Donación}$.
   - Mostrar el resumen al cliente: subtotal, descuento, donación y total a pagar.

---

### 3. Estadísticas de la Jornada
En el Menú Principal, la opción **Ver balance de la jornada** debe mostrar los acumulados globales:
- Total de clientes atendidos en el día.
- Total de dinero recaudado en la tienda.
- Total de productos y servicios vendidos en total.
- Promedio de gasto por cliente ($\text{Total recaudado} / \text{Clientes atendidos}$).

---

## Restricciones Técnicas
1. **NO usar arreglos (`[]`, `Array`) ni objetos (`{}`, `Object`).**
2. Se debe trabajar únicamente con variables primitivas, contadores y acumuladores.
3. Se deben implementar **funciones** para modularizar el código (por ejemplo: para mostrar menús, calcular descuentos y calcular totales).
4. Usar condicionales (`if/else` o `switch`) para controlar las opciones y validaciones.