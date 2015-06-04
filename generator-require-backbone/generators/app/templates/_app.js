define([
  "marionette",
  "backbone",], 
  function(Marionette, Backbone){

    var App = new Marionette.Application();  
	/*
    App.addRegions({      
      headerRegion: '#main-header',
      contentRegion: '#main-content',
      footerRegion: '#main-footer'     
    });
	*/

    App.navigate = function(route, options){
      options || (options = {});
      Backbone.history.navigate(route, options);
    };

    App.getCurrentRoute = function(){
      Backbone.history.fragment;
    };

    App.on("start", function(){
      if(Backbone.history){
        Backbone.history.start();      
      }
      alert("HOla");
      App.navigate("home");
    });


    return App;
});