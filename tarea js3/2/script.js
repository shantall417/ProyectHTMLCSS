let nombre = (prompt(`Ingrese nombre de alumno:`))
let nota = parseInt(prompt(`Ingrese nota de examen parcial:`))
let nota2 = parseInt(prompt(`Ingrese nota de examen final:`))
let nota3 = parseInt(prompt(`Ingrese nota de promedio de prácticas:`))

promedio =  (nota + nota2*2 + nota3)/4


if (promedio >10 ) {
   alert (` ${(nombre)} , promedio final:${promedio} , ENHORABUENA!! `)
}

if (promedio <8 ) {
    alert (`Estas desaprobado :( `)
 }
 