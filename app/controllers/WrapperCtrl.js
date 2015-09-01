import ProfileInfo from 'app/services/profileInfo/profileInfo.js';
import _ from 'lodash';

export default ['$scope', '$location', '$routeParams', class WrapperCtrl {
    constructor($scope, $location, $routeParams) {
    	this.$scope = $scope;
    	this.$location = $location;

    	 ProfileInfo.getInfo($routeParams.profileId).then(() => {
    	 	$scope.face = 'app/assets/spencer-small.jpg';
    	 })
    }

    querySearch(query) {
    	return Promise.all([this.getSkills(query), this.getPeople(query)])
    		.then(([skills, people]) => {
    			console.log('Got with filter', query, skills, people)
				return Promise.resolve(_.flatten([skills, people]));
    		});
    }

    searchTextChange(text) {
    	console.log('Text changed to ' + text);
    }

    selectedItemChange(item) {
    	console.log('Item changed to', item);
    	if (item !== undefined) {
    		switch (item.type) {
    			case 'person':
    				this.handlePersonChange(item);
    				return;
    			case 'skill':
    				this.handleSkillChange(item);
    				return;
    			default:
    				console.error('Search item has unknown type');
    		}
    	}
    }

    handlePersonChange(person) {
    	this.$location.path('/profile/' + person.id);
    }

    handleSkillChange(skill) {
    	this.$location.path('/searchResultBySkill/' + skill.display);
    }

    getSkills(filter) {
    	return ProfileInfo.getSkills(filter)
    }

    getPeople(filter) {
    	return ProfileInfo.getPeople(filter)
    }
}];