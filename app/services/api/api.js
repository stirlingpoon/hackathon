import angular from 'angular';

class api {
  constructor($scope, $http, $q) {
    this.$scope = $scope;
	this.$http = $http;
	this.$q = $q;
  }
  
  post(url, data){
	var deferred = this.$q.defer();
	this.$http.post(url, data).
		then(function(response) {
			deferred.resolve(response);
		}, function(response) {
			deferred.reject('POST request to '+url+' failed with error: '+response);
		});
	return deferred.promise;
  };
  
  mockPost(url, data, mockResponse, mockErrorResponse, isMockingError){
	 
	var deferred = this.$q.defer();
	
	if(isMockingError)
		deferred.reject('POST request to '+url+' failed with error: '+mockErrorResponse);
	else
		deferred.resolve(mockResponse);
	return deferred.promise;
  };
}

export default angular.module('api', ['$scope', '$http', '$q'])
  .service('api', api);