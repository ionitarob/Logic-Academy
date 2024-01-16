document.addEventListener("DOMContentLoaded", function () {
    // Muestra el splash screen
    var splashContainer = document.querySelector(".splash-container");
    var mainContent = document.getElementById("main-content");

    setTimeout(function () {
        splashContainer.style.display = "none";
        mainContent.style.display = "block"; // Muestra el contenido principal
    }, 3000); // 3000 milisegundos = 3 segundos
});
