/* @ngInject */
function SubmoduleCtrl($scope, $uibModal) {
    $scope.open = function() {
        var modal = $uibModal.open({
            template: require('./modal.html'),
            controller: /*@ngInject*/ function($scope) {
                $scope.ok = function() {
                    modal.close();
                };
            }
        })
    };
}

module.exports = SubmoduleCtrl;