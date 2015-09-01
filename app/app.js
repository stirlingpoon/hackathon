import angular from 'angular';
import 'angular-route';
import 'angular-aria';
import 'angular-animate';
import 'angular-material';

import ProfileCtrl from 'app/controllers/ProfileCtrl.js';
import WrapperCtrl from 'app/controllers/WrapperCtrl.js';
import skillSearchResultCtrl from 'app/controllers/skillSearchResultCtrl.js';

const App = angular.module('App', ['ngRoute', 'ngMaterial']);


App.config(['$routeProvider', $routeProvider => {
	$routeProvider.
	when('/profile/:profileId', {
		templateUrl: 'app/templates/profile-wrapper.html'
	}).
	when('/signin', {
		templateUrl: 'app/templates/signin.html'
	}).
	when('/searchResultBySkill/:skill', {
		templateUrl: 'app/templates/skillSearchResult.html'
	}).
	otherwise({
		redirectTo: '/signin'
	})
}])
	.controller('ProfileCtrl', ProfileCtrl)
	.controller('WrapperCtrl', WrapperCtrl)
	.controller('skillSearchResultCtrl', skillSearchResultCtrl);