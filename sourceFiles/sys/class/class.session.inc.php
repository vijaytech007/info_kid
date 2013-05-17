<?php
class Session extends DB_Connect{	
	public $_status=array();
	public function __construct($dbo=NULL){
		parent::__construct($dbo);
	}
	public function crossCheck($user){		
		if($_SESSION['user']['username']==$user['username']  && $_SESSION['user']['type']==$user['type'] && $_SESSION['user']['token']==$user['token'])    	
    	return true;
    	elseif($_COOKIE['token']==$_SESSION['user']['token'] && $_COOKIE['username']==$_SESSION['user']['username']){
    		return true;
    	}
    	else
    	return false;    	
    }
    public function authenticate($user){    	
    	if($user['username']=='vijay' && $user['password']=='1002' && $user['type']=='parent'){    	
    	$user['token']=session_id();
    	unset($user['password']);
    	//setcookie("token",$user['token'],time()+3600, "", "localhost", 0, 1);  
    	setcookie("token",$user['token']);
    	setcookie("username",$user['username']);    	
    	$_SESSION['user']=$user;
    	return $user;
    	}
    	else
    	return false;
    }
}	