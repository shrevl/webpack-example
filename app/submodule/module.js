import angular from 'angular';
import router from 'angular-ui-router';
import bootstrap from 'angular-ui-bootstrap';

import ModalCtrl from './modal/modal.controller';
import SubmoduleCtrl from './submodule.controller';
import template from './submodule.template.html';

var submodule = angular.module('app.submodule', [router, bootstrap]);

submodule.config(/*@ngInject*/ ($stateProvider) => {
	$stateProvider
		.state('submodule', { 
			url: '/submodule', 
			controller: 'SubmoduleCtrl',
			controllerAs: 'submodule',
			template: template
		});
});

submodule
	.controller('SubmoduleCtrl', SubmoduleCtrl)
	.controller('ModalCtrl', ModalCtrl);

export default submodule;