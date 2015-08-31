export default ['$scope', 'profileInfo', class ProfileCtrl {
    constructor($scope, profileInfo) {
        profileInfo.getInfo().then(({firstName, lastName, skills}) => {
            $scope.name = firstName + ' ' + lastName;
            $scope.role = 'Summer Intern at Credit Suisse';
            $scope.face = 'app/assets/stirling.jpg';
            $scope.skills = skills;
        });
    }
}];