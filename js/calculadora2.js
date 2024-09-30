/* Cofla ya esta terminando el primer semestre delprimer ciclo, la tarea que 
debe realizar es mucho mas avanzada de la que tenia antes, ademas de suma,
resta, multiplicacion y division, ahora tambien necesitara calcular potencias,
raices cuadradas y cubicas

CREAR SOLUCIONES:

-Perfeccionar calculadora para poder implementar nuevas funciones.*/

class Calculadora {
    constructor(){

    }
    suma = (num1,num2)=>{
        return parseInt(num1) + parseInt(num2)
    }
    resta = (num1,num2)=>{
        return parseInt(num1) - parseInt(num2)
    }
    division = (num1,num2)=>{
        return parseInt(num1) / parseInt(num2)
    }
    multiplicacion = (num1,num2)=>{
        return parseInt(num1) * parseInt(num2)
    }
    potenciar(num,exp){
        let numero = num;
        for (var i = 0; i < exp; i++){
            numero = numero * num;
        }
        return numero;
    }
}

const calculadora = new Calculadora;

alert("¿Que operacion deseas realizar?");
operacion = prompt("1: suma, 2: resta, 3: division, 4: multiplicacion, 5: potenciacion");

if (operacion == 1) {
    let numero1 = prompt("Primer numero para sumar");
    let numero2 = prompt("Segundo numero para sumar");
    resultado = calculadora.suma(numero1,numero2)
    alert(`El resultado es ${resultado}`);
}
else if (operacion == 2) {
    let numero1 = prompt("Primer numero para restar");
    let numero2 = prompt("Segundo numero para restar");
    resultado = calculadora.resta(numero1,numero2)
    alert(`El resultado es ${resultado}`);
}
else if (operacion == 3) {
    let numero1 = prompt("Primer numero para division");
    let numero2 = prompt("Segundo numero para division");
    resultado = calculadora.division(numero1,numero2)
    alert(`El resultado es ${resultado}`);
}
else if (operacion == 4) {
    let numero1 = prompt("Primer numero para multiplicar");
    let numero2 = prompt("Segundo numero para multiplicar");
    resultado = calculadora.multiplicacion(numero1,numero2)
    alert(`El resultado es ${resultado}`);
}
else {
    alert("No se ha encontrado la operacion.")
}
