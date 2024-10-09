const productos = [
    { nombre: "Televisor", precio: 500, categoria: "Electrónica" },
    { nombre: "Silla", precio: 100, categoria: "Muebles" },
    { nombre: "Laptop", precio: 800, categoria: "Electrónica" },
    { nombre: "Mesa", precio: 200, categoria: "Muebles" },
    { nombre: "Auriculares", precio: 150, categoria: "Electrónica" }
];

const categoriaSeleccionada = "Electrónica";

const productosFiltrados = productos.filter(producto => producto.categoria === categoriaSeleccionada);

const nombresProductos = productosFiltrados.map(producto => producto.nombre);

const precioTotal = productosFiltrados.reduce((total, producto) => total + producto.precio, 0);

console.log("Productos filtrados:", nombresProductos);
console.log("Precio total de los productos filtrados:", precioTotal);
