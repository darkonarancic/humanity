(function(){
	DashboardController = can.Control({
		init: function(element, options){
			HumanityDashboard.findAll({}, function(elements){
				var newData = {
					el: elements,
					itemUrl: CONFIG.ROOT + CONFIG.ITEMS_URL
				};
				var frag = can.view('views/dashboard.ejs', newData); 
				$(element.selector).html(frag);
			});
		}
	});
})();