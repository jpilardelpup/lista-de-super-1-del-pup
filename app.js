let listaDeSuper = [];
listaDeSuper[0] = "sal";
listaDeSuper[1] = "leche";
listaDeSuper[2] = "arroz";
console.log(listaDeSuper[0]); // "sal"
let ultimoElemento = listaDeSuper.length - 1;
console.log(listaDeSuper[ultimoElemento]); // "arroz"
listaDeSuper.push("fideos", "aceite");
listaDeSuper.unshift("café", "pan");
console.log("Cantidad de productos:", listaDeSuper.length); // 7
let noHabia = listaDeSuper.pop();
console.log("No había:", noHabia); // "aceite"
let comprado = listaDeSuper.shift();
console.log("Comprado:", comprado); // "café"
console.log("Tamaño final:", listaDeSuper.length); // 5
function logItems(arreglo) {
  arreglo.forEach((producto, indice) => {
    console.log(`${indice}: ${producto}`);
  });
}

logItems(listaDeSuper);

function superApp() {
  let continuar = true;

  while (continuar) {
    let comando = prompt('Comando: "nuevo", "listar", "borrar" o "salir"');

    if (comando === null) {
      comando = "salir"; // si aprietan Cancelar
    }
    comando = comando.trim().toLowerCase();

    if (comando === "nuevo") {
      let item = prompt("¿Qué producto querés agregar?");
      if (item !== null && item.trim() !== "") {
        listaDeSuper.push(item.trim());
        console.log(`"${item.trim()}" fue agregado a la lista.`);
      }
    } else if (comando === "listar") {
      logItems(listaDeSuper);
    } else if (comando === "borrar") {
      let indice = Number(prompt("¿Qué índice querés borrar?"));
      if (Number.isInteger(indice) && indice >= 0 && indice < listaDeSuper.length) {
        let eliminado = listaDeSuper.splice(indice, 1);
        console.log(`"${eliminado[0]}" fue eliminado de la lista.`);
      } else {
        console.log("Índice inválido. No se borró nada.");
      }
    } else if (comando === "salir") {
      console.log("¡Hasta luego!");
      continuar = false;
    } else {
      console.log("Comando no reconocido.");
    }
  }
}

superApp();