
// Populate app with data (below)
App.Todo = DS.Model.extend({
	title: DS.attr('string'),
	isCompleted: DS.attr('boolean')
});

// Todo app data
App.Todo.FIXTURES = [
	{
		id: 1,
		title: 'Completed item',
		isCompleted: true
	},
	{
		id: 2,
		title: 'Incomplete item number one',
		isCompleted: false
	},
	{
		id: 3,
		title: 'Incomplete item number two',
		isCompleted: false
	}
];