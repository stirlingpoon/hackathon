import {getInfo} from 'app/services/profileInfo/profileInfo.js';
import _ from 'lodash';

export default ['$scope', '$routeParams', class ProfileCtrl {
    constructor($scope, $routeParams) {
        console.log('profile id', $routeParams.profileId);
        getInfo($routeParams.profileId).then(({firstName, lastName, name, email, skills}) => {
            $scope.name = name || (firstName + ' ' + lastName);
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