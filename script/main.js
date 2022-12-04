alert("BIENVENIDOS al mayor sitio de cambio de monedas de Argentina");

//Validacion de datos

let ingresaNombre = prompt("Ingresa tu nombre: ");
let ingresaEdad = prompt("Ingresa tu edad: ");
function validarDatos(nombre, edad) {
    if (edad >= 18) {
        alert("Sr. / Sra. " + nombre + " cumples con el requisito de edad, puedes ingresar...")
    }
    else {
        alert("Sr. / Sra. " + nombre + " no cumples con los requisitos de edad, debes salir del sitio")
    }
}
validarDatos(ingresaNombre, ingresaEdad);


// Exchange de monedas

function convertir() {
    let valor = parseFloat(document.getElementById("capital").value);
    let resultado = 0;
    let bitcoin = 2843960;
    let dolar = 313;
    let euro = 308;    
    const Exchange = document.getElementById("resultadoExchange");

    if (document.getElementById("uno").checked){
        resultado = valor / bitcoin;
        alert("Monto ingresado: $" + valor.toFixed(2) + " ARS" + " || Recibiras a cambio: " + resultado.toFixed(2) + " BTC");
        Exchange.innerText = "Recibiras: " + resultado.toFixed(2) + " BTC";        
    }
    else if (document.getElementById("dos").checked){
        resultado = valor / dolar;
        alert("Monto ingresado: $" + valor.toFixed(2) + " ARS" + " || Recibiras a cambio: $" + resultado.toFixed(2) + " USD");
        Exchange.innerText = "Recibiras: $" + resultado.toFixed(2) + " USD";        
    } 
    else if (document.getElementById("tres").checked){
        resultado = valor / euro;
        alert("Monto ingresado: $" + valor.toFixed(2) + " ARS" + " || Recibiras a cambio: " + resultado.toFixed(2) + "€");
        Exchange.innerText = "Recibiras: " + resultado.toFixed(2) + "€";
    }   
    else{
        alert("Ingrese todos los datos requeridos!!!")
    }
}
// document.getElementById("") es como utilizar el enlace de un ID
// Utilizando el (document.getElementById("").value)
// se obtiene un elemento del html y recoge un valor
// de la misma forma un .checked, recoge el valor de si es true o false

// Calculadora 

const dato1 = document.getElementById("op1");
const operadores1 = document.getElementById("operador");
const dato2 = document.getElementById("op2");
const calcular1 = document.getElementById("calcular");
const Resultado = document.getElementById("resultado");

function calcular() {
    let operador = operadores1.value;
    let op1 = parseFloat(dato1.value);
    let op2 = parseFloat(dato2.value);

    if((operador == "+" || operador == "-" || operador == "/" || operador == "*") && !isNaN(op1) && !isNaN(op2)) {
        alert(" F E L I C I T A C I O N E S !!! Eres nuestro usuario N° 1.000.000 y ganaste el premio MAYOR!!! Te invitamos a que nos mandes tus datos asi podemos contactarnos contigo: https://ganaste10millonesdepesos.blogspot.com")
        let resultado;
        switch (operador) {
            case "+":
            resultado = op1 + op2
            break;
            case "-":
            resultado = op1 - op2
            break;
            case "/":
            resultado = op1 / op2
            break;
            case "*":
            resultado = op1 * op2
            break;     
        }        
        Resultado.innerText = "El resultado es: " + resultado;
    }
    else {
        alert("Operación no valida, ingrese uno de los siguientes operadores: (+, -, /, *)");
    }

}

