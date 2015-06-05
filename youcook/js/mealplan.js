// Document ready function
$(function() {
	$('[data-toggle=offcanvas]').click(function() {
		$('.row-offcanvas').toggleClass('active');
	});

	populateMealPlan();
	removeVideos();
	
	$("#datepicker").datepicker({
		showOn: "button",
		buttonImage: "img/calendar.png",
		dateFormat: "M dd",
		buttonImageOnly: true,
		onSelect: function(dateText, inst) { 
        	$('#dateNav a').html(dateText);
   		}
	});
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