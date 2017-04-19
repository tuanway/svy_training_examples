/**
 * Record pre-insert trigger.
 * Validate the record to be inserted.
 * When false is returned the record will not be inserted in the database.
 * When an exception is thrown the record will also not be inserted in the database but it will be added to databaseManager.getFailedRecords(),
 * the thrown exception can be retrieved via record.exception.getValue().
 *
 * @param {JSRecord<db:/example_data/customers>} record record that will be inserted
 *
 * @return {Boolean}
 *
 * @properties={typeid:24,uuid:"C755E1D8-9B0A-4DA0-9891-40DAA2E94213"}
 */
function onRecordInsert$customer(record) {
	record.customerid = scopes.dataModel.createPK$customer(record.companyname);			
	return true;
}
