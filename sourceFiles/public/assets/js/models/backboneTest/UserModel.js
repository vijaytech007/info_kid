define([
        'underscore',
        'backbone'
      ], function(_, Backbone) {
        
        var UserModel = Backbone.Model.extend({
        	urlRoot:'../assets/services/saveUser.php'
        });
        return UserModel;
});