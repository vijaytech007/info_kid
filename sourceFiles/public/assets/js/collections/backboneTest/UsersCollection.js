define([
        'underscore',
        'backbone'
      ], function(_, Backbone) {
        
        var UsersCollection = Backbone.Collection.extend({
     	url:'../assets/services/getUserList.php'
        });        
        return UsersCollection;
        
		}
);