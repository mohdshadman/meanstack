<?php
$m=$_POST['a'];
$n=$_POST['b'];
$o=$_POST['c'];
$p=$_POST['d'];
if($m==""||$n==""||$o==""||$p==""){
    echo "Fill all the entries in the form";
}
else{
    mysql_connect("localhost","root","");
    mysql_select_db("jamun");
    $query="SELECT * FROM kala WHERE name='$m' AND password='$o'";
    $result=mysql_query($query);
    $con=mysql_num_rows($result);
    if($con==0){
        $query="INSERT INTO kala (name,email,password,phone) VALUES('$m','$n','$o','$p')";
        mysql_query($query);
        echo "Record updated";
    }
    else{
        echo "User already exists";
    }
}
?>