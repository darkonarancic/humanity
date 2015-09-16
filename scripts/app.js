(function(){
	$.getJSON('scripts/config.json', function(data){
		$.extend(window, data);
	});

	var Routing = can.Control({
		'route': function(){
			var Dashboard = new DashboardController('#main-content', {});
		},
		'items/:id route': function(data){
			if(can.route.attr('id') === 'all'){
				ItemList = new ItemListController('#main-content', {});
			}
			else {
				ItemDetail = new ItemDetailsController('#main-content', {});
			}
		}
	});

	new Routing(window);
	can.route.ready();
})();