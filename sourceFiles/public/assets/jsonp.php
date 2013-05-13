<?php
header('Content-type: application/json; charset=utf-8');
$data = array( 

		        "0"=>array("text"=> "Western",
						   "children"=> array(
		                                   "0"=>array(
													"id"=> "CA",
													"text"=> "California"),
											"1"=>array(
		                                           "id"=> "AZ", 
												   "text"=> "Arizona" )
		                                  )
		                  ),
		        "1"=>array(                          
		        			"text"=> "Eastern", 
		                    "children"=>array(
		                                     "0"=>array("id"=> "FL",
		                  					 			"text"=> "Florida"
		                  					 			) 
		                                  
		                  					 )
		                  )
		       );           					 
		      
echo json_encode( $data );
?>