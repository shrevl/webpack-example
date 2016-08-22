describe("modal.controller", () => {
	beforeEach(angular.mock.module("app.submodule"));

	var $controller,
		$uibModalInstance = { close: () => {} };

	beforeEach(angular.mock.inject((_$controller_) => {
		$controller =_$controller_("ModalCtrl", { $uibModalInstance: $uibModalInstance });
	}));

	describe("ok", () => {
		beforeEach(() => {
			spyOn($uibModalInstance, "close");
		});

		it("should close the modal instance", () => {          
			$controller.ok();
			expect($uibModalInstance.close).toHaveBeenCalled();
		});
	});
});