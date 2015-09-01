import ProfileInfo from 'app/services/profileInfo/profileInfo.js';
import _ from 'lodash';

export default ['$scope', '$routeParams', class ProfileCtrl {
    constructor($scope, $routeParams) {
        this.$routeParams = $routeParams;
        console.log('profile id', $routeParams.profileId);
        ProfileInfo.getInfo($routeParams.profileId).then(({firstName, lastName, name, email, skills}) => {
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
            rank: 0,
            endorsedBy: []
        }
    }

    endorseSkill(skill) {
        console.log('endorseSkill', skill);
        var id = parseInt(this.$routeParams.profileId, 10);
        if (skill.endorsedBy.indexOf(id) === -1) {
            skill.rank++;
            skill.endorsedBy.push(id);
            ProfileInfo.endorseSkill(id, skill);
        }
    }
}];