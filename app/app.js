import angular from 'angular';
import 'angular-route';
import 'angular-aria';
import 'angular-animate';
import 'angular-material';

import ProfileCtrl from 'app/controllers/ProfileCtrl.js';

//import api from 'app/services/api/api.js';
//import profileInfo from 'app/services/profileInfo/profileInfo.js';

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
	.factory('api', ['$scope', '$http', '$q', function ($scope, $http, $q) {
  var api = {};
  api.post = function(url, data){
	 
	var deferred = $q.defer();
	$http.post(url, data).
		then(function(response) {
			deferred.resolve(response);
		}, function(response) {
			deferred.reject('POST request to '+url+' failed with error: '+response);
		});
	return deferred.promise;
  };
  
  api.mockPost = function(url, data, mockResponse, mockErrorResponse, isMockingError){
	 
	var deferred = $q.defer();
	
	if(isMockingError)
		deferred.reject('POST request to '+url+' failed with error: '+mockErrorResponse);
	else
		deferred.resolve(mockResponse);
	return deferred.promise;
  };
  return api;
}])
	.factory('profileInfo', ['$scope', 'api', '$q', function ($scope, api, $q) {
  var profileInfo = {};
  
  profileInfo.getInfo = function(email)
  {
	  var deferred = $q.defer();
	  
	  api.mockPost('/profileInfo', {email: 'mock@credit-suisse.com'}, {
		  firstName: 'Mock',
		  lastName: 'user',
		  skills: ['C++', 'Java', 'XML']
	  }, 'Mock Error', false)
	  .then(function(response){
		  deferred.resolve(response);
	  }, function(response){
		  deferred.reject(response);
	  });
	  
	  return deferred.promise;
  }
}])
	.controller('ProfileCtrl', ProfileCtrl)