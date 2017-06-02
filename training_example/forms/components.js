/**SEv
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"22A0FE41-E4DB-42C5-9404-5E74903A789F"}
 */
function onShow(firstShow, event) {

	var menu = [{
	    id: 1,
	    text: "Search",
	    styleClass : "sn-large",
	    iconStyleClass:  "glyphicon glyphicon-search"	   	
	  },{
		    id: 2,
		    text: "Contacts",
		    styleClass : "sn-large",
		    iconStyleClass:  "fa fa-address-book-o"  
		  },
	  ];

	  elements.sidenav.setRootMenuItems(menu);

}

