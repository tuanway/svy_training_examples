angular.module('trainingcomponentsHelloWorld', ['servoy']).directive('trainingcomponentsHelloWorld', function() {
		return {
			restrict: 'E',
			scope: {
				model: "=svyModel",
				api: "=svyApi",
				handlers: "=svyHandlers",
				servoyApi: "=svyServoyapi"
			},
			controller: function($scope, $element, $attrs) { },
			link: function($scope, $element, $attrs) {
				$scope.$watch('model.dataprovider', function(oldValue, newValue) {
						if (oldValue !== newValue) {
							// dataprovider changed
							console.log(newValue);
							$scope.model.dataprovider = Math.random();
							$scope.servoyApi.apply('dataprovider');
						}
					});
				/** Request the focus to this text field.
				 * @example %%prefix%%%%elementName%%.requestFocus();
				 * @param mustExecuteOnFocusGainedMethod (optional)
				 * if false will not execute the onFocusGained method; the default value is true */
				$scope.api.requestFocus = function(mustExecuteOnFocusGainedMethod) {
					var input = $element.find('input')
					if (mustExecuteOnFocusGainedMethod === false && $scope.handlers.onFocusGainedMethodID) {
						input.unbind('focus');
						input.focus();
						input.bind('focus', $scope.handlers.onFocusGainedMethodID)
					} else {
						input.focus();
					}
				}
			},
			templateUrl: 'trainingcomponents/helloWorld/helloWorld.html'
		};
	})