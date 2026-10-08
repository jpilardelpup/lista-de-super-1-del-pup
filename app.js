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