/**
 * @param {Boolean} t
 *
 * @properties={typeid:24,uuid:"DD279DD9-5452-45E7-A955-82B906F5ACD2"}
 */
function triggerEditableFields(t) {
	var e = forms.table_edit_example.getElements();
	var el = e.allnames;
	for (var i = 0; i < el.length; i++) {		
		if (e[el[i]].getElementType() == ELEMENT_TYPES.TEXT_FIELD) {
			e[el[i]].editable = t;
		}
	}
}