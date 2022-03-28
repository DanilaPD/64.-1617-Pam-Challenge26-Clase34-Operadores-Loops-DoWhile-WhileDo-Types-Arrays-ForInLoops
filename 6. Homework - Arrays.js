let array1 = [
    "arroz",
    "asado",
    "ensalada",
    "pastas",
    "papas",
    "milanesas",
    "sandwiches",
    "verduras",
    "nachos",
    "tacos",
];

//! Pop
//* Saca el último elemento:
console.log(array1.pop());
console.log(array1);

//! Push
//* Agrega un elemento al final:
console.log(array1.push("aderezos", "vegetales"));
console.log(array1);

//! Slice
//* Saca una parte y lo convierte en un nuevo array:
let array2 = array1.slice("queso", "mortadela");
console.log(array2);
console.log(array1);

//! Splice
//* 3 parámetros: Desde dónde empieza, cuántos borramos, qué agregamos a cambio:
array1.splice(1, 5, "tomates", "choripanes");
console.log(array1);