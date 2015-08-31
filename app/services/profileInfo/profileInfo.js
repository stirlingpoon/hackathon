import angular from 'angular';

class profileInfo{
  constructor($scope, api, $q) {
    this.$scope = $scope;
	this.api = api;
	this.$q = $q;
  }
  
  getInfo(email)
  {
	  var deferred = this.$q.defer();
	  
	  this.api.mockPost('/profileInfo', {email: 'mock@credit-suisse.com'}, {
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
}

export default angular.module('profileInfo', ['$scope', 'api', '$q'])
  .service('profileInfo', profileInfo);