import {getPeople, getPeopleBySkill} from 'app/services/profileInfo/profileInfo.js';
import _ from 'lodash';

export default ['$scope', '$routeParams', '$http', '$location', class skillSearchResultCtrl {
    constructor($scope, $routeParams, $http, $location) {
		this.$location = $location;
		$scope.searchPhrase = $routeParams.skill;
		/*
		$scope.skillSearchResult = $http.get('/members/search/skill?skill='+$routeParams.skill).then(function(response){
			$scope.skillSearchResult = response;
		}, function(response){});
		*/
		getPeopleBySkill($routeParams.skill).then(skills => {
			$scope.skillSearchResult = skills;
		});
    }
	
	toProfile(id) {
		console.log('toProfile', id);
		this.$location.path('/profile/' + id);
	}
}];