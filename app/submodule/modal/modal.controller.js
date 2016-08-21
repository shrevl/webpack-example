export default class ModalController {
	/* @ngInject */
	constructor($uibModalInstance) {
		this.$uibModalInstance = $uibModalInstance;
	}

	ok() {
		this.$uibModalInstance.close();
	}
}