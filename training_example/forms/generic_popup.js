/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"3176E1FA-4A37-4E72-86E2-95E9B0849137"}
 */
var closeWindow;
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"C2B5D824-0F0D-4D08-A511-A25B56CB9E2D"}
 */
var selected;

/**
 * Select
 * @param event
 *
 * @properties={typeid:24,uuid:"E6C3F461-4F9C-4B1F-9BA3-A9E1F8366D36"}
 */
function ok(event) {
	closeWindow = true;
	selected = true;
	if (closeWindow) {
		var window = application.getWindow(controller.getName());
		if (window) {
			window.destroy();
			return true;
		}
	}
	return false;
}

/**
 * Cancel 
 * @param event
 *
 * @properties={typeid:24,uuid:"753D1B49-59FD-4E7E-8275-5D6800E371EC"}
 */
function cancel(event) {
	closeWindow = true;
	selected = false;
	if (closeWindow) {
		var window = application.getWindow(controller.getName());
		if (window) {
			window.destroy();
			return true;
		}
	}
	return false;
}

/**
 * Show form
 * @param width
 * @param height
 *
 * @properties={typeid:24,uuid:"842203A8-E08F-4D4D-88EB-973A20C94817"}
 */
function show(title,width,height) {	
	application.createWindow(controller.getName(), JSWindow.MODAL_DIALOG).setSize(width, height);
	var w = application.getWindow(controller.getName());
	w.title = title;
	controller.show(w);
	return selected;
}