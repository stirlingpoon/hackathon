import {getInfo} from 'app/services/profileInfo/profileInfo.js';
import _ from 'lodash';

export default ['$scope', class ProfileCtrl {
    constructor($scope) {
        getInfo().then(({firstName, lastName, email, skills}) => {
            $scope.name = firstName + ' ' + lastName;
            $scope.role = 'AVP';
            $scope.face = 'app/assets/spencer.jpg';
			$scope.email = email;
            $scope.skills = skills;
        });
    }

    newSkill(skill) {
        return {
            name: skill,
            rank: 0
        }
    }
}];