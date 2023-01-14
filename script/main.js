//Formulario de inicio de sesion

function submitForm() {
  let name = document.getElementById("name").value;
  let age = document.getElementById("age").value;
  if (age < 18) {
    alert("Debes tener +18 para continuar!");
    return;
  }
  if (!name || !age) {
    alert("Completa los campos");
    return;
  }
  sessionStorage.setItem("name", name);
  sessionStorage.setItem("age", age);
  alert("Bienvenido, " + name + "!");
}

//Exchange de monedas

function convertir() {
  let valor = parseFloat(document.getElementById("capital").value);
  let resultado = 0;
  const bitcoin = 2843960;
  const dolar = 313;
  const euro = 308;
  const Exchange = document.getElementById("resultadoExchange");

  if (document.getElementById("uno").checked) {
    resultado = valor / bitcoin;
    alert(
      "Monto ingresado: $" +
        valor.toFixed(2) +
        " ARS" +
        " || Recibiras a cambio: " +
        resultado.toFixed(2) +
        " BTC"
    );
    Exchange.innerText = "Recibiras: " + resultado.toFixed(2) + " BTC";
  } else if (document.getElementById("dos").checked) {
    resultado = valor / dolar;
    alert(
      "Monto ingresado: $" +
        valor.toFixed(2) +
        " ARS" +
        " || Recibiras a cambio: $" +
        resultado.toFixed(2) +
        " USD"
    );
    Exchange.innerText = "Recibiras: $" + resultado.toFixed(2) + " USD";
  } else if (document.getElementById("tres").checked) {
    resultado = valor / euro;
    alert(
      "Monto ingresado: $" +
        valor.toFixed(2) +
        " ARS" +
        " || Recibiras a cambio: " +
        resultado.toFixed(2) +
        "€"
    );
    Exchange.innerText = "Recibiras: " + resultado.toFixed(2) + "€";
  } else {
    alert("Ingrese todos los datos requeridos!!!");
  }
}

// Calculadora

const dato1 = document.getElementById("op1");
const operadores1 = document.getElementById("operador");
const dato2 = document.getElementById("op2");
const calcular1 = document.getElementById("calcular");
const Resultado = document.getElementById("resultado");

function calcular() {
  let num1 = parseFloat(document.getElementById("num1").value);
  let num2 = parseFloat(document.getElementById("num2").value);
  let operator = document.getElementById("operator").value;

  if (!isNaN(num1) && !isNaN(num2)) {
    let result;
    switch (operator) {
      case "+":
        result = num1 + num2;
        break;
      case "-":
        result = num1 - num2;
        break;
      case "*":
        result = num1 * num2;
        break;
      case "/":
        result = num1 / num2;
        break;
    }
    document.getElementById("result").innerHTML = "El Resultado es: " + result;
  } else {
    alert("Porfavor ingresa datos validos");
  }
}

//Mostrar Precio de Hoy

function mostrarMonedas() {
  const monedas = [
    { id: 1, nombre: "Dolar", precio: 320, simbolo: "$" },
    { id: 2, nombre: "Euro", precio: 310, simbolo: "€" },
    { id: 3, nombre: "Bitcoin", precio: 2886920, simbolo: "$" },
  ];
  console.log(monedas);

  class Monedas {
    constructor(id, nombre, precio, simbolo) {
      this.id = id;
      this.nombre = nombre;
      this.precio = precio;
      this.simbolo = simbolo;
    }
  }
  console.log(Monedas);
  monedas.push({ id: 4, nombre: "Ethereum", precio: 379289, simbolo: "$" });
  console.log(monedas);

  for (let i = 0; i < 4; i++) {
    let mostrarMonedas = monedas[i];
    console.log(
      mostrarMonedas.simbolo + mostrarMonedas.precio.toFixed(2) + " in ARS"
    );
  }

  for (let i = 0; i < monedas.length; i++) {
    alert(
      "El precio de 1 " +
        monedas[i].nombre +
        " hoy es: " +
        monedas[i].simbolo +
        " " +
        monedas[i].precio.toFixed(2) +
        " ARS"
    );
  }
}

//Array de criptomonedas de la lista

