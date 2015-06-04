requirejs.config({
  baseUrl: "../bower_components",
  paths: {
    backbone: "backbone",    
    jquery: "jquery/src/jquery",    
    marionette: "backbone.marionette",        
    text: "requirejs-text",
    tpl: "underscore-tpl",
    underscore: "underscore",
    bootstrap: "bootstrap/dist/js/bootstrap"
  },
                          
  shim: {
    underscore: {
      exports: "_"
    },
    backbone: {
      deps: ["jquery", "underscore"],
      exports: "Backbone"
    },
    "bootstrap": ["jquery"],    
    marionette: {
      deps: ["backbone"],
      exports: "Marionette"
    },
    tpl: ["text"]
  }
});

require(["app", "bootstrap"], function(App){
  App.start();
});