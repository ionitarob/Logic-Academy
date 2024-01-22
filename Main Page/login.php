<?php
// Recibe los datos del formulario
$data = json_decode(file_get_contents("php://input"));

// Conecta a la base de datos (reemplaza con tus propios datos)
$servername = "adacemialogic.es";
$username = "u238258299_Parzivald";
$password = "Al3JaNDR0124";
$dbname = "u238258299_LogicDB";

$conn = new mysqli($servername, $username, $password, $dbname);

// Verifica la conexión
if ($conn->connect_error) {
    die("Error de conexión: " . $conn->connect_error);
} else {
    //echo "Conexión exitosa"; // Puedes comentar o eliminar esta línea
}

// Obtiene el usuario y la contraseña
$username = $data->username;
$password = $data->password;

// Realiza la consulta SQL utilizando una consulta preparada
$stmt = $conn->prepare("SELECT * FROM usuarios WHERE usuario = ?");
$stmt->bind_param("s", $username);
$stmt->execute();
$result = $stmt->get_result();

// Verifica si se encontró un usuario
if ($result->num_rows > 0) {
    $row = $result->fetch_assoc();
    // Verifica la contraseña
    if ($password == $row['contrasena']) {
        // Usuario autenticado con éxito
        echo json_encode(["success" => true]);
    } else {
        // Contraseña incorrecta
        echo json_encode(["success" => false]);
    }
} else {
    // Usuario no encontrado
    echo json_encode(["success" => false]);
}

$stmt->close();
$conn->close();
?>

