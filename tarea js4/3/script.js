let numero1 = parseFloat(prompt("Ingrese el primer número"))
let numero2 = parseFloat(prompt("Ingrese el primer número"))

let suma = function(x,y){
    return numero1+numero2
}

var result = suma (numero1,numero2) ;

document.write("La suma es:" + result);