let criptomonedas = [
  {
    nombre: "Bitcoin",
    simbolo: "BTC",
    precio: 35000,
    id: 1,
  },
  {
    nombre: "Ethereum",
    simbolo: "ETH",
    precio: 2000,
    id: 2,
  },
  {
    nombre: "Litecoin",
    simbolo: "LTC",
    precio: 190,
    id: 3,
  },
];

// Agregar objetos al Array

criptomonedas.push({
  nombre: "Euro",
  simbolo: "EUR",
  precio: 1.2,
  id: 4,
});

criptomonedas.push({
  nombre: "Dólar",
  simbolo: "USD",
  precio: 1.0,
  id: 5,
});

criptomonedas.push({
  nombre: "Cardano",
  simbolo: "ADA",
  precio: 0.3,
  id: 1,
});

criptomonedas.push({
  nombre: "Doge Coin",
  simbolo: "Doge",
  precio: 0.07,
  id: 6,
});

criptomonedas.push({
  nombre: "Kadena",
  simbolo: "KDA",
  precio: 5.0,
  id: 7,
});

criptomonedas.push({
  nombre: "Ethereum Classic",
  simbolo: "ETHC",
  precio: 40.0,
  id: 8,
});

// Lista de criptomonedas
function mostrarLista() {
  let lista = document.getElementById("lista-criptomonedas");
  lista.innerHTML = " ";
  criptomonedas.forEach(function (criptomoneda) {
    let item = document.createElement("li");
    item.innerHTML = `${criptomoneda.nombre} (${criptomoneda.simbolo}): $${criptomoneda.precio}`;
    lista.appendChild(item);
  });
}

mostrarLista();

// Lista de seguimiento personal

document.getElementById("seguimiento").innerText =
  "Aquí podrás visualizar tus criptos seleccionadas:";

let seleccionadas = JSON.parse(localStorage.getItem("seleccionadas")) || [];

//Agregar a la lista

function agregarASeleccionadas() {
  let index = parseInt(
    prompt(
      "Ingresa el índice de la criptomoneda que deseas agregar a tu lista de seguimiento (del 0 al 8)"
    )
  );
  if (index >= 0 && index < criptomonedas.length) {
    if (seleccionadas.find((c) => c.nombre === criptomonedas[index].nombre)) {
      alert("La criptomoneda ya se encuentra en tu lista de seguimiento");
      return;
    }
    seleccionadas.push(criptomonedas[index]);
    seleccionadas.sort((a, b) => {
      return (
        criptomonedas.findIndex((c) => c.nombre === a.nombre) -
        criptomonedas.findIndex((c) => c.nombre === b.nombre)
      );
    });
    localStorage.setItem("seleccionadas", JSON.stringify(seleccionadas));
    mostrarListaSeguimiento();
  } else {
    alert("Indice Invalido");
  }
}

// Eliminar de la lista
function eliminarDeSeleccionadas() {
  let index = parseInt(
    prompt(
      "Ingresa el índice de la criptomoneda que deseas eliminar de tu lista de seguimiento (del 0 al 8)"
    )
  );
  if (index >= 0 && index < seleccionadas.length) {
    seleccionadas.splice(index, 1);
    localStorage.setItem("seleccionadas", JSON.stringify(seleccionadas));
    mostrarListaSeguimiento();
  } else {
    alert("Indice Invalido");
  }
}
// Eliminar la lista completa

function borrarLista() {
  seleccionadas = [];
  localStorage.setItem("seleccionadas", JSON.stringify(seleccionadas));
  mostrarListaSeguimiento();
}

// Mostrar en tiempo real la lista personal de seguimiento

function mostrarListaSeguimiento() {
  let listaSeguimiento = document.getElementById("lista-seguimiento");
  listaSeguimiento.innerHTML = "";
  seleccionadas.forEach(function (criptomoneda) {
    let item = document.createElement("li");
    item.innerHTML = `${criptomoneda.nombre} (${criptomoneda.simbolo}): $${criptomoneda.precio}`;
    listaSeguimiento.appendChild(item);
  });
}

// al agregarlos a este DomContentLoaded, el evento espera a que el DOM este completamente cargado antes de realizar los evento y las functions)
document.addEventListener("DOMContentLoaded", function () {
  mostrarLista();
  mostrarListaSeguimiento();
  document
    .getElementById("agregar-btn")
    .addEventListener("click", agregarASeleccionadas);
  document
    .getElementById("remover-item-btn")
    .addEventListener("click", eliminarDeSeleccionadas);
});
