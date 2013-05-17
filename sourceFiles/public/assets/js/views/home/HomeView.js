define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/home/homeTemplate.html'
], function($, _, Backbone, HomeTemplate){
	var homeView=Backbone.View.extend({
		  el:".page",
		  render:function(){
		  			console.log("home initialized!!");
		  			var template=_.template(HomeTemplate,{});
		  			this.$el.html(template);	
	  			}
	  		});
	  	return homeView;  
});