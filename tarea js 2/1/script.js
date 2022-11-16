let hombres = parseFloat(prompt('Ingrese la cantidad de hombres:'));
let mujeres = parseFloat(prompt('Ingrese la cantidad de mujeres:'));
convertir1 = hombres * 100 / (hombres + mujeres);
document.write( "El porcentaje de hombres del total es:" + convertir1 + "%");
 document.write("<br>")
convertir2 = mujeres * 100 / (hombres + mujeres) ;
document.write("El porcentaje de mujeres del total es:" + convertir2 + "%");