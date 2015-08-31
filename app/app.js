import angular from 'angular';
import 'angular-route';

const App = angular.module('App', ['ngRoute']);
App.config(['$routeProvider', $routeProvider => {
	$routeProvider.
	when('/profile', {
		templateUrl: 'app/templates/profile.html',
		controller: 'ProfileCtrl'
	}).
	otherwise({
		redirectTo: '/profile'
	})
}]);