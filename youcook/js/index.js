// Document ready function
$(function() {
	// JavaScript jQuery code from Bootply.com editor
	$('[data-toggle=offcanvas]').click(function() {
		$('.row-offcanvas').toggleClass('active');
	});

	populateWhatToWatch();


	$('body').on("click", "#desktopPlusCookbook", function(e) {
		iosOverlay({
			text: "Added to Cookbook",
			duration: 2e3,
			icon: "img/check.png"
		});
		return false;
	});
	$('body').on('click','#desktopPlusMealPlan',function(){
  		openDesktopCalendar();
  		var cal = document.createElement('div');
  		cal.id = "addDatePicker";
  		$(this).next().html(cal);  		
		$("#addDatePicker").datepicker({
   			onSelect: function(e) {
				iosOverlay({
					text: "Added to Mealplan",
					duration: 2e3,
					icon: "img/check.png"
				});
				$(this).hide();
				return false;
			}
		});
	});

	function openDesktopCalendar() {
		document.getElementById('desktopPlusCalendarPopup').style.display = 'block';
	}
	function closeDesktopCalendar() {
    	document.getElementById('desktopPlusCalendarPopup').style.display = 'none';
	}

	$('.mobilePlus').click(function() {
		$('.mobilePlusOptions').toggle();
		$(".mobilePlus").toggleClass("mobilePlusRotate");
	});
	$('body').on('click','#mobilePlusCookbook',function(e){
  		iosOverlay({
			text: "Added to Cookbook",
			duration: 2e3,
			icon: "img/check.png"
		});
		return false;
	});
	$('body').on('click','#mobilePlusMealPlan',function(){
  		openMobileCalendar();
  		var cal = document.createElement('div');
  		cal.id = "addDatePicker";
  		$(this).next().html(cal);  		
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

	function openMobileCalendar() {
		document.getElementById('mobilePlusCalendarPopup').style.display = 'block';
	}
	function closeMobileCalendar() {
    	document.getElementById('mobilePlusCalendarPopup').style.display = 'none';
	}
});
