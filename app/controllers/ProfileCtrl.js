import {getInfo} from 'app/services/profileInfo/profileInfo.js';

export default ['$scope', class ProfileCtrl {
    constructor($scope) {
        getInfo().then(({firstName, lastName, skills}) => {
            $scope.name = firstName + ' ' + lastName;
            $scope.role = 'Summer Intern at Credit Suisse';
            $scope.face = 'app/assets/stirling.jpg';
            $scope.skills = skills;
        });
    }
}];