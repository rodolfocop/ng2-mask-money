module.exports = {
	defaultJSExtensions: true,
	map: {
		"@angular": "node_modules/@angular",
		"rxjs": "node_modules/rxjs",
		"symbol-observable": "node_modules/symbol-observable/index",
		"src": "server/index",
		"select2": "node_modules/select2/dist/js/select2.min"
	},
	packages: {
		"rxjs": { defaultExtension: "js" },
		"ng2-dropdown": { main: "index.js", defaultExtension: "js" }, // don't forget about this
		"@angular/common": { main: "index.js", defaultExtension: "js" },
		"@angular/compiler": { main: "index.js", defaultExtension: "js" },
		"@angular/core": { main: "index.js", defaultExtension: "js" },
		"@angular/http": { main: "index.js", defaultExtension: "js" },
		"@angular/platform-browser": { main: "index.js", defaultExtension: "js" },
		"@angular/platform-browser-dynamic": { main: "index.js", defaultExtension: "js" },
		"@angular/router": { main: "index.js", defaultExtension: "js" },
		"@angular/router-deprecated": { main: "index.js", defaultExtension: "js" },
		"@angular/testing": { main: "index.js", defaultExtension: "js" },
		"@angular/upgrade": { main: "index.js", defaultExtension: "js" }
	}
}