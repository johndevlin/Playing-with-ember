
// App's navigation
App.Router.map(function() {
	this.resource('about');
	this.resource('posts', function() {
		this.resource('post', {path: ':post_id'});
	});
	this.resource('todos');
});

App.TodosRoute = Ember.Route.extend({
	model: function() {
		return this.store.find('todo');
	}
});