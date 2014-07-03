<?php
session_start();
if ($_SESSION['login']!="yes"){
   include 'header.php';
    }
    
    else {
    include 'headerb.php';}
        ;
    
?>

