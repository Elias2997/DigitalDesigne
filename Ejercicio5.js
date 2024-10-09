// Array para almacenar las tareas
const tareas = [];

// Función para agregar una tarea
function agregarTarea(descripcion) {
    tareas.push({ descripcion, completada: false });
    console.log(`Tarea "${descripcion}" agregada.`);
}

// Función para marcar una tarea como completada
function marcarTareaComoCompletada(descripcion) {
    const tarea = tareas.find(t => t.descripcion === descripcion);
    if (tarea) {
        tarea.completada = true;
        console.log(`Tarea "${descripcion}" marcada como completada.`);
    } else {
        console.log(`Tarea "${descripcion}" no encontrada.`);
    }
}

// Función para listar tareas pendientes
function listarTareasPendientes() {
    console.log("Tareas pendientes:");
    tareas
        .filter(t => !t.completada)
        .forEach(t => console.log(`- ${t.descripcion}`));
}

// Función para listar tareas completadas
function listarTareasCompletadas() {
    console.log("Tareas completadas:");
    tareas
        .filter(t => t.completada)
        .forEach(t => console.log(`- ${t.descripcion}`));
}

// Agregar tareas
agregarTarea("Comprar leche");
agregarTarea("Llamar al médico");
agregarTarea("Estudiar JavaScript");

// Marcar tareas como completadas
marcarTareaComoCompletada("Comprar leche");

// Listar tareas
listarTareasPendientes();
listarTareasCompletadas();
