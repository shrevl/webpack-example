import "../assets/scss/main.scss";
import "./submodule/module";

import angular from "angular";

var app = angular.module("app", ["app.submodule"]);

app.config(/*@ngInject*/ ($locationProvider, $urlRouterProvider) => {
	$locationProvider.html5Mode(true);
	$urlRouterProvider.otherwise("/");
});

export default app;