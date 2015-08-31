import {getInfo} from 'app/services/profileInfo/profileInfo.js';
import _ from 'lodash';

export default ['$scope', class ProfileCtrl {
    constructor($scope) {
        getInfo().then(({firstName, lastName, skills}) => {
            $scope.name = firstName + ' ' + lastName;
            $scope.role = 'AVP';
            $scope.face = 'app/assets/spencer.jpg';
            $scope.skills = skills;
        });
    }
}];