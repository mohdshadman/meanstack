<?php
$x=$_POST['a'];
mysql_connect("localhost","root","");
mysql_select_db("kachra");
$query="DELETE FROM kura WHERE name='$x'";
mysql_query($query);
echo "DELETED";
?>