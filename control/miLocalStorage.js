const TAREA = 'carrito';

function guardarProducto(producto) {
    localStorage.setItem(TAREA, JSON.stringify(producto));
}

function obtenerProductos() {
    return JSON.parse(localStorage.getItem(TAREA)) || [];
}

export { TAREA, guardarProducto, obtenerProductos };