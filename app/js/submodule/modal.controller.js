/* @ngInject */
function Modal($uibModalInstance) {
    this.ok = function() {
        $uibModalInstance.close();
    };
};

module.exports = Modal;