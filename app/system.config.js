System.config({
	transpiler: 'babel',
	defaultJSExtensions: true,
	map: {
		angular: 'node_modules/angular/angular.min.js',
		'angular-route': 'node_modules/angular-route/angular-route.min.js',
		'angular-aria': 'node_modules/angular-aria/angular-aria.min.js',
		'angular-animate': 'node_modules/angular-animate/angular-animate.min.js',
		'angular-material': 'node_modules/angular-material/angular-material.min.js',
		babel: 'node_modules/babel-core/browser.js',
		'then-request': 'node_modules/then-request/dist/request.min.js',
		'lodash': 'node_modules/lodash/index.js'
	}
})