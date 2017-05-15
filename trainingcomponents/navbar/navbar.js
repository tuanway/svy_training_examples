angular.module('trainingcomponentsNavbar', ['servoy']).directive('trainingcomponentsNavbar', function() {
		return {
			restrict: 'E',
			scope: {
				model: "=svyModel",
				api: "=svyApi",
				handlers: "=svyHandlers",
			},
			link: function($scope, $element, $attrs) {

				$scope.showMenu = function() {
					var e = document.getElementById($scope.model.svyMarkupId)
					var c = e.classList;
					if (!c.contains('responsive')) {
						c.add('responsive')
					} else {
						c.remove('responsive')
					}
				}

				$scope.model.clickedItem = null;

				$scope.$watchCollection('model.menuItems', function(newValue, oldValue) {
						//generate menu items
						var e = document.getElementById($scope.model.svyMarkupId)
						for (var i = 0; i < newValue.length; i++) {
							var a = document.createElement("a");
							a.innerHTML = newValue[i].text;
							a.data = newValue[i].name;
							a.addEventListener('click', function() {
									$scope.model.selectedItem = this.data;
									$scope.handlers.onClick($scope.model.selectedItem);
									$scope.showMenu();
								})
							e.insertBefore(a, e.firstChild);
						}

					});
			},
			templateUrl: 'trainingcomponents/navbar/navbar.html'
		};
	})