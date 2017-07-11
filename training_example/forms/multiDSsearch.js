/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"635330E4-CE23-43A6-B031-72F506E8FE77"}
 */
var searchValue = '';

/**
 * @properties={typeid:35,uuid:"C6F069BB-EB55-4E50-BB98-1228C4593B43",variableType:-4}
 */
var keyListenerEnabled = false;

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
	forms.MDSSearchPopup.setupInMemDS()
	/** @type {Array<{foundset:JSFoundSet,PKdataprovider:String,displaydataprovider:String,searchdataproviders:Array<String>,headerText:String}>} */
	var searchObj = [{
			foundset: datasources.db.example_data.customers.getFoundSet(), PKdataprovider: 'customerid', displaydataprovider: 'companyname',
			searchdataproviders: ['companyname'], headerText: 'Customers'
		}, {
			foundset: datasources.db.example_data.employees.getFoundSet(), PKdataprovider: 'employeeid', displaydataprovider: 'display_full_name',
			searchdataproviders: ['firstname', 'lastname'], headerText: 'Employees'
		}, {
			foundset: datasources.db.example_data.categories.getFoundSet(), PKdataprovider: 'categoryid', displaydataprovider: 'categoryname',
			searchdataproviders: ['categoryname', 'description'], headerText: 'Categories'
		}]
	var r = forms.MDSSearchPopup.search(searchText, searchObj);
	plugins.window.closeFormPopup(null);
	plugins.window.showFormPopup(elements.searchbox, forms.MDSSearchPopup, elements.searchbox, null, 620, (r * 140) > 310 ? 310 : (r * 140));
	
	//TODO: Bold highlighting of what matches
	//TODO: Allow arrow down selection of records
	//TODO: Allow multiple display data providers?
	keyListenerEnabled = true;
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"979D043C-F9EC-4BC8-8FF5-DA1629C631B5"}
 * @AllowToRunInFind
 */
function onAction$searchAction(event) {
	if (!keyListenerEnabled) {
		plugins.keyListener.addKeyListener(elements.searchbox, onAction$search);
	}
	onAction$search(searchValue)
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"417CAF98-CA5F-45ED-BED3-BB04392C8270"}
 */
function onShow(firstShow, event) {
	keyListenerEnabled = false;
}
