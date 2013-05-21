define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/header/headerTemplate.html'
], function($, _, Backbone, HeaderTemplate){
  var headerView=Backbone.View.extend({
	  el:".header",
	  render:function(session){
	  			console.log(" Login header initialized!!");	  				  		
	  			var template=_.template(HeaderTemplate,{activeSession:null});
		  		this.$el.html(template);		  		
	  			
  			}
  		});
  	return headerView;  
});