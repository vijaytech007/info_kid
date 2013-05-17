<?php
header('Content-type: application/json; charset=utf-8');
include_once '../../../sys/core/init.inc.php';
$user=new Session($dbo);

if($_SERVER['REQUEST_METHOD']=='POST'){
	$userData=(array)json_decode(file_get_contents('php://input'));
	$arr=$user->authenticate($userData);
		if($arr!=false){
			echo json_encode($arr);
			exit;
			}
		else {
			header('HTTP/1.1 401 Unauthorized user');	
			echo json_encode($arr);			
		}	
}

/*else {	
print_r($_SESSION);exit;
	if($arr['code']==200){
			echo json_encode($arr);
		}
	elseif($arr['code']==403){	
		header('HTTP/1.1 403 Forbidden Access');	
		echo json_encode($arr);
	}
	elseif($arr['code']==401){
		header('HTTP/1.1 401 Unauthorized');
		echo json_encode($arr);		
	}					
}*/

?>