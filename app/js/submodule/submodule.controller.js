/* @ngInject */
function SubmoduleCtrl($uibModal) {
    this.open = function() {
        var modal = $uibModal.open({
            template: require('./modal.html'),
            controller: 'ModalCtrl',
            controllerAs: 'modal'
        })
    };
}

module.exports = SubmoduleCtrl;