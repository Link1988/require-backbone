define([
    "marionette",
    "backbone",
    "modules/main/views/headerView",
    "modules/main/views/footerView"], 
    function(Marionette, Backbone, HeaderView, FooterView) {
        var App = new Marionette.Application();  
        
        App.addRegions({      
            headerRegion: '#main-header',
            contentRegion: '#main-content',
            footerRegion: '#main-footer'     
        });
        
        App.navigate = function(route, options) {
            options || (options = {});
            Backbone.history.navigate(route, options);
        };
        
        App.getCurrentRoute = function() {
            Backbone.history.fragment;
        };
        
        App.on("start", function() {
            if (Backbone.history) {
                Backbone.history.start();      
            }
            
            App.navigate("home");
            
            var HeaderView = new HeaderView();     
            var FooterView = new FooterView();
            alert("Hola");
            App.headerRegion.show(HeaderView);
            App.footerRegion.show(FooterView);
        });
        
        return App;
});