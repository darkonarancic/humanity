(function(){
	ItemDetailsController = can.Control({
		init: function(element, options){
			HumanityItems.findOne({id: can.route.attr('id')}, function(el){
				var frag = can.view(CONFIG.ROOT + 'views/item-details.ejs', el); 
				$(element.selector).html(frag);
			});
		}
	});
})();