export default ['$scope', class WrapperCtrl {
    constructor($scope) {
    	this.$scope = $scope;
    }

    querySearch(query) {
    	console.log(query);
    	return [{display: query + 'a', value: 'a'}, {display: query + 'b', value: 'b'}];
    }

    searchTextChange(text) {
    	console.log('Text changed to ' + text);
    }

    selectedItemChange(item) {
    	console.log('Item changed to', item);
    }
}];