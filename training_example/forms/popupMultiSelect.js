/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"BFEE9D62-131B-43A4-9729-39F490674093"}
 */
var selection = '';
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"C7501CB8-F280-42E6-A581-3F0CD2E6DA0C"}
 */
var selectionb = '';
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"4E76B7B7-793A-41E1-BC9A-0B8648CAB61D"}
 */
function showDropDown(event) {	
//	plugins.window.showFormPopup(elements.select, forms.multiselect_popup, forms.popupMultiSelect, selection);
	forms.multiselect_popup.open(event, selection, callback, 'test');	
}

/**
 * @param event
 *
 * @properties={typeid:24,uuid:"B0BD15E2-B264-468D-911B-3BCA4A3134C2"}
 */
function showDropDownB(event) {	
//	plugins.window.showFormPopup(elements.selectb, forms.multiselect_popup, forms.popupMultiSelect, selectionb);
	forms.multiselect_popup.open(event, selectionb, callbackB, 'testb');	
}

/**
 * @properties={typeid:24,uuid:"51C6DC6B-4574-43F7-8CAA-BE29962FD015"}
 */
function callback() {
	selection = forms.multiselect_popup.getData();

	var vl = application.getValueListItems('test')
	if (!selection) {
		selection = '';
		return;
	}

	if (selection.split('\n').length == 1) {
		for (var i = 1; i <= vl.getMaxRowIndex(); i++) {
			if (vl.getValue(i, 2) == selection.split('\n')[0]) {
				selection = vl.getValue(i, 1)
				return;
			}
		}
	}
	selection = 'Multiple Selected';
}

/**
 * @properties={typeid:24,uuid:"2A5552F0-A46A-4726-985D-4DF1FD29CBDE"}
 */
function callbackB() {
	selectionb = forms.multiselect_popup.getData();

	var vl = application.getValueListItems('testb')
	if (!selectionb) {
		selectionb = '';
		return;
	}

	if (selectionb.split('\n').length == 1) {
		for (var i = 1; i <= vl.getMaxRowIndex(); i++) {
			if (vl.getValue(i, 2) == selectionb.split('\n')[0]) {
				selectionb = vl.getValue(i, 1)
				return;
			}
		}
	}
	selectionb = 'Multiple Selected';
}