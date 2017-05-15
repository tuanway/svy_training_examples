angular.module('trainingcomponentsHelloWorld', ['servoy'])
    .directive('trainingcomponentsHelloWorld', function() {
        return {
            restrict: 'E',
            scope: {
                model: '=svyModel'
            },
            controller: function($scope, $element, $attrs) {},
            link: function($scope, $element, $attrs) {},
            templateUrl: 'trainingcomponents/helloWorld/helloWorld.html'
        };
    })
