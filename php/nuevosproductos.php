<?php
//me conecto con la BD
include 'conexion.php';

$descripcion = $_POST['descrip'];
$precio = $_POST['precio'];
$idnegocio = $_POST['negocio'];

echo "Servidor:Datos obtenidos del Formulario <br>";
echo "Producto: $descripcion <br>";
echo "Precio: $precio <br>";
echo "Negocio: $idnegocio <br>";


$sql = "INSERT INTO productos (descripcion, precio, negocios_idnegocio) VALUES('$descripcion',$precio,$idnegocio)";

if (mysqli_query($conn, $sql)) {
	echo "New record created successfully";
	
}else {
	echo "Error: " .$sql ."<br>". mysqli_error ($conn);
}

mysqli_close ($conn);
 
?>