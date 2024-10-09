// Función asíncrona para obtener y procesar la lista de usuarios
async function obtenerUsuarios() {
    try {
        // Realizar la petición GET a la API
        const respuesta = await fetch('https://jsonplaceholder.typicode.com/users');
        
        // Verificar si la respuesta es exitosa
        if (!respuesta.ok) {
            throw new Error(`Error en la petición: ${respuesta.status}`);
        }

        // Convertir la respuesta en formato JSON
        const usuarios = await respuesta.json();

        // Iterar sobre los usuarios y mostrar nombre y correo electrónico
        usuarios.forEach(usuario => {
            console.log(`Nombre: ${usuario.name}, Email: ${usuario.email}`);
        });
    } catch (error) {
        // Manejar posibles errores
        console.error('Ocurrió un error al obtener los usuarios:', error);
    }
}

// Llamar a la función para ejecutar el proceso
obtenerUsuarios();
