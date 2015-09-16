(function(){
	var map;
	ItemListController = can.Control({
		init: function(element, options){

			HumanityItems.findAll({}, function(elements){
				map = new can.Map(elements);
				$.extend(elements, {itemUrl: CONFIG.ROOT + CONFIG.ITEM_URL});
				var frag = can.view(CONFIG.ROOT + 'views/item-list.ejs', elements); 
				$(element.selector).html(frag);
			});
		},
		'#btn-delete click': function(btn, event){
			listEl = btn.data('el');
			listEl.destroy();
			event.stopPropagation();
		},
		'#btn-add click': function(btn, event){
			console.log(ItemList)
			var title = $('#title').val(),
				sDes = $('#short-description').val(),
				fDes = $('#full-description').val();

			new HumanityItems({
				title: title,
				shortDescription: sDes,
				description: fDes
			}).save();

			event.stopPropagation();
		}
	});
})();