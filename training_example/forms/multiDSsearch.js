/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"B76F9A40-4B9D-4364-8945-31C5073C1B6E"}
 */
var searchText = '';
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"FA5ADADE-D5E7-4191-9C3C-A919F255CB44"}
 * @AllowToRunInFind
 */
function onAction$search(event) {
	if (searchText) {
		forms.MDSSearchPopup.setupInMemDS()
		/** @type {Array<{foundset:JSFoundSet,PKdataprovider:String,displaydataprovider:String,searchdataproviders:Array<String>,headerText:String}>} */
		var searchObj = [{
				foundset: datasources.db.example_data.customers.getFoundSet(), PKdataprovider: 'customerid', displaydataprovider: 'companyname', searchdataproviders: ['companyname'], headerText: 'Customers'
			}, {
				foundset: datasources.db.example_data.employees.getFoundSet(), PKdataprovider: 'employeeid', displaydataprovider: 'display_full_name', searchdataproviders: ['firstname','lastname'], headerText: 'Employees'
			}]
		var r = forms.MDSSearchPopup.search(searchText, searchObj);
		plugins.window.showFormPopup(elements.searchbox, forms.MDSSearchPopup, elements.searchbox, null, 620, (r * 140) > 310 ? 310 : (r * 140));
	}
}
