/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"2142FA14-CA12-471E-AE11-AAD792D084EF"}
 */
var closeWindow;
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"7A41840A-9FE1-4C93-BDD5-61BD60DD5007"}
 */
var selected;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"22E7D5E6-CDF9-498B-975B-9BF8E3FE9AA1"}
 */
var data = '';

/**
 * @type {Function}
 *
 * @properties={typeid:35,uuid:"116DC7CF-9A6E-4135-A925-7067EC5773B6",variableType:-4}
 */
var callBack;

/**
 * @public
 * @properties={typeid:24,uuid:"4E3CD23A-A7FE-47B3-8462-8854435B020E"}
 */
function open(event, initialValues, onCallback, valuelist) {
	var vl = application.getValueListItems(valuelist);
	elements.vl.setValueListItems(vl)
	data = initialValues;
	callBack = onCallback;
	application.createWindow(controller.getName(), JSWindow.MODAL_DIALOG).setSize(160, 145);
	var w = application.getWindow(controller.getName());
	w.title = 'Modal Example';
	controller.show(w);
}

/**
 * @properties={typeid:24,uuid:"B4B7E402-8706-45CC-AF91-D53283894E46"}
 */
function getData() {
	return data;
}

/**
 * Handle hide window.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @return {Boolean}
 *
 * @private
 *
 * @properties={typeid:24,uuid:"B64704B3-F98E-4C4E-A003-BD135DE31F86"}
 */
function onHide(event) {
	callBack();
	data = null;
	return true;
}

/**
 * @properties={typeid:24,uuid:"BA0DC616-160A-4AAD-BBF4-262034802D18"}
 */
function close() {
	//plugins.window.closeFormPopup(data);
	closeWindow = true;
	selected = false;
	if (closeWindow) {
		var window = application.getWindow(controller.getName());
		if (window) {
			window.destroy();
			return true;
		}
	}
	return false;
}

/**
 * Handle changed data, return false if the value should not be accepted. In NGClient you can return also a (i18n) string, instead of false, which will be shown as a tooltip.
 *
 * @param {String} oldValue old value
 * @param {String} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @return {Boolean}
 *
 * @private
 *
 * @properties={typeid:24,uuid:"FBD39BCC-E3B6-4B0A-B57F-00C12840ED12"}
 */
function onDataChange(oldValue, newValue, event) {
	var added = scopes.svyUI.getCheckBoxValueListItemAdded(oldValue, newValue);	
	if (added) {
		data = added
	}
	return true
}
