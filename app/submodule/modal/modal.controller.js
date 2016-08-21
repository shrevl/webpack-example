/* @ngInject */
export default function ModalCtrl($uibModalInstance) {
    this.ok = function() {
        $uibModalInstance.close();
    };
};