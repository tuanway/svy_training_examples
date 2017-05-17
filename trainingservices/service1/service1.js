angular.module('trainingservicesService1',['servoy'])
.factory("trainingservicesService1",function($services) 
{
	var scope = $services.getServiceScope('trainingservicesService1');
	return {
		
		helloworld: function(text) {
			alert("helloworld: " + scope.model.text + text);
		},
		
		helloNumber: function() {
			console.log(Math.random());
		}
	
		
	}
})

.run(function($rootScope,$services)
{
	var scope = $services.getServiceScope('trainingservicesService1')
	
	scope.$watch('model', function(newvalue,oldvalue) {
	// handle state changes
		console.log(newvalue)
}, true);
	
})