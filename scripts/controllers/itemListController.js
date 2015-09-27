(function(){
	var allElements = null;
	ItemListController = can.Control({
		init: function(element, options){
			this.getLatestList(element);
		},
		getLatestList: function(element){
			HumanityItems.findAll({}, function(elements){
				var frag = null;
				allElements = {
					items: elements,
					itemUrl: CONFIG.ROOT + CONFIG.ITEM_URL
				};
				frag = can.view(CONFIG.ROOT + 'views/itemList.html', allElements); 
				$(element.selector).html(frag);
			});
		},
		'#btn-delete click': function(btn, event){
			var listEl = btn.data('el');
			listEl.destroy();
		},
		'#btn-add click': function(btn, event){
			var title = $('#title').val();
			var	sDes = $('#short-description').val();
			var	fDes = $('#full-description').val();

			var newItem = new HumanityItems({
				title: title,
				shortDescription: sDes,
				description: fDes
			}).save().then(function(data){
				allElements.items.push(data);
			});
			event.stopPropagation();
		},
	    destroy: function() {
	        can.Control.prototype.destroy.call( this );
	    }
	});
})();