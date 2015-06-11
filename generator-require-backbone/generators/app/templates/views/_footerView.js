define([
	"app",
	"tpl!modules/main/templates/footer"], 
	function(App, footerTemplate) {
		var FooterView = Marionette.ItemView.extend({
			template: footerTemplate
		});
		
		return FooterView;
});