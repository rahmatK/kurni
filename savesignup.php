<?php

include ('connector.php');

 $firstname= $_POST['firstname'];
 $lastname=$_POST['lastname'];
 $email=$_POST['email'];
 $password=$_POST['password'];
 
$query = "INSERT INTO user (iduser, firstname, lastname, email, password) VALUES (NULL, '$firstname', '$lastname', '$email', '$password')";

$result = mysql_query ($query, $id_mysql);


if(!$result)
{
    die('Data can not be entered!: ' . mysql_error());
}
else 
header('Location:index.php');

mysql_close($id_mysql);


?>