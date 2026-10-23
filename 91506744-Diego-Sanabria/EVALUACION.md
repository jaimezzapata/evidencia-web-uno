# 📋 Evaluación y Retroalimentación Práctica: JavaScript (Web 1)

**Estudiante:** Diego Sanabria  
**Documento de Identidad:** 91506744  
**Carpeta:** `91506744-Diego-Sanabria`  
**Ejercicio Asignado:** Ejercicio 3 — Tienda de Mascotas 'Pet Center'  

---

## 🎯 Calificación Final: **3.5 / 5.0**

---

### 📊 Desglose por Criterios de Evaluación

- **1. Estructura y Organización de Git / Entrega (1.0 pt):** **0.5 / 1.0**  
  Nombraste tu carpeta con mayúsculas (91506744-Diego-Sanabria). Moviste y renombraste el archivo del enunciado EJERCICIO_3_MASCOTAS.md dentro de tu carpeta como README.MD, eliminándolo de la raíz del proyecto para los demás compañeros.

- **2. Estructura de Control y Modularización (1.5 pts):** **1.5 / 1.5**  
  Se te valida positivamente el uso de llamadas recursivas entre funciones para navegar entre menús y submenús como alternativa a los ciclos iterativos.

- **3. Restricciones Técnicas y Validaciones (0.8 pt):** **0.4 / 0.8**  
  Tu código presenta un error crítico en tiempo de ejecución (ReferenceError) en la línea 44 que detiene el programa. No validaste que las cantidades sean mayores a cero.

- **4. Lógica de Negocio y Funcionalidad (1.7 pts):** **0.8 / 1.7**  
  Modificaste los productos y precios asignados en el enunciado por nombres distintos. No implementaste los descuentos de afiliado (15%) ni por monto superior a $70.000 (8%), no incluiste la donación voluntaria de $3.000 y el balance produce NaN por división por cero.

---

### 📝 Observaciones Detalladas y Retroalimentación

Diego, se reconoció tu navegación con funciones recursivas. Sin embargo, tu programa tiene un error en la línea 44 (return saldo - monto) que rompe la ejecución, modificaste los productos asignados y omitiste la lógica financiera del ejercicio.

#### 💥 1. Error de ejecución en tiempo real (ReferenceError):
**Pasos para reproducir:**
1. Menú Principal: seleccionar `1` (*Atender Clientes*).
2. Menú Departamentos: seleccionar `2` (*Accesorios y Juguetes*).
3. Menú Accesorios: seleccionar `4` (*Volver al menú de departamentos*).
4. Seleccionar `4` (*Finalizar compra y facturar*).
**Resultado en consola:**
```text
Uncaught ReferenceError: saldo is not defined
    at menuDepartamentos (app.js:44)
```
**Evidencia en código (`app.js`, línea 44):**
```javascript
  } else if (opcion == 2) {
    menuAccesorios();
    return saldo - monto // ⚠️ 'saldo' y 'monto' NO EXISTEN en tu programa
  }
```

#### 📌 2. Otras omisiones del enunciado:
- Modificaste productos y precios asignados por nombres inventados (*Collar de piel $25k, Juguete de goma $15k, Arena para gatos $20k, Baño y corte $30k, Paseo $20k, Cuidado veterinario $50k*).
- Omitiste el descuento del 15% (Club de Mascotas) y del 8% (> $70.000).
- Omitiste la donación voluntaria de $3.000.

---
*Evaluación generada con base en los lineamientos del repositorio y los enunciados oficiales de la evidencia práctica.*
