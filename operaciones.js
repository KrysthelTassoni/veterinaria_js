const fs = require("fs");

// Ruta del archivo JSON
const archivo = "citas.json";

// Función para registrar una cita
const registrar = (nombre, edad, animal, color, enfermedad) => {
    // Crear objeto de la cita
    const nuevaCita = {
        nombre,
        edad,
        animal,
        color,
        enfermedad,
    };

    // Leer el archivo si existe, o crear un array vacío si no existe
    let citas = [];
    if (fs.existsSync(archivo)) {
        const data = fs.readFileSync(archivo, "utf-8");
        citas = data ? JSON.parse(data) : [];
    }

    // Agregar la nueva cita al array
    citas.push(nuevaCita);

    // Guardar en el archivo
    fs.writeFileSync(archivo, JSON.stringify(citas, null, 2));
    console.log("✅ Cita registrada correctamente.");
};

// Función para leer las citas y mostrarlas en formato de texto
const leer = () => {
    // Verificar si el archivo existe
    if (!fs.existsSync(archivo)) {
        console.log("📂 No hay citas registradas aún.");
        return;
    }

    // Leer el archivo
    const data = fs.readFileSync(archivo, "utf-8");
    const citas = data ? JSON.parse(data) : [];

    // Mostrar citas en formato de texto
    if (citas.length === 0) {
        console.log("📂 No hay citas registradas.");
    } else {
        citas.forEach((cita) => {
            console.log(`📌 Nombre: ${cita.nombre}, Edad: ${cita.edad}, Animal: ${cita.animal}, Color: ${cita.color}, Enfermedad: ${cita.enfermedad}`);
        });
    }
};

// Exportar funciones
module.exports = { registrar, leer };

