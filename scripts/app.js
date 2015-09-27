(function(){

	var itemListController = null;
	var itemDetailsController = null;
	var dashboard = null;

	$.getJSON('scripts/config.json', function(data){
		$.extend(window, data);
	});

	var Routing = can.Control({
		'route': function(){
			dashboard = new DashboardController('#main-content');
		},
		'items/:id route': function(data){
			if(can.route.attr('id') === 'all'){
				if(itemListController){
					itemListController.destroy();
				}
				itemListController = new ItemListController('#main-content', {});
			}
			else {
				if(itemDetailsController){
					itemDetailsController.destroy();
				}
				itemDetailsController = new ItemDetailsController('#main-content', {});
			}
		}
	});

	new Routing(window);
	can.route.ready();
})();