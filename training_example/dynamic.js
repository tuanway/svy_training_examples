/**
 * @properties={typeid:24,uuid:"AA2924D5-C9B5-4F55-82A4-1F561DCFB503"}
 */
function createDynamicCustomer() {
	var types = [JSColumn.TEXT, JSColumn.TEXT, JSColumn.NUMBER, JSColumn.TEXT];
	var col = ['companyname', 'country', 'select', 'idx']
	var col_title = ['Company Name', 'Country', 'Select', 'ID']
	var ds = databaseManager.createEmptyDataSet(0, col);
	var db = datasources.db.example_data.customers.getFoundSet();
	db.loadAllRecords();
	for (var i = 1; i <= db.getSize(); i++) {
		var rec = db.getRecord(i);	
		ds.addRow([rec.companyname, rec.country, 0, rec.customerid])
	}

	var selection = createGenericPopup(ds, types, col, col_title, 'Select Customer Records', 460, 500);
	var ret = '';

	for (var j = 1; j <= selection.getMaxRowIndex(); j++) {
		var row = selection.getRowAsArray(j);
		if (row[2] == 1) {
			ret += row[0] + '<br>';
		}
	}

	if (ret == '') return;

	plugins.dialogs.showInfoDialog('INFO', 'You Selected : <br> ' + ret);

}

/**
 * Create a generic popup form and allow selection
 * To use pass in a generic dataset with columns and types
 * var ds = databaseManager.createEmptyDataSet(0, col);
 * var title = ['Invoice Number', 'Processed Date', 'Amount']
 * @properties={typeid:24,uuid:"681F705C-E7B1-4B52-9167-3458F121DD69"}
 * @SuppressWarnings(unused)
 * @return {JSDataSet}
 * @AllowToRunInFind
 * @SuppressWarnings(hides)
 */
function createGenericPopup(ds, types, col, col_title, win_title, width, height) {
	var closeWindow;
	var selected;
	var foundset;

	solutionModel.removeForm('generic_pop_up');
	var f = solutionModel.newForm('generic_pop_up', null, null, true, width, height);
	f.view = JSForm.LOCKED_TABLE_VIEW;
	f.dataSource = ds.createDataSource(application.getUUID().toString(), types);
	f.extendsForm = 'generic_popup'		
	f.newPart(JSPart.FOOTER, 550);
	
	//add buttons and reference methods
	var ok_btn = f.newButton('<span class="fa fa-floppy-o"/> OK', 200, 515, 68, 21, f.getMethod('ok'))
	var cancl_btn = f.newButton('<span class="fa fa-undo"/> Cancel', 300, 515, 75, 20, f.getMethod('cancel'));

	//create fields & labels
	for (var i = 0; i < col.length - 2; i++) {
		var cr = col[i];
		var fd = f.newField(cr, JSField.TEXT_FIELD, 300, 50 * i, col_title[i].length* 20, 25);
		fd.name = cr;
		fd.editable = false;
		fd.styleClass = 'table'
		var fl = f.newLabel(cr, 50, 70 * i, 200, 25);
		fl.labelFor = fd.name;
		fl.text = col_title[i];
		fl.styleClass = 'field_table'
	}
	//add select field
	cr = col[col.length - 2];
	fd = f.newField(cr, JSField.CHECKS, 300, 50 * i, 65, 25);
	fd.name = cr;
	fd.horizontalAlignment = SM_ALIGNMENT.CENTER
	fd.styleClass = 'table'
	fl = f.newLabel('select', 50, 70 * i, 200, 25);
	fl.labelFor = fd.name;
	fl.styleClass = 'field_table'
	fl.text = col_title[col.length - 2];

	f.navigator = SM_DEFAULTS.NONE

	//if we have a return value send back the data set.
	var ret = forms['generic_pop_up'].show(win_title, width, height);
	if (ret) {
		return ds;
	}
	return null;
}
