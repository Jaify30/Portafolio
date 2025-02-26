var check = document.querySelector(".check");

// Detectar el idioma actual y actualizar el checkbox
if (window.location.pathname.includes("/en/")) {
    check.checked = true;
}

check.addEventListener('change', function () {
    if (this.checked) {
        location.href = "/en/index.html";  // Ir a inglés
    } else {
        location.href = "/index.html";  // Volver a español
    }
});