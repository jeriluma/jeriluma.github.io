var dealsApp = angular.module('dealsApp', []);

dealsApp.controller("dealsHeaderController",['$scope', '$http', '$filter',
	function($scope, $http, $filter){	

	// A $( document ).ready() block.
	$( document ).ready(function() {
		$("#cityUp").hide();
		$(".cities").hide();
	    
	    $("#cityDown").click(function() {
	    	$(this).hide();
	    	$("#cityUp").show();

	    	if (window.matchMedia('(min-width: 768px)').matches) {
	    		$(".citiesBig").slideDown();
	    	} else {
	    		$(".citiesSmall").slideDown();
	    	}
	    });

	    $("#cityUp").click(function() {
	    	$(this).hide();
	    	$("#cityDown").show();
	    	$(".cities").slideUp();
	    });

	    $(".filterSection").hide();
	    $("#filter #close").hide();
	    
	    $("#filter #open").click(function(){
	    	$("#filter #open").hide();
	    	$("#filter #close").show();
	    	$(".filterSection").slideDown();
	    });
	    $("#filter #close").click(function(){
	    	$("#filter #close").hide();
	    	$("#filter #open").show();
	    	$(".filterSection").slideUp();
	    });

	});

	$scope.selectedCity = {
		"city": "Seattle",
		"state": "WA"
	};

	$scope.showCities = false;

	$scope.hideCities = function(city) {
		$scope.showCities = !$scope.showCities;	
		$scope.selectedCity = city;
	}

	$scope.cities = [
		{
			"city" : "Atlanta",
			"state": "GA"
		}, {
			"city" : "Charlotte",
			"state": "NC"
		}, {
			"city" : "Denver",
			"state": "CO"
		}, {
			"city" : "Indianapolis",
			"state": "IN"
		}, {
			"city" : "Miami",
			"state": "FL"
		}, {
			"city" : "New Orleans",
			"state": "LA"
		}, {
			"city" : "Philadelphia",
			"state": "PA"
		}, {
			"city" : "Seattle",
			"state": "WA"
		}, 
	];

	$scope.categories = [
		{
			"name" : "Retail & Services",
			"categories" : [
				{
					"name": "Automotive Services"
				}, {
					"name": "Food & Grocery"
				} , {
					"name": "Home Services"
				}, {
					"name": "Men's Clothing"
				}, {
					"name": "Photography Services"
				}, {
					"name": "Women's Clothing"
				}, {
					"name": "Treat"
				}
			]
		},{
			"name": "Special Interest",
			"categories" : [
				{
					"name": "Baby"
				}, {
					"name": "Bridal"
				}, {
					"name": "College"
				}, {
					"name": "Jewish"
				}, {
					"name": "Kids"
				}, {
					"name": "Kosher"
				}, {
					"name": "Pets"
				}, {
					"name": "Gay"
				}, {
					"name": "Travel"
				}
			]
		}, {
			"name": "Dining & Nightlife",
			"categories" : [
				{
					"name": "Bars & Clubs"
				}, {
					"name": "Restaurants"
				}
			]
		}, {
			"name": "Fitness",
			"categories" : [
				{
					"name": "Boot Camp"
				}, {
					"name": "Fitness Classes"
				}, {
					"name": "Martial Arts"
				}, {
					"name": "Personal Training"
				}, {
					"name": "Gym"
				}, {
					"name": "Pilates"
				}, {
					"name": "Yoga"
				}
			]
		}, {
			"name": "Activities & Events",
			"categories" : [
				{
					"name": "Bowling"
				}, {
					"name": "City Tours"
				}, {
					"name": "Comedy Clubs"
				}, {
					"name": "Concerts"
				}, {
					"name": "Dance Classes"
				}, {
					"name": "Life Skills Classes"
				}, {
					"name": "Museums"
				}, {
					"name": "Outdoor Adventures"
				}, {
					"name": "Skiing"
				}, {
					"name": "Skydiving"
				}, {
					"name": "Sporting Events"
				}, {
					"name": "Theater"
				}, {
					"name": "Wine Tasting"
				}, {
					"name": "Golf"
				} 
			]
		}, {
			"name": "Health & Beauty",
			"categories" : [
				{
					"name": "Chiropractic"
				}, {
					"name": "Dental"
				}, {
					"name": "Dermatology"
				}, {
					"name": "Facial"
				}, {
					"name": "Hair Removal"
				}, {
					"name": "Hair Salon"
				}, {
					"name": "Makeup"
				}, {
					"name": "Manicure & Pedicure"
				}, {
					"name": "Massage"
				}, {
					"name": "Eye & Vision"
				}, {
					"name": "Spa"
				}, {
					"name": "Tanning"
				}, {
					"name": "Teeth Whitening"
				}
			]
		}
	];
}]);

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