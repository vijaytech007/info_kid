<?php
header('Content-type: application/json; charset=utf-8');
include_once '../../../sys/core/init.inc.php';
$userList=new UserList($dbo);
if(isset($_SERVER['PATH_INFO'])){
	if($_SERVER['REQUEST_METHOD']=='PUT'){
	$receivedToUpdate=json_decode(file_get_contents('php://input'));
	$updateUser=(array)$receivedToUpdate;
	$status=$userList->updateUser($updateUser);
	echo $status;
	exit;
	}
	elseif ($_SERVER['REQUEST_METHOD']=='DELETE'){
	$id= substr($_SERVER['PATH_INFO'],1);
	$isdel=$userList->deleteUser($id);
	echo $isdel;
	exit;	
	}
	else{
	$id= substr($_SERVER['PATH_INFO'],1);
	$userData=$userList->getById($id);
	echo json_encode($userData);
	exit;
	}
}
$data=json_decode(file_get_contents('php://input'));
     $arr=(array)$data;
	$users=$userList->save($arr);
	echo json_encode($users);	
?>