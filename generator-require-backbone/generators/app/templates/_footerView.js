define([
	"app",
	"tpl!modules/main/templates/footer.tpl"], 
	function(App, footerTemplate) {
		var FooterView = Marionette.ItemView.extend({
			template: footerTemplate
		});
		
		return FooterView;
});