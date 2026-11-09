<?php 
$servername = "localhost";
$username = "admin_denis";
$password = "adminpassword";
$dbname = "saint_denis";

// GetParametres
if ($_GET) {
    $q = $_GET["q"];
}
else {
    die("invalid parametre");
}

$output = [];
// creating connection
$conn = mysqli_connect($servername, $username, $password, $dbname);

// checking connection
if (!$conn) {
    die("connsction failed: " . mysqli_connect_error());
}
// echo "connected successfully \n";
switch ($q) {
    case "eleves":
        $sql = "SELECT * FROM eleves";
        break;
    case "professeurs":
        $sql = "SELECT * FROM professeurs";
        break;

    case "administrations":
        $sql = "SELECT * FROM administrations";
        break;
    default:
        die("no match found");
}

$result = mysqli_query($conn, $sql);
if (!$result) {
    die("query fail");
}
// $output = [];
foreach($result as $row) {
    $output[] = $row;

}



print(json_encode($output));

