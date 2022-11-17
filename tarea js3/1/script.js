let numero = parseInt(prompt(`Ingrese número:`))

if (numero >149 ) {
   alert (`Descuento $ ${(numero)*12/100} y el importe total seria:$ ${(numero) - (numero)*12/100}`)
}

if (numero <150 ) {
    alert (`No obtiene el descuento y el importe total es:$ ${(numero)}`)
 }