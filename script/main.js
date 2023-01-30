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
  if (!valor || isNaN(valor)) {
    alert("Ingrese un monto válido");
    return;
}
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

//Lista de criptos con async, fetch, API,

const fullList = document.querySelector("#full-list");
const selectedList = document.querySelector("#selected-list");
let selectedCryptos = [];

async function getCryptoData() {
  try {
    const response = await fetch(
      "https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD"
    );
    const data = await response.json();
    data.Data.sort((a, b) => b.DISPLAY.USD.PRICE - a.DISPLAY.USD.PRICE);
    data.Data.forEach((crypto) => {
      const li = document.createElement("li");
      li.innerHTML = `${crypto.CoinInfo.Name}: ${crypto.DISPLAY.USD.PRICE}`;
      li.addEventListener("click", () => {
        if (selectedCryptos.includes(crypto)) {
          alert(`${crypto.CoinInfo.Name} ya esta en la lista`);
        } else {
          selectedCryptos.push(crypto);
          renderSelectedList(data);
        }
      });
      fullList.appendChild(li);
    });
  } catch (error) {
    console.error(error);
  }
}

async function renderSelectedList() {
  selectedList.innerHTML = "";
  selectedCryptos.sort((a, b) => b.DISPLAY.USD.PRICE - a.DISPLAY.USD.PRICE);
  selectedCryptos.forEach((crypto) => {
    const li = document.createElement("li");
    li.innerHTML = `${crypto.CoinInfo.Name}: ${crypto.DISPLAY.USD.PRICE}`;
    li.innerHTML += "&nbsp;";
    const removeBtn = document.createElement("button");
    removeBtn.innerHTML = "Quitar de la lista";
    removeBtn.classList.add("btn");
    removeBtn.addEventListener("click", () => {
      selectedCryptos.splice(selectedCryptos.indexOf(crypto), 1);
      renderSelectedList();
    });
    li.appendChild(removeBtn);
    selectedList.appendChild(li);
  });
}

getCryptoData();
renderSelectedList();
