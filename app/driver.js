var Backbone = require('backbone');
var Marionette = require('backbone.marionette');
var ToDoView = require('./views/layout');
var ToDoModel = require('./models/todo');


var initialData = {
    items: [
        {assignee: 'Scott', text: 'Write a book about Marionette'},
        {assignee: 'Andrew', text: 'Do some coding'},
        {assignee: 'Russ', text: 'Do some testing'}
    ]
};

var app = new Marionette.Application({
    onStart: function(options) {
        var todo = new ToDoView({
            collection: new Backbone.Collection(options.initialData.items),
            model: new ToDoModel()
        });
        todo.render();
        todo.triggerMethod('show');
    }
});

app.start({initialData: initialData});
window.app = app;