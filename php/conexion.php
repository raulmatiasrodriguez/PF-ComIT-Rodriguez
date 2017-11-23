<?php
$servername = "localhost";
$username = "root";
$password = "33120465";
$dbname = "bayfoodnow";


//create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);

// Check coonection
if (!$conn){
	die("Connection failed: " .mysqli_connect_error());
}

?>