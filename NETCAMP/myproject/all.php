<?php
$x=$_POST['a'];
mysql_connect("localhost","root","");
mysql_select_db("kachra");
$query="SELECT * FROM kura WHERE name='$x'";
$result=mysql_query($query);
echo "<table border='1'>";
$row=mysql_fetch_array($result);
foreach($row as $value){
    echo "<tr>.<td>.$value.</td><tr>";

}
echo "</table>"
    ?>