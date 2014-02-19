App.Todo = DS.Model.extend({
	title: DS.attr('string'),
	isCompleted: DS.attr('boolean')
});

App.Todo.FIXTURES = [
	{
		id: 1,
		title: 'Completed item',
		isCompleted: true
	},
	{
		id: 2,
		title: 'Uncompleted item number one',
		isCompleted: false
	},
	{
		id: 3,
		title: 'Uncompleted item number two',
		isCompleted: false
	}
];