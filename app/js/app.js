require('../scss/main.scss');

var angular = require('angular'),
    app = angular.module('app', []);

app.config(function() {
    console.log('app.config');
});