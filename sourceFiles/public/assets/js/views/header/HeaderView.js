define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/header/headerTemplate.html'
], function($, _, Backbone, HeaderTemplate){
  var headerView=Backbone.View.extend({
	  el:".header",
	  render:function(session){
	  			console.log("header initialized!!");
	  			var that=this;	  			
	  			if(session){
	  			var template=_.template(HeaderTemplate,{activeSession:session});
	  			this.$el.html(template);
	  			}
	  			else{
	  			var template=_.template(HeaderTemplate,{activeSession:null});
		  		this.$el.html(template);
		  		this.undelegateEvents();
	  			}	  			
  			},
  		events:{
  			"click .menu-icon":"toggleMenu"
  		},
  		toggleMenu:function(ev){  			
  			ev.preventDefault(); 
  			console.log("header : ",this.cid);
  			$(".menu-icon").children().last("i").toggleClass("icon-chevron-sign-down icon-chevron-sign-up");
  			$(".menu-content-wrapper")
  							.toggleClass(
  										'menu-content-wrapper-expanded'		
  										);
  		}
  		});
  	return headerView;  
});