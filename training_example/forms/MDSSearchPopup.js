/**
 * Perform Search
 *
 * @param {String} searchText
 * @param {Array<{foundset:JSFoundSet,PKdataprovider:String,displaydataprovider:String,searchdataproviders:Array<String>,headerText:String}>} dataArray
 * @public
 *
 * @properties={typeid:24,uuid:"F47F0AC4-5099-48A8-8E96-638E28EBAB51"}
 * @AllowToRunInFind
 */
function search(searchText, dataArray) {
	var order = 0;
	var size = 0;
	
	//clear in-memory ds
	foundset.deleteAllRecords();

	//loop through data array and search
	for (var i = 0; i < dataArray.length; i++) {
		var fs = dataArray[i].foundset;

		//load all records when search is cleared
		if (!searchText) {
			fs.loadAllRecords();
		}

		//create search object and add search providers
		var s = scopes.svySearch.createSimpleSearch(fs);

		// set the search text
		s.setSearchText(searchText);

		// add search providers
		for (var j in dataArray[i].searchdataproviders) {
			s.addSearchProvider(dataArray[i].searchdataproviders[j]);
		}
		
		s.loadRecords(fs);
		
		//add data to in-memory datasource
		if (fs.getSize()) {
			foundset.newRecord();
			var nr = foundset.getSelectedRecord();
			nr.col_type = 'head'
			nr.display = dataArray[i].headerText
			nr.col_order = order;
			order++;
		}
		
		//add display dataproviders records
		
		for (var k = 1; k <= fs.getSize(); k++) {
			var sr = fs.getRecord(k);
			foundset.newRecord();
			nr = foundset.getSelectedRecord();
			nr.display = sr[dataArray[i].displaydataprovider]			
			nr.id = sr[dataArray[i].PKdataprovider]
			nr.source = sr.getDataSource();
			nr.col_order = order;
			order++;
			size++;
		}
		
	}
	//save and sort foundset
	databaseManager.saveData(foundset);
	foundset.sort('col_order asc')
	
	//update header text with search results
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

/**
 * Called when the mouse is clicked on a row/cell (foundset and column indexes are given) or.
 * when the ENTER key is used then only the selected foundset index is given
 * Use the record to exactly match where the user clicked on
 *
 * @param {Number} foundsetindex
 * @param {Number} [columnindex]
 * @param {JSRecord} [record]
 * @param {JSEvent} [event]
 *
 * @private
 *
 * @properties={typeid:24,uuid:"07142F89-7CAD-4F60-B5A2-A10DF1A42E35"}
 */
function onCellClick(foundsetindex, columnindex, record, event) {
	plugins.dialogs.showInfoDialog('INFO','Selected item id : ' + record.id)

}
