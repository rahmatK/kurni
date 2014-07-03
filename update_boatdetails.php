<?php include ('checksession_user.php'); ?>

<?php

 include ('connector.php');
 $id=$_POST['id'];
 $category= $_POST['category'];
 $make=$_POST['make'];
 $model=$_POST['model'];
 $year=$_POST['year'];
 $size=$_POST['size'];
 $material=$_POST['material'];
 $length=$_POST['length'];
 $beam=$_POST['beam'];
 $height=$_POST['height'];
 $enginetype=$_POST['enginetype'];
 $enginemodel=$_POST['enginemodel'];
 $enginemake=$_POST['enginemake'];
 $fueltype=$_POST['fueltype'];
 $horsepower=$_POST['horsepower'];
 $hours=$_POST['hours'];
 $numberofengines=$_POST['numberofengines'];
 $condition=$_POST['condition'];
 
$query = "UPDATE boat SET category='$category', make='$make', model='$model', year='$year', size='$size', material='$material', length='$length', beam='$beam', height='$height', enginetype='$enginetype', enginemake='$enginemake', enginemodel='$enginemodel', fueltype='$fueltype', horsepower='$horsepower', hours='$hours', numberofengines='$numberofengines' WHERE id='$id'";

$result = mysql_query ($query, $id_mysql);


if(!$result)
{echo $id;
    die('Data can not be entered!: ' . mysql_error());
    
}
else 
header("Location:edit_boatdetails.php?idboat=$id");

mysql_close($id_mysql);


?>