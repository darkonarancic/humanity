(function(){

	ItemDetailsController = can.Control({
		init: function(element, options){
			HumanityItems.findOne({id: can.route.attr('id')}, function(el){
				var frag = can.view(CONFIG.ROOT + 'views/itemDetails.html', el); 
				$(element.selector).html(frag);
			});
		},
	    destroy: function() {
	        can.Control.prototype.destroy.call( this );
	    }
	});
})();