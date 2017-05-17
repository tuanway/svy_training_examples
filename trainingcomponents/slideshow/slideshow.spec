{
	"name": "trainingcomponents-slideshow",
	"displayName": "slideshow",
	"version": 1,
	"definition": "trainingcomponents/slideshow/slideshow.js",
	"libraries": 
	[
		{
			"name": "slideshow.css",
			"version": "1.0.0",
			"url": "trainingcomponents/slideshow/slideshow.css",
			"mimetype": "text/css"
		}
	],

	"model": 
	{
		"slides": 
		{
			"type": "slide[]",
			"pushToServer": "deep"
		}
	},

	"types": 
	{
		"slide": 
		{
			"imageUrl": 
			{
				"type": "string"
			},

			"caption": 
			{
				"type": "tagstring"
			}
		}
	}
}