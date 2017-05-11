/**
 *@param {Array<plugins.file.JSFile>} fArr
 * @properties={typeid:24,uuid:"29726D4D-0815-4308-9D78-73652617987A"}
 * @AllowToRunInFind
 */
function uploadCallback(fArr) {
	var b64 = new Packages.org.apache.commons.codec.binary.Base64();
	//convert the image to a B64 string then display it.
	elements.img_display.text = '<img src="data:image/gif;base64,' + b64.encodeToString(fArr[0].getBytes()) + '"/>'
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