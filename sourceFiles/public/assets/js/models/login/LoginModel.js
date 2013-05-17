define([
  'jquery',
  'underscore',
  'backbone'
], function($, _, Backbone){
	
	var loginModel=Backbone.Model.extend({
		urlRoot:"assets/services/login.php"
	});

  return loginModel;
});