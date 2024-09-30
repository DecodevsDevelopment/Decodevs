const contenedor = document-querySelector(".flex-container");
let contador = 0;

function crearLlave(nombre,modelo,precio) {
    contador++;
    img = "<img src=`llave.png`>";
    nombre = `<h2>${nombre}</h2>`;
    modelo = `<h3>${modelo}</h3>`;
    precio = `<p>Precio: <b>${precio}</b></p>`;
    return [img,nombre,modelo,precio,img];
}



for (var i = 0; i < 20; i++) {
    
    let modeloRandom = Math.random()*1000;
    let precioRandom = Math.random()*10+30;
    let llave = crearLlave (`llave ${i}`,`modelo ${modeloRandom}`, precioRandom);
    let div = document-createElement("DIV");
    div.classList.add(`item-${i}`,`flex-item`);
    div.innerHTML = llave[0] + llave[1] + llave[2] + llave[3];
    contenedor.innerHTML += div;
}