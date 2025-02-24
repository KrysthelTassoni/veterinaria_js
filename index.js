const { registrar, leer } = require('./operaciones');

const args = process.argv.slice(2);
const operacion = args[0];

if (operacion === "registrar") {
    const [nombre, edad, animal, color, enfermedad] = args.slice(1);
    if (!nombre || !edad || !animal || !color || !enfermedad) {
        console.log('⚠️ Debes proporcionar todos los datos: nombre, edad, animal, color y enfermedad.');
    } else {
        registrar(nombre, edad, animal, color, enfermedad);
    }
} else if (operacion === "leer") {
    leer();
} else {
    console.log('⚠️ Operación no válida. Usa "registrar" o "leer".');
}


