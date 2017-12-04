
<?php

$filename=htmlspecialchars($_GET["name"]);

$extension=".txt";



$contents=file_get_contents($filename.$extension);

echo $contents;

echo unserialize($contents);





//echo 'Hello ' . htmlspecialchars($_GET["name"]) . '!';
?>
