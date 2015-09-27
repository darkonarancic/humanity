(function(){

	var index = 4;

	//statick data for items
	var ITEMS = [
		{id: 1, title: "Item 1", shortDescription: "Item 1 short description", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."},
		{id: 2, title: "Item 2", shortDescription: "Item 2 short description", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."},
		{id: 3, title: "Item 3", shortDescription: "Item 3 short description", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."}
	];

	//set of functions that simulates REST calls for items
	can.fixture('GET /items', function(){
		return ITEMS;	
	});

	can.fixture('GET /items/{id}', function (request) {
		return ITEMS.filter(function(el){
			if(el.id === (+request.data.id)){
				return el;
			}
		})[0];
	});

	can.fixture('POST /items', function(request){
		var id = index++;
		ITEMS.push($.extend({id: id}, request.data));
		return {id:id};
	});

	can.fixture('PUT /items/{id}', function(request){
		$.extend(ITEMS[(+request.data.id)-1], request.data);
		return {};
	});
	
	can.fixture('DELETE /items/{id}', function(request){
		ITEMS.filter(function(el, index){
			if(el.id === (+request.data.id)) {
				ITEMS.splice(index,1);
			}
		});
		return {};
	});
	//eof set of functions that simulates REST calls for items
})();