import angular from 'angular';
import 'angular-route';
import 'angular-aria';
import 'angular-animate';
import 'angular-material';

import ProfileCtrl from 'app/controllers/ProfileCtrl.js';
import WrapperCtrl from 'app/controllers/WrapperCtrl.js';

const App = angular.module('App', ['ngRoute', 'ngMaterial']);


App.config(['$routeProvider', $routeProvider => {
	$routeProvider.
	when('/profile', {
		templateUrl: 'app/templates/profile-wrapper.html',
		controller: 'WrapperCtrl'
	}).
	when('/signin', {
		templateUrl: 'app/templates/signin.html'
		//controller: 'ProfileCtrl'
	}).
	otherwise({
		redirectTo: '/singin'
	})
}])
	.controller('ProfileCtrl', ProfileCtrl)
	.controller('WrapperCtrl', WrapperCtrl);
