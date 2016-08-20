require('../scss/main.scss');

var angular = require('angular'),
    app = angular.module('app', []);

app.config(/*@ngInject*/ function($locationProvider) {
    $locationProvider.html5Mode(true);
});