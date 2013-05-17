define([
        'jquery',
        'underscore',
        'backbone'
      ], function($, _, Backbone){		
	var types=['admin','parent','teacher'];
	var get=function(){
		       var type=null;
				_.each(types,function(item){
					if($("."+item).hasClass('icon-check'))
		   			type= item;
					});
		   	return type;		
			};
	return {get:get};		
});