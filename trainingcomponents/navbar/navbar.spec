{
	"name": "trainingcomponents-navbar",
	"displayName": "navbar",
	"version": 1,
	"definition": "trainingcomponents/navbar/navbar.js",
	"serverscript": "trainingcomponents/navbar/navbar_server.js",
	"libraries": 
	[
		{
			"name": "navbar.css",
			"version": "1.0.0",
			"url": "trainingcomponents/navbar/navbar.css",
			"mimetype": "text/css"
		}
	],

	"model": 
	{
		"menuItems": 
		{
			"type": "menuItem[]"
		},

		"styleClass": 
		{
			"type": "styleclass",
			"tags": 
			{
				"scope": "design"
			},

			"values": 
			[
				
			]
		},

		"selectedItem": 
		{
			"type": "string",
			"tags": 
			{
				"scope": "private"
			}
		}
	},

	"types": 
	{
		"menuItem": 
		{
			"text": "string",
			"name": "string"
		}
	},

	"handlers": 
	{
		"onClick": 
		{
			"parameters": 
			[
				{
					"name": "menuItem",
					"type": "string"
				}
			]
		}
	},

	"api": 
	{
		"setMenuItem": 
		{
			"parameters": 
			[
				{
					"name": "navItems",
					"type": "Array"
				}
			]
		}
	}
}