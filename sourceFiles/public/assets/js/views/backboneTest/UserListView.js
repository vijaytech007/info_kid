define([
  'jquery',
  'underscore',
  'backbone',  
  'collections/backboneTest/UsersCollection',  
  'text!templates/backboneTest/userListTemplate.html'
], function($, _, Backbone, UsersCollection, UserListTemplate){	
var UserList=Backbone.View.extend({
	el:".page",
	render:function(){
		var that=this;
		var users=new UsersCollection();
		this.$el.html("loading...");
		users.fetch({
			success:function(users){
				var template=_.template(UserListTemplate,{users:users.models});
				that.$el.html(template);
			}
		});
		
	}
});

return UserList;
});