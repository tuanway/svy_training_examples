/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"32705F36-AB0A-48E6-B26E-5FD8F5FE5E34"}
 */
var f = null;

/**
 * @properties={typeid:35,uuid:"CAA7E1D4-BFD9-438C-8F14-AE4C72DA61BA",variableType:-4}
 */
var f_filename = null;

/**
 * @properties={typeid:35,uuid:"DA9B9E7E-7344-4FC7-86F6-0A131C7E99A4",variableType:-4}
 */
var f_mimetype = null;


/**
 *@param {Array<plugins.file.JSFile>} fArr
 * @properties={typeid:24,uuid:"29726D4D-0815-4308-9D78-73652617987A"}
 * @AllowToRunInFind
 */
function uploadCallback(fArr) {
	//convert the image to a B64 string then display it.
	elements.img_display.text = '<img src="data:image/gif;base64,' + new Packages.org.apache.commons.codec.binary.Base64().encodeToString(fArr[0].getBytes()) + '"/>'
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"FCA48287-52E4-45FC-9DBB-C14404B4F60F"}
 */
function onAction$upload(event) {
	plugins.file.showFileOpenDialog(null, null, false, new Array("JPG and GIF", "jpg", "gif"), uploadCallback, 'Upload an image')
}
/**
 * @param oldValue
 * @param newValue
 * @param {JSEvent} event
 *
 * @return {boolean}
 *
 * @private
 *
 * @properties={typeid:24,uuid:"D5F05EA5-98CC-4855-B1A5-5E327082FEEC"}
 */
function onDataChangeMethodID(oldValue, newValue, event) {
	var s = plugins.file.getDefaultUploadLocation()
	var fn = plugins.file.convertToJSFile(s + '/' + f_filename);
	plugins.file.writeFile(fn, newValue)
	application.output(s + '/' + f_filename)
	application.output(f_mimetype);
	application.output(f_filename);
	application.output(f);
	//convert the image to a B64 string then display it.
	elements.img_display.text = '<img src="data:image/gif;base64,' + new Packages.org.apache.commons.codec.binary.Base64().encodeToString(newValue) + '"/>'
	return false;
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"9155E35C-4EBF-471B-A01B-72FB5609A6E9"}
 */
function onShow(firstShow, event) {
	//initialize Base64 class
	new Packages.org.apache.commons.codec.binary.Base64;
}
