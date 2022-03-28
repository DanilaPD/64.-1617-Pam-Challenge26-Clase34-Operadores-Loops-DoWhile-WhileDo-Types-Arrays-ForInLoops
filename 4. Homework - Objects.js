const objeto1 = {
    a: 5,
    b: 10,
    c: 15,
    d: "hello",
    e: "bye",
    f: function (a, b) {
        console.log(a - b);
    },
    g: function (d, e) {
        console.log(d + e);
    },
}

//* Valores que están FUERA de la función:
objeto1.f(20, 10);

//* Valores que están DENTRO de la función:
objeto1.g(objeto1.d, objeto1.e);