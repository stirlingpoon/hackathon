import angular from 'angular';
import 'angular-route';
import 'angular-aria';
import 'angular-animate';
import 'angular-material';

import ProfileCtrl from 'app/controllers/ProfileCtrl.js'

const App = angular.module('App', ['ngRoute', 'ngMaterial']);

App.config(['$routeProvider', $routeProvider => {
	$routeProvider.
	when('/profile', {
		templateUrl: 'app/templates/profile.html',
		controller: 'ProfileCtrl'
	}).
	otherwise({
		redirectTo: '/profile'
	})
}])
	.controller('ProfileCtrl', ProfileCtrl)