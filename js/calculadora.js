/*Cofla feliz por haber empezado las clases volvio a su casa y ya tiene tarea basica de calculo; Tiene que hacer un par de ejercicios de matematicas
que incluyen suma, resta, division y multiplicacion, realizar esto con una calculadora puede ser mucho mas efectivo.
        -Crear calculadora que nos simplifique el trabajo*/


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
        