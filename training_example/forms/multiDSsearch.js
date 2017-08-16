/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"9745928A-F8DB-487C-8247-987CFFDEB4D9",variableType:8}
 */
var test1 = 1.23;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"A7B2CBB1-1D45-47DA-8CD7-D619A0AFFD81"}
 */
var test2 = '1.23';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"3CEA60E7-E107-4B2E-8726-3F4EC08F82C2"}
 */
var searchValue = '';

/**
 * @properties={typeid:35,uuid:"6EAB78E1-9BD5-4671-9519-969A2F071EFA",variableType:-4}
 */
var keyListenerEnabled = false;

/**
 * Perform the element default action.
 *
 * @param {String} searchText
 *
 * @private
 *
 * @properties={typeid:24,uuid:"A5AEC610-6CCE-416B-835C-5655EF9C2E71"}
 * @AllowToRunInFind
 */
function onAction$search(searchText) {
	if (searchText.length<2) return;
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
 * @properties={typeid:24,uuid:"D90AF9D9-5691-4E6C-88DF-12BE9FF914FE"}
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
 * @properties={typeid:24,uuid:"D418CCCA-1441-4C01-B0D2-37E043538A78"}
 */
function onShow(firstShow, event) {
	keyListenerEnabled = false;
}
