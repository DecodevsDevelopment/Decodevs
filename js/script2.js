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

