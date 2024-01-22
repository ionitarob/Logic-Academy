document.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper('.swiper-container', {
        loop: true,
        autoplay: {
            delay: 10000, // Cambia de imagen cada 10 segundos
        },
    });

    // Mostrar el contenido principal después de la inicialización
    const mainContent = document.getElementById('main-content');
    mainContent.style.display = 'block';
});

document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('login-form');

    loginForm.addEventListener('submit', function (event) {
        // No se necesita la lógica de verificación aquí
    });
});


function handleLogin() {
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');

    const username = usernameInput.value;
    const password = passwordInput.value;

    // Verificar las credenciales en el lado del cliente
    if ((username === 'admin@admin.com' && password === 'Start12345') || (username === 'user@user.com' && password === 'Password')) {
        // Credenciales válidas, redirigir a la página principal
        window.location.href = '../Dashboard/dashboard.html';
    } else {
        // Credenciales incorrectas, mostrar un mensaje de error
        swal("Error", "Credenciales incorrectas. Por favor, inténtalo de nuevo.", "error");
    }
}
