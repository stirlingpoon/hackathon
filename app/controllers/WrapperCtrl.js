import {getAllSkills} from 'app/services/profileInfo/profileInfo.js';

export default ['$scope', class WrapperCtrl {
    constructor($scope) {
    	this.$scope = $scope;
    }

    querySearch(query) {
    	return this.allSkills().then(skills =>
    		Promise.resolve(skills.filter(skill => skill.value.indexOf(query) === 0))
		)
    }

    searchTextChange(text) {
    	console.log('Text changed to ' + text);
    }

    selectedItemChange(item) {
    	console.log('Item changed to', item);
    }

    allSkills() {
    	return getAllSkills().then(skills => 
    		Promise.resolve(skills
    			.map(skill => ({
    				display: skill,value: skill.toLowerCase()
    			}))
			)
    	)
    }
}];