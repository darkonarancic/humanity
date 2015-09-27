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

