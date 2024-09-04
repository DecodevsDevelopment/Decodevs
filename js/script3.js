/* Cofla ya tiene su nuevo celular y ahora esta mirando las aplicaciones de play store,
ya que quiere jugar juegos que sean muy populares, que tengan buena puntuacion y que pesen poco, pero las 7 apps 
que llamaron su atencion son un tanto similares y sabe que si se descarga todas, probablemente juegue con todas,
pero el se va a descargar solo 2 para tener perdidas innecesarias de tiempo juegando juegos con su celular, pero el problema
viene cuando no puede decidirse cual de todas estas aplicaciones es la que va a descargar.

Crear soluciones 
- Crear un sistema que ayude a cofla a decidir cual app descargar
-La informacion de los instaladores debe contener la cantidad de descargas y la puntuacion
-Las apps se deben poder instalar, abrir, cerrar y desintalar.
*/

class App {
    constructor(descargas,puntuacion,peso){
        this.descargas = descargas;
        this.puntuacion = puntuacion;
        this.peso = peso;
        this.iniciada = false;
        this.instalada = false;
    }
    abrir() {
        if(this.iniciada == false) {
            this.iniciada = true;
            alert("App encendida");
        }
    }
    cerrar() {
        if(this.iniciada == true) {
            this.iniciada = false;
            alert("App cerrada");
        }
    }
    instalar() {
        if(this.instalada == false){
            this.instalada = true;
            if (this.instalada == true) {
                alert("App instalada");
            } else {
                alert("Ha ocurrido un error");
            }        
        }
    }
    desinstalar() {
        if(this.instalada == ture){
            this.instalada = false;
            alert("App desinstalada");
        }
    }
}