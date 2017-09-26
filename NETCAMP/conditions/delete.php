<?php
$m=$_POST['a'];
$n=$_POST['b'];
if($m==""||$n==""){
    echo "Fill all the entries in the form";
}
else{
    mysql_connect("localhost","root","");
    mysql_select_db("jamun");
    $query="SELECT * FROM kala WHERE name='$m' AND password='$n'";
    $result=mysql_query($query);
    $con=mysql_num_rows($result);
    if($con!=0){
       $query="DELETE FROM kala WHERE name='$m' AND password='$n'";
        mysql_query($query);
        echo "Record Deleted....";
    }
    else{
        echo "Record not found in our database";
    }
}
?>