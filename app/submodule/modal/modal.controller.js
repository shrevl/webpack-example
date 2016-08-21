/* @ngInject */
export default function ModalCtrl($uibModalInstance) {
	this.ok = () => {
		$uibModalInstance.close();
	};
};