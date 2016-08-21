import '../scss/main.scss';
import './submodule/submodule';

import angular from 'angular';

var app = angular.module('app', ['app.submodule']);

app.config(/*@ngInject*/ ($locationProvider, $urlRouterProvider) => {
    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/');
});

export default app;