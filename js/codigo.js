/*
class Animal {
    constructor(especie,edad,color){
        this.especie = especie;
        this.edad = edad;
        this.color = color;
        this.info = `Soy ${this.especie}, tengo ${this.edad} años y soy de color ${this.color}`;
    }
        verInfo = ()=>{
            console.log(this.info)
        }
        saludar = ()=>{
            prompt("¿Que especie eres?: ");
            console.log(`Hola ${this.especie}, que bonito eres.`)
        }
}

class Perro extends Animal {
    constructor(especie,edad,color,raza){
        super(especie,edad,color);
        this.raza = null;
    }
    set setRaza(newName){
        this.raza = newName;
    }
    get getRaza() {
        return this.raza;
    }
}
const gato = new Animal("gato",2,"negro");
const pajaro = new Animal("pajaro",1,"verde");
const perro = new Perro("perro",5,"marron","Pitbull");

perro.setRaza = "Rocco";

perro.getRaza();

perro.verInfo();
gato.verInfo();
pajaro.verInfo();

perro.saludar();
gato.saludar();
pajaro.saludar();
*/

class Celular {
    constructor(color,peso,resolucionDeCamara,resolucionDeVideo,memoriaRam){
        this.color = color;
        this.peso = peso;
        this.resolucionDeCamara = resolucionDeCamara;
        this.resolucionDeVideo = resolucionDeVideo;
        this.memoriaRam = memoriaRam;
        this.encendido = false;
        this.info = `Color: ${this.color}, Peso: ${this.peso} gramos, Resolucion de camara: ${this.resolucionDeCamara}, Resolucion de Video: ${this.resolucionDeVideo} px, Ram: ${this.memoriaRam} GB`;
    }
    botonEncendido(){
        if (this.encendido == false) {
            alert("Celular prendido");
            this.encendido = true;
        } else {
            alert("Celular apagado")
            this.encendido = false
        }
    }
    reiniciar () {
        if (this.encendido == true) {
            alert("Reiniciando celular");
        } else {
            alert("El celular esta apagado");
        }
    }
    tomarFoto () {
        alert(`Foto tomada en una resolucion de: ${this.resolucionDeCamara}`)
    }
    grabarVideo() {
        alert(`grabando video en ${this.resolucionDeCamara}`)
    }
    mobileInfo(){
        return `
        Color: ${this.color}
        Peso: ${this.peso}
        ResolucionDeCamara: ${this.resolucionDeCamara}
        Resolucion de Video: ${this.resolucionDeVideo}        
        Memoria Ram: ${this.memoriaRam}
        `
    }
}

class CelularAltaGama extends Celular{
    constructor(color,peso,resolucionDeCamara,resolucionDeVideo,memoriaRam,rdce) {
        super(color,peso,resolucionDeCamara,resolucionDeVideo,memoriaRam);
        this.resolucionDeCamaraExtra = rdce;
    }
    grabarVideoLento(){
        alert("Estas grabando en camara lenta");
    }
    reconocimientoFacial() {
        alert("Vamos a iniciar un reconocimiento facial");
    }
    infoAltaGama(){
        return this.mobileInfo() + `Resolucion de camara extra:`
    }
}
/*
celular1 = new Celular("Azul", 150, 5,"hd",32);
celular2 = new Celular("Negro", 155,5.4,"full hd",64);
celular3 = new Celular("Blanco", 148,5.9,"full hd",128);



celular1.presionarBotonEncendido();
celular1.tomarFoto();
celular1.grabarVideo();
celular1.reiniciar();
celular1.presionarBotonEncendido();
*/

celular1 = CelularAltaGama ("rojo",130,16,"4k",8,"full hd")
celular2 = CelularAltaGama ("blanco",142,16,"full hd",16,"hd")

console.log(`
    ${celular1.mobileInfo()};
    ${celular2.infoAltaGama()};
    `)
