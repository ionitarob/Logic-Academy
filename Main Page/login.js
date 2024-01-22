// login.js
function handleLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Realizar la solicitud al backend (login.php en este ejemplo)
    fetch('login.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            window.location.href = '../Dashboard/dashboard.html';
        } else {
            swal('Error', 'Usuario o contraseña incorrectos', 'error');
        }
    })
    .catch(error => {
        console.error('Error en la solicitud:', error);
        swal('Error', 'Ocurrió un problema. Inténtalo de nuevo más tarde.', 'error');
    });
}


