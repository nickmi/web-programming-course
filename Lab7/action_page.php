<?php

                $firstname=filter_var($_POST['firstname'], FILTER_SANITIZE_STRING);
                $lastname=filter_var($_POST['lastname'], FILTER_SANITIZE_STRING);
                $profession=filter_var($_POST['profession'], FILTER_SANITIZE_STRING);
                $livinglocation=filter_var($_POST['livinglocation'], FILTER_SANITIZE_STRING);
                $email=filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
				$phone=filter_var($_POST['phone'], FILTER_SANITIZE_NUMBER_INT);
				
		 echo "<table>";
     echo "<tr>";
     echo "<td><b>First Name:</b></td>";
     echo "<td>".$firstname."</td>";
     echo "</tr>";
		 echo "<tr>";
		 echo "<td><b>Last Name:</b> </td>";
		 echo "<td>".$lastname."</td>";
		 echo "</tr>";
		 echo "<tr>";
		 echo "<td><b>Profession:</b></td>";
		 echo "<td>".$profession."</td>";
		 echo "</tr>";
		 echo "<tr>";
		 echo "<td><b>Living Location:</b></td>";
		 echo "<td>".$livinglocation."</td>";
		 echo "</tr>";
		 echo "<tr>";
		 echo "<td><b>Email:</b></td>";
		 echo "<td>".$email."</td>";
		 echo "</tr>";
		 echo "<tr>";
		 echo "<td><b>Phone Number:</b></td>";
		 echo "<td>".$phone."</td>";
		 echo "</tr>";
     echo "</table>";

for ($i = 1; $i <= 10; $i++) {
if( isset($_POST['education'.$i]) )
{
	$fromPerson=filter_var($_POST['education'.$i], FILTER_SANITIZE_STRING);
    
	 echo "<table>";
     echo "<tr>";
     echo "<td><b>Education:</b></td>";
     echo "<td>&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;".$fromPerson."</td>";
	 echo "</tr>";
	 echo "</table>";
}}

for ($j = 1; $j <= 10; $j++) {
if( isset($_POST['jobExp'.$j]) )
{
	$fromPerson=filter_var($_POST['jobExp'.$j], FILTER_SANITIZE_STRING);
	 echo "<table>";
     echo "<tr>";
     echo "<td ><b>Job Experience:</b></td>";
     echo "<td>".$fromPerson."</td>";
	 echo "</tr>";
	 echo "</table>";
}}

    
		//echo $serialize;

$serialize= serialize($_POST);
$extension=".txt";
$var_str = var_export($serialize, true);
file_put_contents($lastname.$extension, $var_str);

?>
