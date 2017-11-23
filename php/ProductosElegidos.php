<?php  
//	me conecto con la base de datos
include 'conexion.php';

$busqpizzas = $_POST['check_pizzas']; 
$busqempanadas = $_POST['check_empanadas'];
$busqhamb = $_POST['check_hamburguesas'];
$busqminutas = $_POST['check_minutas'];
$busqpromos = $_POST['check_promos'];
$tipopago = $_POST['pagoen'];
$dire =$_POST['dir'];

echo "Servidor:Datos obtenidos del Formulario <br>";
echo "Productos Elegidos: <br>";
echo "Pizzas ($busqpizzas) - Empanadas ($busqempanadas) - Hamburguesas ($busqhamb)- Minutas ($busqminutas) - Promos ($busqpromos) <br>";
echo "Opcion de pago: ($tipopago) <br>";
echo "Direccion: $dire <br>";

$primero = 'false';

if ($busqpizzas == 'true') {
    $primero = 'true';
    $pizza = "(descripcion LIKE 'Pizza%')";
}else{
    $pizza ="";
}

if ($busqempanadas == 'true') {
    if ($primero == 'false'){
        $primero = 'true';
        $empanada = "(descripcion LIKE 'Empanada%')"; 
    }else{
        $empanada = "OR (descripcion LIKE 'Empanada%')";}
}else{
    $empanada = "";
}

if ($busqhamb == 'true') {
    if ($primero == 'false'){
        $primero = 'true';
        $hamb = "(descripcion LIKE 'Hamburguesa%')"; 
    }else{
        $hamb = "AND (descripcion LIKE 'Hamburguesa%')";}
}else{
    $hamb = "";
}

if ($busqminutas == 'true') {
    if ($primero == 'false'){
        $primero = 'true';
        $min = "(descripcion LIKE 'Minuta%')"; 
    }else{
        $min = "AND (descripcion LIKE 'Minuta%')";}
}else{
    $min = "";
}

if ($busqpromos == 'true') {
    if ($primero == 'false'){
        $primero = 'true';
        $promo = "(descripcion LIKE 'Promo%')"; 
    }else{
        $promo = "AND (descripcion LIKE 'Promo%')";}
}else{
    $promo = "";
}

$sql= "SELECT descripcion, precio FROM productos WHERE $pizza"."$empanada"."$hamb"."$min"."$promo ORDER BY descripcion";
$result = mysqli_query($conn, $sql);
//echo "$sql";

if (mysqli_num_rows($result) > 0){

	echo "<table class='table table-hover table-responsive table-bordered'>";
    echo "<tr>";
    echo "<th class='textAlignLeft'>Nombre del producto</th>";
    echo "<th>Precio ($)</th>";
    echo "<th style='width:5em;'>Cantidad</th>";
    echo "<th>Acciones</th>";
    echo "</tr>";
    
    while($row = mysqli_fetch_assoc($result)){
    	echo "<tr>";
        echo "<td>".$row["descripcion"]."</td>";
        echo "<td>".$row["precio"]."</td>";
        echo "<td></td>";
        echo "<td><button type='button' id='cargar'>Pedir</button></td>";}
    }else{
        echo ("El filtro no es valido") ;}


mysqli_close ($conn);
?>