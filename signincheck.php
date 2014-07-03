<?php
   

include ('connector.php');

    $email= $_POST ['email'];
    $password= $_POST ['password'];
    
    include ('connector.php');
    
    $query="SELECT password, iduser FROM user WHERE email='$email'";
    
    $hasil=mysql_query ($query, $id_mysql);
    
    while ($record=mysql_fetch_row($hasil))
    {
        $password_check = $record[0];
        $id_check=$record[1];
    }
    
     if ($password==$password_check){
        session_start();
        $_SESSION['login']="yes";
        $_SESSION['id']=$id_check;
        $success= $success.'Welcome';
        header("Location:index.php?success=$success");
    }
    else
        header('Location:signin.php?error=Email or Password is incorrect!');

?>