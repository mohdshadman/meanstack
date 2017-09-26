<?php
$m=$_POST['a'];
$n=$_POST['b'];
$o=$_POST['c'];
$p=$_POST['d'];

mysql_connect("localhost","root","");
mysql_select_db("kachra");
$query="INSERT INTO kura (name,email,password,phone) VALUES('$m','$n','$o','$p')";
mysql_query($query);
echo "ho gaya";

?>