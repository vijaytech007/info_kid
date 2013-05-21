define([
  'jquery',
  'underscore',
  'backbone',
  'models/login/LoginModel',
  'models/login/LoginTypeModel',
  'models/session/SessionModel',
  'routerControl/mainRouter',
  'text!templates/login/loginTemplate.html'
], function($, _, Backbone, LoginModel, LoginTypeModel, SessionModel, Router, LoginTemplate){
  var loginView=Backbone.View.extend({
	  el:".page",	
	  initialize:function(){
	  			  console.log("login View Initialized ");		
  		},
	  render:function(){
	  			console.log("login renderred!!",this.cid);
	  			var template=_.template(LoginTemplate,{});
	  			this.$el.html(template);	
  			},
  	events:{
  			"click .login-type-list li":"loginType",
  			"submit .login-user-form":"submitForm"
  			},	  			
   loginType:function(ev){
  				
  					$(".login-type-list li > i").removeClass("icon-check")
  										.addClass("icon-check-empty");
            
  				$(ev.currentTarget).children("i").removeClass("icon-check-empty")
  									 .addClass("icon-check");     

  			},
  	submitForm:function(ev){
  			console.log('in submit view is ',this.cid);
  			var that=this;
				var loginDetails=$(ev.currentTarget).serializeObject();
				    loginDetails.type=""; 
					loginDetails.type=LoginTypeModel.get();
					$(".error-message").hide(500);
					var loginModel=new LoginModel();
					loginModel.save(loginDetails,{			
					success:function(user){
							user.unset('password');
							window.activeSession=new SessionModel(user.toJSON());
							window.router=Router;
							window.router.initialize();
							if(!Backbone.History.started){
							Backbone.history.start();
							}
							window.router.controller.navigate('home',{trigger:true});
							//that.undelegateEvents();
					},
					error:function(){
						console.log("Wrong password enterred");
						$(".error-message").show(500);
						Backbone.history.stop();
					}
				});
				return false;
  	    	}	
  			
  		});
  	return loginView;  
});