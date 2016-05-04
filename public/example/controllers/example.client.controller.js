// Invoke 'strict' JavaScript mode
'use strict';

// Create the 'example' controller
angular.module('example').controller('ExampleController', ['$scope', 'Authentication',
	function($scope, Authentication) {
		// Expose the authentication service
		$scope.authentication = Authentication;
	}
]);

angular.module('ui.bootstrap.demo', ['ngAnimate', 'ui.bootstrap']);
angular.module('ui.bootstrap.demo').controller('ButtonsCtrl', function ($scope) {
	$scope.singleModel = 1;

	$scope.radioModel = 'Middle';

	$scope.checkModel = {
		left: false,
		middle: true,
		right: false
	};

	$scope.checkResults = [];

	$scope.$watchCollection('checkModel', function () {
		$scope.checkResults = [];
		angular.forEach($scope.checkModel, function (value, key) {
			if (value) {
				$scope.checkResults.push(key);
			}
		});
	});
});