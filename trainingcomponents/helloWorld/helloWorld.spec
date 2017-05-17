{
	"name": "trainingcomponents-hello-World",
	"displayName": "helloWorld",
	"version": 1,
	"definition": "trainingcomponents/helloWorld/helloWorld.js",
	"libraries": 
	[
		
	],

	"model": 
	{
		"dataprovider": 
		{
			"type": "dataprovider",
			"pushToServer": "allow",
			"ondatachange": 
			{
				"onchange": "onDataChangeMethodID"
			}
		}
	},

	"handlers": 
	{
		"onClick": 
		{
			"parameters": 
			[
				{
					"name": "event",
					"type": "JSEvent"
				}
			]
		},

		"onDataChangeMethodID": "function"
	},

	"api": 
	{
		"requestFocus": 
		{
			"parameters": 
			[
				{
					"name": "mustExecuteOnFocusGainedMethod",
					"type": "boolean",
					"optional": true
				}
			],

			"delayUntilFormLoad": true,
			"globalExclusive": true
		}
	}
}