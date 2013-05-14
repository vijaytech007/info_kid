define([
  'jquery',
  'underscore',
  'backbone',
  'routerControl/router',
  'models/backboneTest/UserModel',  
  'text!templates/backboneTest/editUserFormTemplate.html'
], function($, _, Backbone, RouterTest, UserModel, EditUserFormTemplate){	
 var router;
 require(['routerControl/router'],function(routerControl){	
	 router=routerControl;
 });
var EditUser=Backbone.View.extend({
	el:".page",
	render:function(options){
		var that=this;
		that.user=new UserModel({id:options.id});
		if(options.id){			
			that.user.fetch({
				success:function(user){					
					var template=_.template(EditUserFormTemplate,{user:user});
					that.$el.html(template);
				}
			});	
		}
		else{
		var template=_.template(EditUserFormTemplate,{user:null});
		this.$el.html(template);
		}
	},
	events:{
		"submit .edit-user-form":"saveUser",
		"click .delete":"deleteUser"	
	},
	saveUser:function(ev){
		var userDetails=$(ev.currentTarget).serializeObject();
		var user=new UserModel();
		user.save(userDetails,{			
			success:function(user){					
				router.controller.navigate('',{trigger:true});
			}
		});
		return false;
	},
	deleteUser:function(ev){
		this.user.destroy({
			success:function(){
			router.controller.navigate('',{trigger:true});
			}
			});
		return false;	
		}
});
	return EditUser;
});
