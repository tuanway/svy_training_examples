
/**
 * Callback method for when solution is opened.
 * When deeplinking into solutions, the argument part of the deeplink url will be passed in as the first argument
 * All query parameters + the argument of the deeplink url will be passed in as the second argument
 * For more information on deeplinking, see the chapters on the different Clients in the Deployment Guide.
 *
 * @param {String} arg startup argument part of the deeplink url with which the Client was started
 * @param {Object<Array<String>>} queryParams all query parameters of the deeplink url with which the Client was started
 *
 * @properties={typeid:24,uuid:"1E825A54-8109-464F-BB36-8EA20095D833"}
 */
function onSolutionOpen(arg, queryParams) {	
	//disable autosave
	databaseManager.setAutoSave(false);
	
	//select language
	scopes.dynamic.selectLanguage();
	
	plugins.ngclientutils.setViewportMetaDefaultForMobileAwareSites();

}
