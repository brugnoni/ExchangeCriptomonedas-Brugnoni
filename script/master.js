// Declarando un array
/* let nota1 = parseInt(prompt("Ingrese Nota º1:"));
let nota2 = parseInt(prompt("Ingrese Nota º2:"));
let nota3 = parseInt(prompt("Ingrese Nota º3:"));

while (!Number.isInteger(nota1)) {
    alert("El valor que ingresaste, no es un número!");
    nota1 = parseInt(prompt("Ingrese Nota º1:"));
    console.log(nota1);
    if (Number.isInteger(nota1)) {
        break;
    }
} 

const notas = [nota1, nota2, nota3];
console.log(notas);
console.log(notas.length);

// Ejemplo: Validar aprobación de cursada
let nota_final = 0;

for (let i=0; i<notas.length; i++) {
    nota_final += notas[i];
    console.log(notas[i]);
}

let promedio = nota_final / notas.length;

if (promedio >= 7) {
    alert("Estas aprobado! Nota Final: " + promedio.toFixed(2));
} else {
    alert("DESAPROBADO! TENES QUE VOLVER A CURSAR! Nota Final: " + promedio.toFixed(2));
}

console.log("Última nota: " + notas[notas.length-1]); */


// Método Push => Agrega un elemento al final del array
/* const miArray = ["marca", 3, "palabra"];
miArray.push("Matias");
miArray.push(10);
console.log(miArray); */

// Método Unshift => Agrega un elemento al comienzo del array
/* const miArray = ["marca", 3, "palabra"];
const notas = [10, 5, 6];
miArray.unshift("Matias");
miArray.push(notas);
console.log(miArray); */

// Método pop => Elimina el último elemento del array
/* const miArray = ["marca", 3, "palabra"];
let valor = miArray.pop() + "!";
console.log(miArray);
console.log(valor);
miArray.unshift(valor.toUpperCase());
console.log(miArray); */

// Método shift => Elimina el primer elemento del array
/* const miArray = ["marca", 3, "palabra"];
let valor = miArray.shift() + "!";
console.log(miArray);
console.log(valor);
miArray.push(valor.toUpperCase());
console.log(miArray); */

/* miArray[2] = "Pablo";
console.log(miArray); */


// Método Splice
/* const nombres = ["Daniela", "Julieta", "Alfa", "Nacho", "Marcos", "El Conejo"];
console.log(nombres);
nombres.splice(nombres.length-2, 2); //Eliminar los 2 úlitmos
console.log(nombres); */


// Método Join
/* const nombres = ["Daniela", "Julieta", "Alfa", "Nacho", "Marcos", "El Conejo"];
console.log(nombres);
console.log(nombres.join(" / ")); */


// Método Concat
/*const perros = ["Tomás", "Cambai"];
const gatos = ["Amy", "Benita"];
const pajaritos = ["Valverde", "Pollito"];
const mascotas = perros.concat(gatos);
const mascotas2 = gatos.concat(perros);
const mascotas3 = mascotas.concat(pajaritos);
 console.log(mascotas);
console.log(mascotas2);
console.log(mascotas3); */
/* const mascotas4 = [...perros, ...gatos, ...pajaritos]; // ... Operador Spread => desparrama todos los ementos de un array en otro
console.log(mascotas4); */


// Método Slice
/* const nombres = ["Daniela", "Julieta", "Alfa", "Nacho", "Marcos", "El Conejo"];
const eliminados = nombres.slice(3, 4);
console.log(nombres);
console.log(eliminados); */


// Método IndexOf
/* const nombres = ["Daniela", "Julieta", "Alfa", "Nacho", "Marcos", "El Conejo"];
console.log(nombres.indexOf("Marcos")); //4
console.log(nombres.indexOf("Conejo")); //-1
console.log(nombres.indexOf("julieta")); //-1 */


// Método IndexOf
/* const nombres = ["Daniela", "Julieta", "Alfa", "Nacho", "Marcos", "El Conejo"];
console.log(nombres.includes("Marcos")); //ture
console.log(nombres.includes("Conejo")); //false
console.log(nombres.includes("julieta")); //false */


// Método Reverse
/* const nombres = ["Daniela", "Julieta", "Alfa", "Nacho", "Marcos", "El Conejo"];
console.log(nombres);
nombres.reverse();
console.log(nombres); */


// Ejemplo aplicado: Carga Nombres con Entradas
const listaNombres = [];
var cantidad = 3;

do {
    let entrada = prompt("Ingresar nombre");
    listaNombres.push(entrada.toUpperCase());
    console.log(listaNombres);
} while (listaNombres.length < cantidad) {
    let entrada2 = prompt("Ingresar nombre #2");
    listaNombres.push(entrada2.toUpperCase());
    console.log("Elementos: " + listaNombres.length);
}



// Ejemplo aplicado: Eliminar cualquier elemento
/* const nombres = ["Daniela", "Julieta", "Alfa", "Nacho", "Marcos", "El Conejo"];
console.log(nombres);

const eliminar = (nombre) => {
    let indice = nombres.indexOf(nombre);
    console.log("Posición: " + indice);

    if (indice != -1) {
        nombres.splice(indice, 1);
    }
}

eliminar("Nacho");
console.log(nombres); */


// Array de Objetos
/* const bebida = {id:1, nombre:"Coca Cola"};
const arrayBebidas = [bebida, {id:2, nombre:"Pepsi"}];
console.log(arrayBebidas);
arrayBebidas.push({id:2, nombre:"Pepsi"});
console.log(arrayBebidas); */


// Método For... Of
/* const productos = [
    {id:1, nombre:"Coca Cola", precio:400},
    {id:2, nombre:"Pepsi", precio:380},
    {id:3, nombre:"Manaos", precio:360}
];

for (let i=0; i<productos.length; i++) {
    alert("#" + productos[i].id + " -> " + productos[i].nombre + " $" + productos[i].precio);
}

for (const prod of productos) {
    alert("#" + prod.id + " => " + prod.nombre + " $" + prod.precio);
} */


//Ejemplo Aplicado: Clases y Array 
/* class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre.toUpperCase();
        this.precio = parseFloat(precio);
        this.vendido = false;
        this.iva = 1.21;
    }

    sumaIva() {
        this.precio = this.precio * this.iva;
    }
}

const productos = [];
productos.push(new Producto("Arroz", 120));
productos.push(new Producto("Harina", 80));
productos.push(new Producto("Leche", 100));
console.log(productos);

for (const producto of productos) {
    producto.sumaIva();
    console.log("Nombre: " + producto.nombre + ", Precio: $" + producto.precio);
} */


const Monedas = [313, 350, "Euro no valido", 2800086]

const Monedas {
    nombre : "Nahuel"

    
}