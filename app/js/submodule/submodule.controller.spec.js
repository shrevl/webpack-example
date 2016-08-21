describe('submodule.controller', function() {
    beforeEach(angular.mock.module('app'));

    var $controller,
        $uibModal;
    beforeEach(angular.mock.inject(function(_$controller_, _$uibModal_) {
        $uibModal = _$uibModal_;
        $controller =_$controller_('SubmoduleCtrl', { $uibModal: $uibModal });
    }));

    describe('open', function() {
        beforeEach(function() {
            spyOn($uibModal, 'open');
        });

        it('should open a modal', function() {
            $controller.open();
            expect($uibModal.open).toHaveBeenCalled();
        });
    });
});