<?php
$x=$_POST['a'];
$y=$_POST['b'];
mysql_connect("localhost","root","");
mysql_select_db("kachra");
$query="UPDATE kura SET password='$y' WHERE name='$x'";
mysql_query($query);
echo "update ho gaya";
?>