const fs = require('fs');

const registrar = (nombre, edad, animal, color, enfermedad) => {
    // Leer el archivo citas.json
    let citas = [];
    try {
        const data = fs.readFileSync('citas.json', 'utf-8');
        citas = JSON.parse(data);
    } catch (error) {
        // Si el archivo está vacío o no existe, se mantiene un arreglo vacío
    }

    // Crear nueva cita
    const nuevaCita = { nombre, edad, animal, color, enfermedad };
    citas.push(nuevaCita);

    // Guardar en citas.json
    fs.writeFileSync('citas.json', JSON.stringify(citas, null, 2), 'utf-8');
    console.log('📌 Cita registrada con éxito!');
};

const leer = () => {
    try {
        // Leer el contenido del archivo citas.json
        const data = fs.readFileSync('citas.json', 'utf-8');
        const citas = JSON.parse(data);

        // Si no hay citas, mostrar un mensaje
        if (citas.length === 0) {
            console.log('📌 No hay citas registradas.');
            return;
        }

        // Formatear las citas para mostrarlas en la terminal
        const citasComoTexto = citas.map(cita => 
            `Nombre: ${cita.nombre}, Edad: ${cita.edad}, Animal: ${cita.animal}, Color: ${cita.color}, Enfermedad: ${cita.enfermedad}`
        ).join('\n');

        console.log(citasComoTexto);
    } catch (error) {
        console.log('⚠️ No se pudo leer el archivo citas.json o está vacío.');
    }
};

// Exportar las funciones
module.exports = { registrar, leer };
