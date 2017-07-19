exports.config = {
	"specs": [ "./test.bridge.js" ],
	"maxInstances": 10,
	"capabilities": [
		{
			"browserName": "chrome",
			"chromeOptions": {
				"args": [
					"disable-gpu",
					"headless"
				]
			}
		}
	],
	"sync": true,
	"logLevel": "silent",
	"coloredLogs": true,
	"bail": 0,
	"screenshotPath": "./waste",
	"baseUrl": "http://localhost",
	"waitforTimeout": 10000,
	"connectionRetryTimeout": 90000,
	"connectionRetryCount": 3,
	"services": [ "selenium-standalone" ],
	"framework": "mocha",
	"reporters": [ "json" ],
	"reporterOptions": {
		"outputDir": "./",
		"filename": "test.client",
		"combined": true
	},
	"mochaOpts": { "ui": "bdd" }
};
