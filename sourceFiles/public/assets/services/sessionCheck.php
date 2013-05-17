<?php
header('Content-type: application/json; charset=utf-8');
include_once '../../../sys/core/init.inc.php';
$user=new Session($dbo);

		if(isset($_SESSION['user'])){
		if($_SERVER['REQUEST_METHOD']=='POST'){			
			$userData=(array)json_decode(file_get_contents('php://input'));			
			$arr=$user->crossCheck($userData);
			if($arr!=false){
				echo json_encode($arr);
			}
			else {
			header('HTTP/1.1 403 Forbidden Access');			
			}
			exit;
		}
		elseif($_SERVER['REQUEST_METHOD']=='DELETE'){
			unset($_SESSION);
			unset($_COOKIE);	
			header('HTTP/1.1 205 RESET CONTENT');
			exit;
		}
}

?>