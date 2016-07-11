angular.module('app.controllers', [])

.controller('BrandSolutionsCtrl', function($scope, sampleItems) {
	
	$scope.sampleItems = sampleItems;
	
	$scope.sampleData = {};
	
	$scope.saveSampleData =  function () {
		$scope.sampleItems.$add($scope.sampleData); // data saved to firebase
		console.log(" data saved.");
		$scope.getSampleData();
	}
    
	$scope.getSampleData =  function () {
		
		$scope.resultArray = [];
		$scope.sampleItems.$getIndex().forEach(function (index) {
			var eachItem = $scope.sampleItems[index];
			console.log("eachItem : " + JSON.stringify(eachItem));
			$scope.resultArray.push(eachItem);
		});	
	};
	
	
	
	
});