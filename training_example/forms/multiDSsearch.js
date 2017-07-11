/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"635330E4-CE23-43A6-B031-72F506E8FE77"}
 */
var searchValue = '';

/**
 * Perform the element default action.
 *
 * @param {String} searchText
 *
 * @private
 *
 * @properties={typeid:24,uuid:"FA5ADADE-D5E7-4191-9C3C-A919F255CB44"}
 * @AllowToRunInFind
 */
function onAction$search(searchText) {
	if (searchText) {
		application.output(searchText)

		forms.MDSSearchPopup.setupInMemDS()
		/** @type {Array<{foundset:JSFoundSet,PKdataprovider:String,displaydataprovider:String,searchdataproviders:Array<String>,headerText:String}>} */
		var searchObj = [{
				foundset: datasources.db.example_data.customers.getFoundSet(), PKdataprovider: 'customerid', displaydataprovider: 'companyname', searchdataproviders: ['companyname'], headerText: 'Customers'
			}, {
				foundset: datasources.db.example_data.employees.getFoundSet(), PKdataprovider: 'employeeid', displaydataprovider: 'display_full_name', searchdataproviders: ['firstname', 'lastname'], headerText: 'Employees'
			}]
		var r = forms.MDSSearchPopup.search(searchText, searchObj);
		if (r) {
			plugins.window.showFormPopup(elements.searchbox, forms.MDSSearchPopup, elements.searchbox, null, 620, (r * 140) > 310 ? 310 : (r * 140));
		} else {
			elements.searchbox.requestFocus();
		}
	} else {
		return;
	}

}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"23B939D4-680B-478E-B8A4-F33CAD0C2C8D"}
 * @AllowToRunInFind
 */
function onAction$activateListener(event) {
	plugins.keyListener.addKeyListener(elements.searchbox, onAction$search);
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"979D043C-F9EC-4BC8-8FF5-DA1629C631B5"}
 */
function onAction$searchAction(event) {
	onAction$search(searchValue)
}
