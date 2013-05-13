<?php
class UserList extends DB_Connect{
	private $_userList;
	public function __construct($dbo=NULL){
		parent::__construct($dbo);
	}
	public function getAllUsers(){
		$sql = "SELECT * FROM bb_user";
		try{
		$stmt = $this->db->prepare($sql);
		$stmt->execute();
		$result=$stmt->fetchAll(PDO::FETCH_ASSOC);
		$stmt->closeCursor();
		return $result;
		}
		catch(Exeption $e){
			die($e-getMessage());
		}
		
	}
	public function save($data){
		$name=$data['name'];
		$email=$data['email'];
		$sql="insert into bb_user (_name,_email) values('$name','$email')";	
		try{
			$stmt = $this->db->prepare($sql);
			$stmt->execute();			
			//$data['id']=$this->db->lastInsertId();
			$rdata=array("id"=>$this->db->lastInsertId()); 					
			$stmt->closeCursor();
			return $rdata;			
			//return $data;
		}
		catch(Exeption $e){
			die($e-getMessage());
		}
		
	}
	public function getById($id){
		$userInfo=array("id"=>$id);
		$sql="select * from bb_user where _uid=:id LIMIT 1";
		try {
			$stmt=$this->db->prepare($sql);
			$stmt->bindParam(":id",$id);
			$stmt->execute();
			$result=$stmt->fetch(PDO::FETCH_ASSOC);
			$stmt->closeCursor();
			$userInfo['name']=$result['_name'];
			$userInfo['email']=$result['_email'];			
		return $userInfo;	
		}
		catch (Exception $e){
			die($e->getMessage());
		}
		
	}
	
	public function updateUser($user){
		$sql="update bb_user set _name=:name,_email=:email where _uid=:id";
		try {
			$stmt=$this->db->prepare($sql);
			$stmt->bindParam(":id",$user['id']);
			$stmt->bindParam(":name",$user['name']);
			$stmt->bindParam(":email",$user['email']);
			$stmt->execute();			
			$stmt->closeCursor();					
		return true;	
		}
		catch (Exception $e){
			die($e->getMessage());
		}
	}
	
	public function deleteUser($id){
		$sql="delete from bb_user where _uid=:id";
			try {
				$stmt=$this->db->prepare($sql);
				$stmt->bindParam(":id",$id);				
				$stmt->execute();			
				$stmt->closeCursor();					
			return true;	
			}
			catch (Exception $e){
				die($e->getMessage());
			}
	}			
}
?>