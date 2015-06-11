define([
	"app",
	"tpl!modules/main/templates/header"], 
	function(App, headerTemplate){
		var HeaderView = Marionette.ItemView.extend({
			template: headerTemplate
		});
		return HeaderView;
});