export default ['$scope', '$http', function apiFactory($scope, $http) {
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
}];