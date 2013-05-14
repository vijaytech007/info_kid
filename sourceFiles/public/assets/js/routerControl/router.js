define([
  'jquery',
  'underscore',
  'backbone',  
  'views/backboneTest/UserListView',
  'views/backboneTest/EditUserView'  
], function($, _, Backbone, UserListView, EditUserView) {
  
  var AppRouter = Backbone.Router.extend({
	  routes:{
		'':'home',
		'new':'editUser',
		'edit/:id':'editUser'
	}	
  });
  var app_router = new AppRouter();
  var initialize = function(){   
    var userList=new UserListView();
    var editUser=new EditUserView();
    
    app_router.on(
    		'route:home',function(){
    			userList.render();
    		});
    app_router.on(
    		'route:editUser',function(id){
    			editUser.render({id:id});
    		});	
 
    Backbone.history.start();
  };
  return {
    initialize: initialize,
    controller: app_router
  };
});