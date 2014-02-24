window.App = Ember.Application.create();
App.ApplicationAdapter = DS.FixtureAdapter.extend();

App.ApplicationAdapter = DS.LSAdapter.extend({
	namespace: 'todos-emberjs'
});

// Posts model
App.PostsRoute = Ember.Route.extend({
	model: function() {
		return posts;
	}
});

// Display posts by ID
App.PostRoute = Ember.Route.extend({
	model: function(params) {
		return posts.findBy('id', params.post_id);
	}
});

// Edit controls
App.PostController = Ember.ObjectController.extend({
	isEditing: false,

	actions: {
		edit: function() {
			this.set('isEditing', true);
		},

		doneEditing: function() {
			this.set('isEditing', false);
		}
	}
});

// Format date
Ember.Handlebars.helper('format-date', function(date) {
	return moment(date).fromNow();
});

// Convert Markdown to HTML
var showdown = new Showdown.converter();

Ember.Handlebars.helper('format-markdown', function(input) {
	return new Handlebars.SafeString(showdown.makeHtml(input));
});





