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
		var r = forms.MDSSearchPopup.search(searchText);
		plugins.window.showFormPopup(elements.searchbox, forms.MDSSearchPopup, elements.searchbox, null, 620, (r * 140) > 310 ? 310 : (r * 140));
	}
}
