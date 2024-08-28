/* UN JOVER MUY AFORTUNADO LOGRO GANAR EL PRIMER PEMIO DE LA LOTERIA,
EXACTO, ESTAMOS HABLANDO DEL POBRE AL QUE COFLA LE DIO UNA MANO,
EL POBRE DECIDE HACER UNA FIESTA PARA FESTEJAR QUE SALIO DE LA POBREZA CON 
ESTE MILLONARIO, COMPRO UNA MAQUINA QUE DEJA PASAR SOLAMENTE A LOS MAYORES DE EDAD:
        -DEJAR PASAR SOLO A MAYORES DE EDAD
        -LA PRIMER PERSONA QUE ENTRE DESPUES DE LAS 2 AM, NO PAGA.


let free = false;

const validarCliente = (time) => {
    let edad = prompt("¿Cual es tu edad?");
    if (edad > 18) {
        if (time >= 2 && time < 7 && free == false) {
            alert("Podes pasar gratis porque sos la primera persona despues de las 2AM");
            free = true;
        } else {
            alert('Son las ${time}:00Hs, podes pasar, pero tenes que pagar la entrada');
        }            
        } else {
            alert("No podes pasar, sos menor de edad.");
        }
}

validarCliente(22);
validarCliente(23);
validarCliente(0.2);
validarCliente(0.6);
validarCliente(1);
validarCliente(2);
validarCliente(2.4);
validarCliente(3);

*/ 




/* Cofla vuelve de la comisaria exausto y por lo cansado que estaba se fue a dormir.
Al otro dia comienzan las clases del ciclo basico de la universidad (porque cofla quiere ser programador
y se inscribio a la facultad de ingenieria para estudiar desarrollo de software).
En su curso en total son 19 alumnos, pero surgio un problema que complico un poco a la facultad:
Se rompio el sistema de registro de asistencias y durante los proximos 30 dias no se podran hacer
registros de datos de ningun tipo, por ende las clases no podran comenzar hasta que esto este solucionado

-Crear mini-sistema que nos permita regirstar los alumnos que estan presentes (P) y austentes (A) en clase.
-Pasados los 30 dias mostrar la situacion final de todos los alumnos (nro total de presentes y ausentes).
-Se puede tener un maxino de 10% de ausencias por semestre, si se tienen mas aclarar que esta reprobado.


let cantidad = prompt("¿Cuantos alumnos son?");
let alumnosTotales = [19];

for (i= 0; i < cantidad; i++) {
    alumnosTotales[i] = [prompt("Nombre del alumno " + (i+1)),0];
}

const tomarAsistencia = (nombre,p)=>{
    let presencia = prompt(nombre);
    if (presencia == "p" || presencia == "P") {
        alumnosTotales[p][1]++; 
    }
}

for (i = 0; i < 30; i++) {
    for (alumno in alumnosTotales) {
        tomarAsistencia(alumnosTotales[alumno][0],alumno)
    }
}

for (alumno in alumnosTotales) {
    let resultado = `${alumnosTotales[alumno][0]}:<br>;
    ________Presentes: ${alumnosTotales[alumno][1]};
    ________Ausentes: ${30 - parseInt(alumnosTotales[alumno][1])}`;
    if (30 - alumnosTotales[alumno][1] > 18) {
        resultado == "REPROBRADO POR INASISTENCIAS"
    } else {
        resultado += "<br></br>"
    } 
    console.log(resultado)
}
*/

/* Cofla feliz por haber empezado las clases volvio a su casa y ya tiene tarea basica de calculo; Tiene que hacer un par de ejercicios de matematicas
que incluyen suma, resta, division y multiplicacion, realizar esto con una calculadora puede ser mucho mas efectivo.
        -Crear calculadora que nos simplifique el trabajo
 */

const suma = (num1,num2)=> {
    return parseInt(num1) + parseInt(num2)
}
const resta = (num1,num2)=> {
    return parseInt(num1) - parseInt(num2)
}
const division = (num1,num2)=> {
    return parseInt(num1) / parseInt(num2)
}
const multiplicacion = (num1,num2)=> {
    return parseInt(num1) * parseInt(num2)
}

alert("¿Que operacioon deseas realizar?");
operacion = prompt("1: suma, 2: resta, 3: division, 4: multiplicacion");

if (operacion == 1) {
    let numero1 = prompt("Primer numero para sumar");
    let numero2 = prompt("Segundo numero para sumar");
    resultado = suma(numero1,numero2)
    alert(`El resultado es ${resultado}`);
}
else if (operacion == 2) {
    let numero1 = prompt("Primer numero para restar");
    let numero2 = prompt("Segundo numero para restar");
    resultado = resta(numero1,numero2)
    alert(`El resultado es ${resultado}`);
}
else if (operacion == 3) {
    let numero1 = prompt("Primer numero para division");
    let numero2 = prompt("Segundo numero para division");
    resultado = division(numero1,numero2)
    alert(`El resultado es ${resultado}`);
}
else if (operacion == 4) {
    let numero1 = prompt("Primer numero para multiplicar");
    let numero2 = prompt("Segundo numero para multiplicar");
    resultado = multiplicacion(numero1,numero2)
    alert(`El resultado es ${resultado}`);
}
else {
    alert("No se ha encontrado la operacion.")
}
