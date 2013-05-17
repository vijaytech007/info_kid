define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/footer/footerTemplate.html'
], function($, _, Backbone, FooterTemplate){
  var footerView=Backbone.View.extend({
	  el:".footer",
	  render:function(){
	  			console.log("footer initialized!!");
	  			var template=_.template(FooterTemplate,{});
	  			this.$el.html(template);	
  			}
  		});
  	return footerView;  
});