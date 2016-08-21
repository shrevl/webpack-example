var $controller = require('./modal.controller');

describe('modal.controller', function() {
    beforeEach(angular.mock.module('app'));

    var $controller,
        $uibModalInstance = { close: function() {} };

    beforeEach(angular.mock.inject(function(_$controller_) {
        $controller =_$controller_('ModalCtrl', { $uibModalInstance: $uibModalInstance });
    }));

    describe('ok', function() {
        beforeEach(function() {
            spyOn($uibModalInstance, 'close');
        });

        it('should close the modal instance', function() {          
            $controller.ok();
            expect($uibModalInstance.close).toHaveBeenCalled();
        });
    });
});