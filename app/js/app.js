require('../scss/main.scss');

var angular = require('angular'),
    app = angular.module('app', [require('angular-ui-router'), require('angular-ui-bootstrap')]);

app.config(/*@ngInject*/ function($locationProvider, $stateProvider, $urlRouterProvider) {
    $locationProvider.html5Mode(true);

    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('root', { url: '/' })
        .state('submodule', { 
            url: '/submodule', 
            controller: 'SubmoduleCtrl',
            template: require('./submodule/template.html') 
        });
});

app.controller('SubmoduleCtrl', require('./submodule/submodule.controller'));