/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"BFEE9D62-131B-43A4-9729-39F490674093"}
 */
var selection = '';
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"4E76B7B7-793A-41E1-BC9A-0B8648CAB61D"}
 */
function showDropDown(event) {
	plugins.window.showFormPopup(elements.select, forms.multiselect_popup, null, null);
	forms.multiselect_popup.open(event, selection, callback, 'test');
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