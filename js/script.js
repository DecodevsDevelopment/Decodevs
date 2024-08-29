/*UN JOVER MUY AFORTUNADO LOGRO GANAR EL PRIMER PEMIO DE LA LOTERIA,
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



