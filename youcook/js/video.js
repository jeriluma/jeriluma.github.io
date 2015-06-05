// Document ready function
$(function() {
	// JavaScript jQuery code from Bootply.com editor
	$('[data-toggle=offcanvas]').click(function() {
		$('.row-offcanvas').toggleClass('active');
	});
	
	$('#directionsButton').click(function() {
		$('#directionsLi').addClass("redUnderline");
		$('#ingredientsLi').removeClass("redUnderline");
		$('#directions').addClass("show");
		$('#ingredients').addClass("hide");
	});
	$('#ingredientsButton').click(function() {
		$('#directionsLi').removeClass("redUnderline");
		$('#ingredientsLi').addClass("redUnderline");
		$('#directions').removeClass("show");
		$('#ingredients').removeClass("hide");
	});

	$('.hideRecipe').hide();
	$('#recipe').hide();

	$(".seeRecipe").click(function() {
  		$( this ).hide();
  		$('.hideRecipe').show();
  		$('#recipe').show();
	});
	$(".hideRecipe").click(function() {
  		$( this ).hide();
  		$('.seeRecipe').show();
  		$('#recipe').hide();
	}); 	

	$('body').on('click','#print',function(e){
  		iosOverlay({
			text: "Printed",
			duration: 2e3,
			icon: "img/check.png"
		});
		return false;
	});
	$('body').on('click','#email',function(e){
  		iosOverlay({
			text: "Emailed",
			duration: 2e3,
			icon: "img/check.png"
		});
		return false;
	});
	$('body').on('click','#addIngredients',function(e){
  		iosOverlay({
			text: "Added to Grocery List",
			duration: 2e3,
			icon: "img/check.png"
		});

  		$('.video-ingredient input:checked').each(function() {
		    $(this).attr('checked', false);
		});
		return false;
	});
	$('body').on('click','#addToCookbook',function(e){
  		iosOverlay({
			text: "Added to Cookbook",
			duration: 2e3,
			icon: "img/check.png"
		});
		return false;
	});
	$('body').on('click','#addToMealplan',function(){
  		openCalendar();
  		var cal = document.createElement('div');
  		cal.id = "addDatePicker";
  		$('#calendarPopup').html(cal);  		
		$("#addDatePicker").datepicker({
   			onSelect: function(e) {
				iosOverlay({
					text: "Added to Mealplan",
					duration: 2e3,
					icon: "img/check.png"
				});
				closeCalendar();
				return false;
			}
		});
	});
	$('body').on('click','#mobileAddMealPlan',function(){
  		openMobileCalendar();
  		var cal = document.createElement('div');
  		cal.id = "addDatePicker";
  		$('#mobileCalendarPopup').html(cal);  		
		$("#addDatePicker").datepicker({
   			onSelect: function(e) {
				iosOverlay({
					text: "Added to Mealplan",
					duration: 2e3,
					icon: "img/check.png"
				});
				closeMobileCalendar();
				return false;
			}
		});
	});
	function openCalendar() {
		document.getElementById('calendarPopup').style.display = 'block';
	}
	function closeCalendar() {
    	document.getElementById('calendarPopup').style.display = 'none';
	}
	function openMobileCalendar() {
		document.getElementById('mobileCalendarPopup').style.display = 'block';
	}
	function closeMobileCalendar() {
    	document.getElementById('mobileCalendarPopup').style.display = 'none';
	}

	// hide that section
	// see recipe.click()
		// show the youcook section
		// hide see recipe button
		// show hide recipe button

	// hide recipe.click()
		// hide the recipe button
		// show the see recipe button

	// populate video player given an id
	var url = document.URL;
	url = url.split("/");
	url = url[url.length - 1];
	var id = "";
	for(var i = 0; i < url.length - 5; i++) {
		id += url[i];
	}
	populateVideoPlayer(id);
});
