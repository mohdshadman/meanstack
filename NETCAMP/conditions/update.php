<?php
$m=$_POST['a'];
$n=$_POST['b'];
if($m==""||$n==""){
    echo "Fill all the entries in the form";
}
else{
    mysql_connect("localhost","root","");
    mysql_select_db("jamun");
    $query="SELECT * FROM kala WHERE name='$m'";
    $result=mysql_query($query);
    $con=mysql_num_rows($result);
    if($con!=0){
       $query="UPDATE kala SET password='$n' WHERE name='$m'";
        mysql_query($query);
        echo "Record Updated....";
    }
    else{
        echo "Record not found in our database";
    }
}
?>