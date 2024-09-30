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
    abrir() {
        if(this.iniciada == false && this.instalada == true) {
            this.iniciada = true;
            alert("App encendida");
        }
    }
    cerrar() {
        if(this.iniciada == true && this.instalada == true) {
            this.iniciada = false;
            alert("App cerrada");
        }
    }
    appInfo(){
        return `
        Descargas: ${this.descargas}
        Puntuacion: ${this.puntuacion}
        Peso: ${this.peso}
        `
    }
}

app = new App("16.000", "5 estrellas", "900mb");
app2 = new App("14.000", "4 estrellas", "800mb");
app3 = new App("15.000", "5 estrellas", "990mb");
app4 = new App("6.000", "3 estrellas", "700mb");
app5 = new App("4.000", "2 estrellas", "700mb");
app6 = new App("18.000", "5 estrellas", "950mb");
app7 = new App("10.000", "3 estrellas", "700mb");

console.log(`
    ${app7.appInfo()}
    ${app.appInfo()}
    ${app2.appInfo()}
    ${app3.appInfo()}
    ${app4.appInfo()}
    ${app5.appInfo()}
    ${app6.appInfo()}
    `);

