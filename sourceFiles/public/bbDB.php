<?php
$con = mysql_connect("localhost","root","root123");
if (!$con)
  {
  die('Could not connect: ' . mysql_error());
  }
  header('Content-type: application/json; charset=utf-8');
mysql_select_db("my_db", $con);
//	echo file_get_contents('php://input');
    $data = json_decode(file_get_contents('php://input'));
    $name = $data->{'name'};    
    $email=$data->{'email'};
$query="insert into bb_user (_name,_email) values('$name','$email')";
$status=mysql_query($query);
$arr=array(
			"name"=>"dd",
			"email"=>"dd@info.com",
			"status"=>$status
);
echo json_encode($arr);

?>