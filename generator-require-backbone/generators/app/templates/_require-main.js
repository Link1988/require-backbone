requirejs.config({
    baseUrl: "js",
    paths: {
        backbone: "vendor/backbone/backbone",    
        jquery: "vendor/jquery/dist/jquery",    
        marionette: "vendor/backbone.marionette/lib/backbone.marionette",        
        text: "vendor/requirejs-text/text",
        tpl: "vendor/underscore-tpl/dist/underscore-tpl",
        underscore: "vendor/underscore/underscore",
        bootstrap: "vendor/bootstrap/dist/js/bootstrap",
        lodash: "vendor/lodash/dist/lodash"
    },
    
    shim: {
        underscore: {
            exports: "_"
        },
        backbone: {
            deps: [ "lodash", "jquery", "underscore"],
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