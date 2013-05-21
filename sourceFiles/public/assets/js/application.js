define([
  'jquery',
  'underscore',
  'backbone',  
  'views/header/HeaderView',
  'views/header/LoginHeaderView',
  'views/footer/FooterView',
  'views/home/HomeView',
  'views/login/LoginView'  
], function($, _, Backbone, HeaderView, LoginHeaderView, FooterView, HomeView, LoginView){
	    
	 //   var headerView=new HeaderView();
	    var loginHeaderView=new LoginHeaderView();
		var footerView=new FooterView();
		var loginView=new LoginView();
		var homeView=new HomeView();	
		var initialize = function(){  	  			  		
	  		footerView.render();
	  		if(!window.activeSession){
	  		loginView.render();	  		
	  		loginHeaderView.render();
	  		}
	  		else{
	  			window.router.controller.navigate('home',{trigger:true})
	  		/*	homeView.render();
	  			headerView.render(window.activeSession);*/
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
	            	 delete window.activeSession;
	            	 window.router.controller.navigate('',{trigger:true});
	            	 Backbone.history.stop();
	            	 delete window.router;	             
	        	initialize();
	        },
	        205:function(){
	        		console.log('At 205 logging out');	        	      			            	
	        		 Backbone.history.stop();
	        		 window.router.controller.off();
	            	 delete window.router;	            
	        	initialize();	        	
	        }
	    }
	});
  return {
    initialize: initialize
  };
});