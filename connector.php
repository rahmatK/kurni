<?php
$server='localhost';
$username_db='root';
$password_db='';
$database='boat';

$id_mysql = mysql_connect($server, $username_db, $password_db);

if(!$id_mysql)
die("Can not connect to MySQL server");

if(!mysql_select_db($database, $id_mysql))
die("database can not be selected");
?>