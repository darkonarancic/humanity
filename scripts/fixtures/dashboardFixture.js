(function(){
	
	//statick data for dashboard
	var DASHBOARD = [
		{id: 1, title: "First Title", el: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."},
		{id: 2, title: "Second Title", el: "2 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."}
	];

	//set of functions that simulates REST calls for dashboard
	can.fixture('GET /dashboard', function(){
		return DASHBOARD;
	});

	can.fixture('GET /dashboard/{id}', function (request) {
		return DASHBOARD[(+request.data.id)-1];
	})
	//eof set of functions that simulates REST calls for dashboard
})();