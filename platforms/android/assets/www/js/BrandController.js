/* global angular, document, window */
'use strict';

angular.module('BrandCtrl', [])

.controller('BrandCtrl', function($scope, sampleItems,$stateParams, $timeout, ionicMaterialInk, ionicMaterialMotion) {
	
    // Set Header
    $scope.$parent.showHeader();
    $scope.$parent.clearFabs();
    $scope.isExpanded = false;
    $scope.$parent.setExpanded(false);
    $scope.$parent.setHeaderFab(false);

    // Set Motion
    $timeout(function() {
        ionicMaterialMotion.slideUp({
            selector: '.slide-up'
        });
    }, 300);

    $timeout(function() {
        ionicMaterialMotion.fadeSlideInRight({
            startVelocity: 3000
        });
    }, 700);

    // Set Ink
    ionicMaterialInk.displayEffect();
	
	
	
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
	$scope.getSampleData();
	

	
	
})


;
