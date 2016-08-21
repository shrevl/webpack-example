import template from './modal/modal.html';

/* @ngInject */
export default function SubmoduleCtrl($uibModal) {
	this.open = function() {
		var modal = $uibModal.open({
			template: template,
			controller: 'ModalCtrl',
			controllerAs: 'modal'
		});
	};
};