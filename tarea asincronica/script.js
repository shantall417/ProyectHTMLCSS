let numero = parseInt(prompt(`Ingrese número para su descuento respectivo:`))



if (numero <10 ) {
   alert (` 3.5% = ${(numero)-(numero)*3.5/100} `)
}

if ( 9 < numero <21 ) {
    alert (` 7% = ${(numero)-(numero)*7/100} `)
 }

 if ( 20 < numero ) {
    alert (` 9.5% = ${(numero)-(numero)*9.5/100} `)
 }