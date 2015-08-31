
export default ['$scope', 'api', function profileInfoFactory($scope, $api) {
  var profileInfo = {};
  
  profileInfo.getInfo = function(email)
  {
	  var deferred = $q.defer();
	  
	  $api.mockPost('/profileInfo', {email: 'mock@credit-suisse.com'}, {
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
}];