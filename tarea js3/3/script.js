let nombre = (prompt(`Ingrese nombre de trabajador:`))
let sueldo = parseInt(prompt(`Ingrese sueldo básico:`))
let hijos = parseInt(prompt(`Ingrese número de hijos:`))


sueldohijo = (sueldo) + (sueldo)*7/100

if (hijos >0 ) {
   alert (` ${(nombre)} , obtine la bonificación de $ ${(sueldo)*7/100} por hijos:$ ${sueldohijo} `)
}

if (hijos<1) {
   alert (`No obtiene la bonificación de $ ${(sueldo)*7/100}, su sueldo sería : $ ${sueldo} `)
 }