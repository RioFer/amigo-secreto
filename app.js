// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Lista para almacenar los nombres de los amigos
let listaAmigos = [];

// Función para validar el nombre ingresado
function esNombreValido(nombre) {
    return /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(nombre) && nombre.trim() !== "";
}

// Función para agregar un amigo a la lista
function agregarAmigo() {
    const inputNombre = document.getElementById("amigo");
    const listaElement = document.getElementById("listaAmigos");
    const nombre = inputNombre.value.trim();

    if (!esNombreValido(nombre)) {
        alert("El nombre no es válido. Por favor revisar.");
        inputNombre.value = "";
        return;
    }

    listaAmigos.push(nombre);
    inputNombre.value = "";

    // Actualizar la lista en el HTML
    actualizarLista(listaElement);
}

// Función para actualizar la lista de amigos en la interfaz
function actualizarLista(listaElement) {
    listaElement.innerHTML = "";
    listaAmigos.forEach(amigo => {
        const li = document.createElement("li");
        li.textContent = amigo;
        listaElement.appendChild(li);
    });
}

// Función para sortear un amigo y limpiar la lista
function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert("No hay nombres en la lista para sortear.");
        return;
    }
    const indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
    const amigoSeleccionado = listaAmigos[indiceAleatorio];
    const resultadoElement = document.getElementById("resultado");
    const listaElement = document.getElementById("listaAmigos");

    // Mostrar el resultado y limpiar la lista
    resultadoElement.innerHTML = "";
    const li = document.createElement("li");
    li.textContent = "El amigo sorteado es: " + amigoSeleccionado;
    resultadoElement.appendChild(li);

    // Vaciar la lista y actualizar la interfaz
    listaAmigos = [];
    actualizarLista(listaElement);
}
