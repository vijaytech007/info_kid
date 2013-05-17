define([
  'jquery',
  'underscore',
  'backbone',  
  'views/header/HeaderView',
  'views/footer/FooterView',
  'views/home/HomeView',
  'views/login/LoginView'  
], function($, _, Backbone, HeaderView, FooterView, HomeView, LoginView){
  var initialize = function(){  
	  		var headerView=new HeaderView();
	  		var footerView=new FooterView();
	  		var loginView=new LoginView();
	  		var homeView=new HomeView();
	  		headerView.render(window.activeSession);
	  		footerView.render();
	  		if(!window.activeSession){
	  		loginView.render();	  		
	  		}
	  		else{
	  			homeView.render();
	  		}
  };
  $.ajaxSetup({
	    statusCode: {
	        401: function(){
	  				//wrong password
	             console.log("error 401 triggered");	             
	             
	        },
	        403:function(){
	        	//Forbidden Access
	        	console.log("error 403 triggered");
	        	if(window.activeSession){
	            	 delete window.activeSession;
	            	 delete window.router;
	             }
	        	initialize();
	        },
	        205:function(){
	        	console.log('logging out');
	        	if(window.activeSession){	        		
	            	 delete window.activeSession;
	            	 window.router.controller.navigate('',{trigger:true});
	        		 Backbone.history.stop();
	            	 delete window.router;
	             }
	        	initialize();	        	
	        }
	    }
	});
  return {
    initialize: initialize
  };
});