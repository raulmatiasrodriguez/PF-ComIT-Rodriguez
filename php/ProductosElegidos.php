<?php  
//	me conecto con la base de datos
include 'php/conexion.php';


$sql= "SELECT '*' FROM Productos WHERE descripcion =".$_POST["nombre"];
$result = mysqli_query($conn, $sql);

if (mysqli_num_rows($result) > 0){
	echo "<table class='table table-hover table-responsive table-bordered'>";
    echo "<tr>";
    echo "<th class='textAlignLeft'>Nombre del producto</th>";
    echo "<th>Precio ($)</th>";
    echo "<th style='width:5em;'>Cantidad</th>";
    echo "<th>Acciones</th>";
    echo "</tr>";

    while($row = mysqli_fetch_assoc($result)){
    	
	echo "descripcion: ". $row["descripcion"]. "   precio: " .$row["precio"]. "<br>";
}}
	else
		{
        	echo ("El filtro no es valido") ;
		}
?>