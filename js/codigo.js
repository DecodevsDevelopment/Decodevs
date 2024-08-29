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


