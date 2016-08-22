import template from "./modal/modal.html";

export default class SubmoduleController {
	/* @ngInject */
	constructor($uibModal) {
		this.$uibModal = $uibModal;
	}

	open() {
		this.$uibModal.open({
			template: template,
			controller: "ModalCtrl",
			controllerAs: "modal"
		});
	}
}