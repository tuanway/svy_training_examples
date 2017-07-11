/**
 * Perform Search
 *
 * @param {String} searchText
 *
 * @public
 *
 * @properties={typeid:24,uuid:"F47F0AC4-5099-48A8-8E96-638E28EBAB51"}
 */
function search(searchText) {
	foundset.deleteAllRecords();
	var fs1 = datasources.db.example_data.customers.getFoundSet();
	var fs2 = datasources.db.example_data.employees.getFoundSet();

	//	 load all records when search is cleared
	if (!searchText) {
		fs1.loadAllRecords();
		fs2.loadAllRecords();
	}

	//	create search object and add search providers
	var s1 = scopes.svySearch.createSimpleSearch(fs1);
	var s2 = scopes.svySearch.createSimpleSearch(fs2);

	// set the search text
	s1.setSearchText(searchText);
	s2.setSearchText(searchText);

	//	list of data providers to include in search
	var searchProviders1 = ['companyname'];

	var searchProviders2 = ['firstname',
		'lastname'];

	// add search providers
	for (var i in searchProviders1) {
		s1.addSearchProvider(searchProviders1[i]);
	}
	for (i in searchProviders2) {
		s2.addSearchProvider(searchProviders2[i]);
	}

	//	execute search
	s1.loadRecords(fs1);
	s2.loadRecords(fs2);

	//combine results into a single data-source
	var order = 0;
	var size = 0;
	//add customer header row if we found some records;
	if (fs1.getSize()) {
		foundset.newRecord();
		var nr = foundset.getSelectedRecord();
		nr.col_type = 'head'
		nr.display = 'Customers';
		nr.col_order = order;
		order++;
	}
	for (i = 1; i <= fs1.getSize(); i++) {
		var r = fs1.getRecord(i);
		foundset.newRecord();
		nr = foundset.getSelectedRecord();
		nr.display = r.companyname;
		nr.id = r.customerid;
		nr.source = r.getDataSource();
		nr.col_order = order;
		order++;
		size++;
	}

	//add employee header row if we found some;
	if (fs2.getSize()) {
		foundset.newRecord();
		nr = foundset.getSelectedRecord();
		nr.col_type = 'head'
		nr.display = 'Employees';
		nr.col_order = order;
		order++;
	}
	for (i = 1; i <= fs2.getSize(); i++) {
		r = fs2.getRecord(i);
		foundset.newRecord();
		nr = foundset.getSelectedRecord();
		nr.display = r.firstname + ' ' + r.lastname;
		nr.id = r.employeeid;
		nr.source = r.getDataSource();
		nr.col_order = order;
		order++;
		size++;
	}

	databaseManager.saveData(foundset);
	foundset.sort('col_order asc')
	if (size) {
	elements.table.getColumn(0).headerText = 'Found ' + size + ' record' + (size > 1 ? 's' : '') + '.';
	application.output('Found ' + size + ' record' + (size > 1 ? 's' : '') + '.')
	} else {
		elements.table.getColumn(0).headerText = 'No results found.';
		application.output('No results found.')
	}
	
	return size;
	
}

/**
 * @properties={typeid:24,uuid:"D5D215E3-8F22-4521-B971-EE4A7D89F357"}
 */
function setupInMemDS() {
	databaseManager.createEmptyDataSet().createDataSource('multiDS');
}
