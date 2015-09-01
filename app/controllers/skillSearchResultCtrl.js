import {getPeople} from 'app/services/profileInfo/profileInfo.js';
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
        $scope.skillSearchResult = [{
										name: 'Anakin Lau',
										role: 'TA',
										skills: ['C++', 'Java', 'XML'],
										img: 'img/placeholder.jpg',
										id: 1
									},
									{
										name: 'Spencer Goh',
										role: 'AVP',
										skills: ['C++', '.NET', 'Angular Material'],
										img: 'app/assets/spencer.jpg',
										id: 2
									},
									{
										name: 'Stirling Poon',
										role: 'TA',
										skills: ['C++', 'Java', 'Angular Material'],
										img: 'img/placeholder.jpg',
										id: 3
									}];
									/*
		jQuery.noConflict();
		$('md-list-item').click(function(){
			window.location.href = '/hackathon/#/profile/'+id;
		});*/
    }
	
	toProfile(id) {
		console.log('toProfile', id);
		this.$location.path('/profile/' + id);
	}
}];