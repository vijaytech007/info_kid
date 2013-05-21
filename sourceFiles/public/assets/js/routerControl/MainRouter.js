define([
  'jquery',
  'underscore',
  'backbone',  
  'views/header/HeaderView',
  'views/footer/FooterView',  
  'views/home/HomeView'
], function($, _, Backbone, HeaderView, FooterView, HomeView) {
  
  var AppRouter = Backbone.Router.extend({
	  routes:{
		'home':'home',
		'':'login',
		'logout':'logout'
	}	
  });
 
  var app_router = new AppRouter();	
  var headerView=new HeaderView();
  var footerView=new FooterView();    
  var homeView=new HomeView();
  var initialize = function(){   

    app_router.on(
    		'route:home',function(){
    			window.activeSession.getAuth();
    			headerView.render(window.activeSession);
    			footerView.render();    			
    			homeView.render();
    		});   
    app_router.on(
    		'route:login',function(){
    			if(window.activeSession){
    			//window.activeSession.getAuth();
    			window.router.controller.navigate('home',{trigger:true});
    			}
    		});   
    app_router.on(
    		'route:logout',function(){
    			if(window.activeSession){
    				console.log("logging out");    
    				window.activeSession.set("id","delete");
    				window.activeSession.destroy();    	
    			    delete window.activeSession;
    			    window.router.controller.navigate('',{trigger:true}); 	            	
    			}
    		});      
  };
  return {
    initialize: initialize,
    controller: app_router
  };
});