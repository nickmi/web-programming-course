


 <?php
$today = date('Y-m-d H:i:s');
//$hashID = hash('sha256', $today);



$hashID = $_POST["id"]; //or $_GET["star"]
$lat = $_POST["lat"]; //or $_GET["star"]
$long = $_POST["long"]; //or $_GET["star"]


//echo $hashID;

//$servername = "localhost";
//$username = "username";
//$password = "password";
//$dbname = "myDB";

// Create connection
$conn = new mysqli("83.212.104.110", "swatch", "salamina7", "ReporterSafety");
// Check connection
if ($conn->connect_error) {
	die("Connection failed: " . $conn->connect_error);
}

$sql = "INSERT INTO GPSandID (DATUM, Longitude,Latitude, ShaID)
VALUES ('$today', '$long','$lat', '$hashID')";

if ($conn->query($sql) === TRUE) {
	echo "New record created successfully";
} else {
	echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();




echo $today;

?> 