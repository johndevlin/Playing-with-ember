
// App's navigation
App.Router.map(function() {
	this.resource('about');
	this.resource('posts', function() {
		this.resource('post', {path: ':post_id'});
	});
	this.resource('todos', function () {
   	 // additional child routes will go here later
  });
});

App.TodosRoute = Ember.Route.extend({
	model: function() {
		return this.store.find('todo');
	}
});

App.TodosIndexRoute = Ember.Route.extend({
	model: function() {
		return this.modelFor('todos');
	}
});