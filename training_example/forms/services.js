
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"82DE8600-DF5E-472E-9C06-269C83748E1A"}
 */
function onAction$myfirstservice(event) {	
	//update text
	plugins.trainingservicesMyfirstservice.text = 'yes'
	application.updateUI();
	//update text 2
	plugins.trainingservicesMyfirstservice.text = 'no'
	application.updateUI();
	//api call of web service
	plugins.trainingservicesMyfirstservice.helloworld('HI!');
	
}
