// Función que simula una consulta a una base de datos
function consultarBaseDeDatos() {
    return new Promise((resolve, reject) => {
        // Simular un retraso de 3 segundos usando setTimeout
        setTimeout(() => {
            // Generar un número aleatorio entre 0 y 9
            const numeroAleatorio = Math.floor(Math.random() * 10);

            // Verificar si el número es par o impar
            if (numeroAleatorio % 2 === 0) {
                resolve("Consulta exitosa");
            } else {
                reject("Error en la consulta");
            }
        }, 3000); // 3000 milisegundos = 3 segundos
    });
}

// Llamar a la función y manejar el resultado con .then() y .catch()
consultarBaseDeDatos()
    .then(mensaje => {
        console.log(mensaje);
    })
    .catch(error => {
        console.error(error);
    });
