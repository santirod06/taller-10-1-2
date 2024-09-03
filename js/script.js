// Array extraño
const strangeArray = [
  "Zero",
  function () {
    alert("Hola soy una función en un array");
  },
  22,
  null,
  "Go lang",
  undefined,
  "Cobol",
  "I'm programmer",
  -2000,
  "Hello world",
  `One is ${1}`,
  { name: "Info", lastname: "last info" },
  () => true,
  function showNumbers() {
    return "1, 2, 3, 4";
  },
  "Another String",
  ["Hola mundo!"],
  "b is a letter",
  "JavaScript",
];

// Función que recibe por parámetro un array y muestra sus elementos en pantalla
function showList(array) {
  const container = document.getElementById("list");
  container.innerHTML = "";
  // Más info de forEach => https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
  array.forEach((element) => {
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(element));
    container.appendChild(li);
  });
}

// EJERCICIO AQUI

document.addEventListener("DOMContentLoaded", (e) => {
  // Escribe tu solución aquí

    var Filtrado = strangeArray.filter(element => typeof element === 'string');
  
    /*  Tambien se puede hacer de la siguiente forma sin utilizar filter

    var Filtrado = []

    for (let i = 0; i < strangeArray.length; i++) {   // En este for recorremos toda la lista
      if (typeof strangeArray[i] === 'string') {    // Ponemos la condicion de typeof, si es un string entonces entra
        Filtrado.push(strangeArray[i]);   
      }
    }
      
    
    */

    Filtrado.sort();    // Ordena los elementos de forma alfabética

    showList(Filtrado);   // Muestra el array ya filtrado y ordenado en la lista

});
