// Se sabe que aproximandamente mas de 6 alumnos van a la excursion.//
// Se necesita saber con exactitud la cantidad de alumnos que van a concurrir a la excursion y sus nombres//
//Con ese dato sacar cuantos son niños y cuantas son ñiñas//
//Para poder completar la ficha del paseo//

let alumnos = prompt("¿Cuantos alumnos van a concurrir a la excursion?");
let nombres = "";
let sexo="";
let niños = 0;
let niñas =0;
let x = 1;
while(x<=alumnos){
    nombres=prompt("Como es el nombre del alumno/a N°"+ x);
    console.log(nombres);
    sexo=prompt("¿El Alumno "+nombres+" es Niño o Niña?")
    if((sexo=="niño")||(sexo=="Niño")||(sexo=="nino")||(sexo=="Nino")){
        niños=niños+1;
    }else if((sexo=="niña")||(sexo=="Niña")||(sexo=="nina")||(sexo=="Nina")){
        niñas=niñas+1;
    }
    x=x+1;
}
alert("Hay " + niños + " Niños y "+ niñas + " Niñas en la excursion.");
console.log("Hay " + niños + " Niños y "+ niñas + " Niñas en la excursion.");
