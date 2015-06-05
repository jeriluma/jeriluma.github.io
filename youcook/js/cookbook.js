// Document ready function
$(function() {
	// JavaScript jQuery code from Bootply.com editor
	$('[data-toggle=offcanvas]').click(function() {
        $('.row-offcanvas').toggleClass('active');
      });
	
	populateMyCookbook();
	removeVideos();

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

function removeVideos() {
	var mq = window.matchMedia( "(max-width: 767px)" );

	if (mq.matches) {
		$("#button-remove").hide();
		$("#button-edit").show();
		$(".video-checkbox").hide();
		$(".video-button-x").hide();
		$("#button-done").hide();

		$("#button-edit").click(function() {
			$("#button-edit").hide();
			$("#button-done").show();
			$(".video-button-x").show();

			$("#button-GeG4axaSQmo").click(function(){
				$(".GeG4axaSQmo").remove();	
			});
			$("#button-Xxoha70nJsI").click(function(){
				$(".Xxoha70nJsI").remove();	
			});
			$("#button-IMrBWBtdkhA").click(function(){
				$(".IMrBWBtdkhA").remove();	
			});
			
		});

		$("#button-done").click(function() {
			$("#button-edit").show();
			$("#button-done").hide();
			$(".video-button-x").hide();
		});
	}
	else {
		$("#button-remove").show();
		$("#button-edit").hide();
		$(".video-checkbox").show();
		$(".video-button-x").hide();
		$("#button-done").hide();

		$("#button-remove").click(function() {
			if($("#check-GeG4axaSQmo").is(':checked')) {
				$(".GeG4axaSQmo").remove();		
			} 
			if($("#check-Xxoha70nJsI").is(':checked')) {
				$(".Xxoha70nJsI").remove();		
			} 
			if($("#check-IMrBWBtdkhA").is(':checked')) {
				$(".IMrBWBtdkhA").remove();		
			} 
		});
	}
}