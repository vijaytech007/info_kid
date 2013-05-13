<?php
header('Content-type: application/json; charset=utf-8');
include_once '../../../sys/core/init.inc.php';
$userList=new UserList($dbo);	
			$users=$userList->getAllUsers();
			echo json_encode($users);	
	
?>