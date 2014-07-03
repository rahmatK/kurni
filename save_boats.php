<?php

include ('connector.php');

 $category= $_POST['category'];
 $make=$_POST['make'];
 $model=$_POST['model'];
 $iduser=$_POST['iduser'];
 
$query = "INSERT INTO boat (id, iduser, category, make, model) VALUES (NULL, '$iduser', '$category', '$make', '$model')";

$result = mysql_query ($query, $id_mysql);
$idboat=mysql_insert_id();
if(!$result)
{
    die('Data can not be entered!: ' . mysql_error());
}
else
header("Location:edit_boatdetails.php?idboat=$idboat");

mysql_close($id_mysql);


?>