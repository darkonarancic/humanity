var HumanityItems = can.Model.extend({
	findAll: 'GET /items',
	findOne: 'GET /items/{id}',
	create: 'POST /items',
	update: 'PUT /items/{id}',
	destroy: 'DELETE /items/{id}'
}, {});

var HumanityDashboard = can.Model.extend({
	findAll: 'GET /dashboard',
	findOne: 'GET /dashboard/{id}'
}, {});

(function(){

	//statick data for dashboard
	var DASHBOARD = [
		{id: 1, title: "First Title", el: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."},
		{id: 2, title: "Second Title", el: "2 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."}
	];

	//statick data for items
	var ITEMS = [
		{id: 1, title: "Item 1", shortDescription: "Item 1 short description", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."},
		{id: 2, title: "Item 2", shortDescription: "Item 2 short description", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."},
		{id: 3, title: "Item 3", shortDescription: "Item 3 short description", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."}
	];


	//set of functions that simulates REST calls for dashboard
	can.fixture('GET /dashboard', function(){
		return DASHBOARD;
	});

	can.fixture('GET /dashboard/{id}', function (request) {
		return DASHBOARD[(+request.data.id)-1];
	})
	//eof set of functions that simulates REST calls for dashboard

	//set of functions that simulates REST calls for items
	can.fixture('GET /items', function(){
		return ITEMS;	
	});

	can.fixture('GET /items/{id}', function (request) {
		return ITEMS[(+request.data.id)-1];
	});

	can.fixture('POST /items', function(request){
		var id = 1;
		ITEMS.filter(function(el){
			if((+el.id) >= id){
				id = el.id;
				id++;
			}
		});
		ITEMS.push($.extend({id: id}, request.data));
		return {id:id};
	});

	can.fixture('PUT /items/{id}', function(request){
		$.extend(ITEMS[(+request.data.id)-1], request.data);
		return {};
	});
	
	can.fixture('DELETE /items/{id}', function(request){
		ITEMS.splice(ITEMS[(+request.data.id)-1],1);
		var index = 1;
		ITEMS.filter(function(el){
			el.id = index;
			index++;
		});
		return {};
	});
	//eof set of functions that simulates REST calls for items

})();
