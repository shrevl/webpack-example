describe('submodule.controller', () => {
    beforeEach(angular.mock.module('app.submodule'));

    var $controller, $uibModal;
    beforeEach(inject((_$controller_, _$uibModal_) => {
        $uibModal = _$uibModal_;
        $controller =_$controller_('SubmoduleCtrl', { $uibModal: $uibModal });
    }));

    describe('open', () => {
        beforeEach(() => {
            spyOn($uibModal, 'open');
        });

        it('should open a modal', () => {
            $controller.open();
            expect($uibModal.open).toHaveBeenCalled();
        });
    });
});