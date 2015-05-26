var dealsApp = angular.module('dealsApp', []);	

dealsApp.controller("dealsController",['$scope', '$http', '$filter',
	function($scope, $http, $filter){

	$scope.deals = [];
	$scope.bannerDeals = [];
	$scope.deal1 = {};
	$scope.deal2 = {};
	$scope.deal3 = {};

	$http.get('deals.json').success(function(data) {
		$scope.deals = data;
		$scope.getRandomDeals();
	});

	$scope.getRandomDeals = function() {
		for(var i = 0; i < 3; i++) {
			var randomInt = Math.floor(Math.random() * (12 - 0) + 0);
			$scope.bannerDeals[i] = $scope.deals[randomInt];
		}
		$scope.deal1 = $scope.bannerDeals[0];
		$scope.deal2 = $scope.bannerDeals[1];
		$scope.deal3 = $scope.bannerDeals[2];
	}
}]);