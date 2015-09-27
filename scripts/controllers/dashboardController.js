(function(){

	DashboardController = can.Control({
		init: function(element, options){
			HumanityDashboard.findAll({}, function(elements){
				var frag = can.view('views/dashboard.html', 
					{
						items: {
							elements: elements,
							itemUrl: CONFIG.ROOT + CONFIG.ITEMS_URL
						} 
					}	
				); 
				$(element.selector).html(frag);
			});
		},
	    destroy: function() {
	        can.Control.prototype.destroy.call( this );
	    }
	});
})();