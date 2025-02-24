const { registrar, leer } = require("./operaciones");

// Obtener argumentos de la línea de comandos
const [operacion, nombre, edad, animal, color, enfermedad] = process.argv.slice(2);

// Evaluar qué operación ejecutar
if (operacion === "registrar") {
    if (!nombre || !edad || !animal || !color || !enfermedad) {
        console.log("⚠️ Debes ingresar todos los datos: nombre, edad, animal, color, enfermedad.");
    } else {
        registrar(nombre, edad, animal, color, enfermedad);
    }
} else if (operacion === "leer") {
    leer();
} else {
    console.log("⚠️ Operación no reconocida. Usa 'registrar' o 'leer'.");
}



