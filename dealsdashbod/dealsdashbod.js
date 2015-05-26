var dealsApp = angular.module('dealsApp', []);	

dealsApp.controller("dealsController",['$scope', '$http', '$filter',
	function($scope, $http, $filter){

	$scope.deals = [
		{
			"id" : 1,
			"source" : "https://www.groupon.com/deals/gonzo-s-bar-and-grill?mediaId=212556",
			"venue" : "Pub Food at Gonzo's Bar and Grill",
			"location" : "Seattle, WA",
			"originalPrice" : 20,
			"dealPrice" : 10,
			"savingPercent" : 50,
			"image" : "img/1.jpg" 
		}, {
			"id" : 2,
			"source" : "https://www.groupon.com/deals/lake-forest-bar-grill-1-4?mediaId=212556",
			"venue" : "Lake Forest Bar & Grill",
			"location" : "Seattle, WA",
			"originalPrice" : 30,
			"dealPrice" : 18,
			"savingPercent" : 40,
			"image" : "img/2.jpg" 
		},{
			"id" : 3,	
			"source" : "http://www.travelzoo.com/local-deals/Seattle-Tacoma/Getaway/177230/Otters-Pond-Bed-Breakfast-Orcas-Island",
			"venue" : "Otters Pond Bed and Breakfast",
			"location" : "Seattle, WA",
			"originalPrice" : 390,
			"dealPrice" : 249,
			"savingPercent" : 36,
			"image" : "img/3.jpg" 
		},{
			"id" : 4,	
			"source" : "http://www.travelzoo.com/local-deals/Seattle-Tacoma/Spa/172853/City-Sweats",
			"venue" : "City Sweats",
			"location" : "Seattle, WA",
			"originalPrice" : 130,
			"dealPrice" : 79,
			"savingPercent" : 39,
			"image" : "img/4.jpg" 
		},{
			"id" : 5,	
			"source" : "http://local.amazon.com/snohomish/B00X8J456U/45-minute-sea-salt-or-sugar-body-scrub",
			"venue" : "Joyology Massage",
			"location" : "Seattle, WA",
			"originalPrice" : 89,
			"dealPrice" : 44,
			"savingPercent" : 51,
			"image" : "img/5.jpg" 
		},{
			"id" : 6,	
			"source" : "http://local.amazon.com/snohomish/B00WYB8UHI/18-holes-of-golf-with-cart-rental-and-range-balls",
			"venue" : "Kahler Glen Golf & Ski Resort",
			"location" : "Seattle, WA",
			"originalPrice" : 236,
			"dealPrice" : 135,
			"savingPercent" : 43,
			"image" : "img/6.jpg" 
		},{
			"id" : 7,	
			"source" : "http://www.giltcity.com/seattle/ponytailranchseamay",
			"venue" : "Pony Tail Ranch",
			"location" : "Seattle, WA",
			"originalPrice" : 130,
			"dealPrice" : 69,
			"savingPercent" : 46,
			"image" : "img/7.jpg" 
		},{
			"id" : 8,	
			"source" : "http://www.giltcity.com/seattle/upliftyogaseamay",
			"venue" : "Uplift Yoga & Sound Healing Arts",
			"location" : "Seattle, WA",
			"originalPrice" : 59,
			"dealPrice" : 39,
			"savingPercent" : 40,
			"image" : "img/8.jpg" 
		},{
			"id" : 9,	
			"source" : "https://www.groupon.com/deals/lynnwood-bowl-and-skate-2-2",
			"venue" : "Lynnwood Bowl & Skate",
			"location" : "Lynnwood, WA",
			"originalPrice" : 80,
			"dealPrice" : 36,
			"savingPercent" : 55,
			"image" : "img/9.jpg" 
		},{
			"id" : 10,	
			"source" : "https://www.groupon.com/deals/pacific-lanes-bowling-center-1",
			"venue" : "Pacific Lanes Bowling",
			"location" : "Seattle, WA",
			"originalPrice" : 20,
			"dealPrice" : 10,
			"savingPercent" : 50,
			"image" : "img/10.jpg" 
		},{
			"id" : 11,	
			"source" : "https://www.groupon.com/deals/lunchbox-laboratory-bellevue-1",
			"venue" : "Lunchbox Laboratory",
			"location" : "Bellevue, WA",
			"originalPrice" : 30,
			"dealPrice" : 18,
			"savingPercent" : 40,
			"image" : "img/11.jpg" 
		},{
			"id" : 12,	
			"source" : "https://www.groupon.com/deals/ga-adventure-inn-5",
			"venue" : "Adventure Inn",
			"location" : "Leavenworth, WA",
			"originalPrice" : 199,
			"dealPrice" : 109,
			"savingPercent" : 45,
			"image" : "img/12.jpg" 
		}
	];
}]);