
// Populate app with data (below)
App.Todo = DS.Model.extend({
	title: DS.attr('string'),
	isCompleted: DS.attr('boolean')
});

// Todo app data
App.Todo.FIXTURES = [
	{
		id: 1,
		title: 'Create a Github repo',
		isCompleted: true
	},
	{
		id: 2,
		title: 'Learn Ember',
		isCompleted: false
	},
	{
		id: 3,
		title: 'Finish todo app',
		isCompleted: false
	}
];