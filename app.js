// Lista de libros prestados (empieza con algunos ejemplos)
let prestamos = [
    { libro: "El Principito", alumno: "Sofía" },
    { libro: "Martín Fierro", alumno: "Tomás" },
    { libro: "Harry Potter y la piedra filosofal", alumno: "Valentina" }
];

const formulario = document.getElementById("formulario");
const lista = document.getElementById("lista");

// Dibuja la lista de préstamos en la página
function mostrarPrestamos() {
    lista.innerHTML = "";
    for (const prestamo of prestamos) {
        const item = document.createElement("li");
        item.textContent = prestamo.libro + " — prestado a " + prestamo.alumno;
        lista.appendChild(item);
    }
}

// Cuando se envía el formulario, agrega un préstamo nuevo
formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();
    const libro = document.getElementById("libro").value;
    const alumno = document.getElementById("alumno").value;

    prestamos.push({ libro: libro, alumno: alumno });
    formulario.reset();
    mostrarPrestamos();
});

mostrarPrestamos();
