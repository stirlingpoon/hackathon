import {getPeople} from 'app/services/profileInfo/profileInfo.js';
import _ from 'lodash';

export default ['$scope', class skillSearchResultCtrl {
    constructor($scope) {
        $scope.skillSearchResult = [{
										name: 'Anakin Lau',
										role: 'TA',
										skills: ['C++', 'Java', 'XML']
									},
									{
										name: 'Spencer Goh',
										role: 'AVP',
										skills: ['C++', '.NET', 'Angular Material']
									},
									{
										name: 'Stirling Poon',
										role: 'TA',
										skills: ['C++', 'Java', 'Angular Material']
									}];
	 
    }
}];