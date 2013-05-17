define([
  'jquery',
  'underscore',
  'backbone'
], function($, _, Backbone){
	var sessionModel=Backbone.Model.extend({
				initialize:function(){
							console.log("session started");		
				},
				urlRoot:"assets/services/sessionCheck.php",
				getAuth: function() {
				      // getAuth is wrapped around our router
				      // before we start any routers let us see if the user is valid
					var that=this;
				      this.save(that.toJSON(),{
				          success: function(){
				    	  console.log("valid user");				    	  
				      }
				      });
				    }
	});
  return sessionModel;
});