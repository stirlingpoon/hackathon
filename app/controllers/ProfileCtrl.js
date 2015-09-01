import ProfileInfo from 'app/services/profileInfo/profileInfo.js';
import _ from 'lodash';

export default ['$scope', '$routeParams', class ProfileCtrl {
    constructor($scope, $routeParams) {
        this.$scope = $scope;
        this.$routeParams = $routeParams;
        console.log('profile id', $routeParams.profileId);
        ProfileInfo.getInfo($routeParams.profileId).then(({role, name, avatar, email, skills}) => {
            $scope.name = name;
            $scope.role = role;
            $scope.face = avatar;
			$scope.email = email;
            $scope.skills = skills;
        });
        $scope.AVATARS = [null].concat(_.pluck(ProfileInfo.DETAILS, 'avatar'));
    }

    querySearch(query) {
        return ProfileInfo.getSkills(query);
    }

    searchTextChange(text) {
        console.log('Text changed to ' + text);
    }

    selectedItemChange(item) {
        console.log('Item changed to', item);
        if (item !== undefined && this.$scope.skills.filter(({name}) => name === item.display || name === item.searchKey).length === 0) {
            this.$scope.skills.push({
                name: item.display,
                endorsedBy: []
            });
            this.searchText = null;
        }
    }

    /*
    newSkill(skill) {
        return {
            name: skill,
            rank: 0,
            endorsedBy: []
        }
    }
    */
    getAvatarById(id) {
        console.log('getAvatarById', id, ProfileInfo.getInfo(id).avatar);
        return ProfileInfo.getInfo(id).then(info => info.avatar);
    }

    endorseSkill(skill) {
        console.log('endorseSkill', skill);
        var id = 2; //Spencer
        if (skill.endorsedBy.indexOf(id) === -1) {
            skill.endorsedBy.push(id);
            ProfileInfo.endorseSkill(id, skill);
        }
    }
}];