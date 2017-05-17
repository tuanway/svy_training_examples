angular.module('trainingcomponentsNavbar', ['servoy']).directive('trainingcomponentsNavbar', function() {
    return {
        restrict: 'E',
        scope: {
            model: "=svyModel",
            api: "=svyApi",
            handlers: "=svyHandlers",
        },
        controller: function($scope, $element, $attrs) {
          //setup $scope functions and variables
            $scope.model.clickedItem = null;
            $scope.showMenu = function() {
                var e = document.getElementById($scope.model.svyMarkupId)
                var c = e.classList;
                if (!c.contains('responsive')) {
                    c.add('responsive')
                } else {
                    c.remove('responsive')
                }
            }
        },
        link: function($scope, $element, $attrs) {
          //after compilation of elements
          //setup a watcher to track and create menu items as needed.
            $scope.$watch('model.menuItems', function(newValue, oldValue) {
                //generate menu items when menuItem array is updated.
                var e = document.getElementById($scope.model.svyMarkupId)
                for (var i = newValue.length - 1; i > -1; i--) {
                    var a = document.createElement("a");
                    //check if we have a brand logo and add an image element if that's the case.
                    if ($scope.model.brandLogo && (i == 0)) {
                        var l = document.createElement("img");
                        l.src = $scope.model.brandLogo;
                        l.className = $scope.model.brandLogoStyleClass;
                        a.appendChild(l)
                        a.innerHTML += '&nbsp;&nbsp;';
                    }
                    //add text for each item in menuItems
                    a.innerHTML += newValue[i].text == undefined ? '' : newValue[i].text;

                    //store name of item as data attribute.
                    a.data = newValue[i].name;

                    //add a listener event for when each item is clicked.
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
