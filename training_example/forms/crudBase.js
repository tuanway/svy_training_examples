/**
 * @param {JSEvent} event
 *
 * @private
 *
 * @properties={typeid:24,uuid:"09F59A55-D741-4D66-BC24-CE09F6C0C6FF"}
 */
function onAction$prevRecord(event) {
	foundset.setSelectedIndex(foundset.getSelectedIndex() - 1);
}

/**
 * @param {JSEvent} event
 *
 * @private
 *
 * @properties={typeid:24,uuid:"3F107C20-5E48-4E9A-8601-DBCB25F72ECE"}
 */
function onAction$nextRecord(event) {
	foundset.setSelectedIndex(foundset.getSelectedIndex() + 1);
}

/**
 * @param {Boolean} t trigger to show or hide editable fields
 * @public
 * Enable editable fields
 * @properties={typeid:24,uuid:"21E77034-3736-4058-A87A-AEB3CE603601"}
 */
function triggerEditableFields(t) {
	var el = elements.allnames;
	for (var i = 0; i < el.length; i++) {
		if (elements[el[i]].getElementType() == ELEMENT_TYPES.TEXT_FIELD) {
			elements[el[i]].editable = t;
		}
	}
}

/**
 * @param {Boolean} t trigger to show or hide editable fields
 * @public
 * Enable/disable editable buttons
 * @properties={typeid:24,uuid:"46CEC3D0-5A4B-4EF4-8C20-B82E4650FAAB"}
 * @AllowToRunInFind
 */
function triggerEditButtons(t) {
	elements.search_btn.enabled = t;
	elements.edit_btn.enabled = t;
	elements.new_btn.enabled = t;
	elements.delete_btn.enabled = t;
	elements.save_btn.enabled = !t;
	elements.cancel_btn.enabled = !t;
}

/**
 * @param {JSEvent} event
 *
 * @public
 *
 * @properties={typeid:24,uuid:"DB4F7ACB-1778-4276-BD2D-F6688244F60C"}
 * @AllowToRunInFind
 */
function onAction$find(event) {	
		if (foundset.isInFind()) {
			foundset.search();
			triggerEditableFields(false);
			triggerEditButtons(true);
			elements.search_btn.enabled = true;
		} else {
			elements.search_btn.enabled = false;
			foundset.find();
			triggerEditableFields(true);
			triggerEditButtons(false);
			elements.save_btn.enabled = false;
		}
}

/**
 * @param {JSEvent} event
 *
 * @public
 *
 * @properties={typeid:24,uuid:"558AF386-E444-4E44-9224-1AE9D93B9C6D"}
 * @AllowToRunInFind
 */
function onAction$edit(event) {
	triggerEditButtons(false);
	triggerEditableFields(true);
}

/**
 * @param {JSEvent} event
 *
 * @public
 *
 * @properties={typeid:24,uuid:"799AAB8F-A909-4F82-90EE-6F1560DF0DDD"}
 * @AllowToRunInFind
 */
function onAction$finishededit(event) {
	triggerEditButtons(true);
	triggerEditableFields(false);
}

/**
 * @param {JSEvent} event
 *
 * @public
 *
 * @properties={typeid:24,uuid:"294FF400-6155-4088-8C3C-89C19F251883"}
 * @AllowToRunInFind
 */
function onAction$cancel(event) {
	triggerEditButtons(true);
	triggerEditableFields(false);
	if (foundset.isInFind()) {
		foundset.search();		
		foundset.loadAllRecords();
	} else {
		foundset.getSelectedRecord().revertChanges();
	}
	
}

/**
 * Save a record
 * @param event
 * @private 
 * @properties={typeid:24,uuid:"3BB5E610-8624-4098-935D-35822ECC189C"}
 */
function onAction$save(event) {
	databaseManager.saveData(foundset.getSelectedRecord());
	triggerEditButtons(true);
	triggerEditableFields(false);
}

/**
 * Add a record
 * @param event
 * @private 
 * @properties={typeid:24,uuid:"B79AB5C6-9133-40D7-A460-A94C2B20C120"}
 */
function onAction$new(event) {
	onAction$edit(event);		
	foundset.newRecord();
}

/**
 * Delete a record
 * @param event
 * @private 
 * @properties={typeid:24,uuid:"74A15815-8B2F-4D66-A401-157CD330B206"}
 */
function onAction$delete(event) {
	var confirm = plugins.dialogs.showInfoDialog('INFO','Are you sure you want to delete this record?', 'Yes', 'No');
	if (confirm == 'Yes') {		
		var success = foundset.deleteRecord(foundset.getSelectedRecord());
		if (!success) {
			throw 'failed to delete record'
		}
	}	
	triggerEditButtons(true);
	triggerEditableFields(false);
}