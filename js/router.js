
// App's navigation
App.Router.map(function() {
	this.resource('about');
	this.resource('posts', function() {
		this.resource('post', {path: ':post_id'});
	});
	this.resource('todos', { path: 'todos' }, function () {
		this.route('active');
  });
});

App.TodosRoute = Ember.Route.extend({
	model: function() {
		return this.store.filter('todo', function(todo) {
			return !todo.get('isCompleted');
		});
	},
	renderTemplate: function(controller) {
		this.render('todos/index', {controller: controller});
	}
});

App.TodosIndexRoute = Ember.Route.extend({
	model: function() {
		return this.modelFor('todos');
	}
});