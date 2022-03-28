let animales = {
    elefante: "Mark",
    tucán: "Robert",
    perro: "Luke",
    rinoceronte: "Larry",
    gato: "George",
    pavo: "Tim",
    tigre: "Jim",
};

for (const animal in animales) {
    console.log(`El nombre del ${animal} es ${animales[animal]}.`);
}