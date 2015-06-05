// Document ready function
$(function() {
	// JavaScript jQuery code from Bootply.com editor
	$('[data-toggle=offcanvas]').click(function() {
	    $('.row-offcanvas').toggleClass('active');
	});

	populateGroceryVideoList();
	populateGroceryList();


	buttonAddIngredientVideo();

	$("#text-add-ingredient").focus(function() {
		$(this).val("");
	});

	$(".grocery-list-container").hide();

	$("#SortRecipeButton").click(function(){
		$(".grocery-video-list-container").show();
		$(".grocery-list-container").hide();
		$('#SortIngredientLi').removeClass("redUnderline");
		$('#SortRecipeLi').addClass("redUnderline");
		buttonAddIngredientVideo();
	});

	$("#SortIngredientButton").click(function() {
		$(".grocery-video-list-container").hide();
		$(".grocery-list-container").show();
		$('#SortRecipeLi').removeClass("redUnderline");
		$('#SortIngredientLi').addClass("redUnderline");
		buttonAddIngredient();
	});

	removeVideos();
});

function buttonAddIngredientVideo() {
	$("#button-add-ingredeint").click(function() {
		var ingredient = $("#text-add-ingredient").val();

		if(ingredient.trim() == "" || ingredient == "Add new ingredient...") {
			return false;
		} else {
			var div = $('<div/>', {
				class: "video-ingredient"
			});
			var button = $('<button/>', {
				class: "video-ingredient-button-x",
				html: "X"
			}).appendTo(div);
			var checkbox = $('<input/>', {
				class: "video-ingredient-checkbox",
				type: 'Checkbox'
			}).appendTo(div);
			var span1 = $('<span/>', {
				class: "video-ingredient-measurement",
			}).appendTo(div);
			var span2 = $('<span/>', {
				class: "video-ingredient-item",
				html: ingredient
			}).appendTo(div);

			$('.grocery-video-list-container').append(div);

			var mq = window.matchMedia( "(max-width: 767px)" );
			if (mq.matches) {
				$(".video-ingredient-checkbox").hide();
				$('.video-ingredient-button-x').click(function() {
					$(this).parent().remove();
				});	
			} else {
				$(".video-ingredient-button-x").hide();
			}
		}
	});
}

function buttonAddIngredient(){
	$("#button-add-ingredeint").click(function() {
		var ingredient = $("#text-add-ingredient").val();
		var div = $('<div/>', {
			class: "video-ingredient"
		});
		var button = $('<button/>', {
			class: "video-ingredient-button-x",
			html: "X"
		}).appendTo(div);
		var checkbox = $('<input/>', {
			class: "video-ingredient-checkbox",
			type: 'Checkbox'
		}).appendTo(div);	
		var span1 = $('<span/>', {
			class: "video-ingredient-measurement",
			html: " "
		}).appendTo(div);
		var span2 = $('<span/>', {
			class: "video-ingredient-item",
			html: ingredient
		}).appendTo(div);

		$('.grocery-list-container').append(div);

		var mq = window.matchMedia( "(max-width: 767px)" );
		if (mq.matches) {
			$(".video-ingredient-checkbox").hide();
			$('.video-ingredient-button-x').click(function() {
				$(this).parent().remove();
			});	
		} else {
			$(".video-ingredient-button-x").hide();
		}
	});
}

function removeVideos() {
	var mq = window.matchMedia( "(max-width: 767px)" );

	if (mq.matches) { // max-width: 767px is true
		$("#button-remove").hide();
		$("#remove-all").hide();
		$("#button-edit").show();
		$(".video-checkbox").hide();
		$(".video-button-x").hide();
		$("#button-done").hide();
		$("#text-add-ingredient").hide();
		$("#button-add-ingredeint").hide();
		$(".video-ingredient-checkbox").hide();
		$(".video-ingredient-button-x").hide();
		$(".video-checkbox-all").hide();

		$("#button-edit").click(function() {
			$("#button-edit").hide();
			$("#button-done").show();
			$(".video-button-x").show();
			$("#text-add-ingredient").show();
			$("#button-add-ingredeint").show()
			$(".video-ingredient-checkbox").hide();
			$(".video-ingredient-button-x").show();

			$("#button-GeG4axaSQmo").click(function(){
				$(".GeG4axaSQmo").remove();	
			});
			$("#button-Xxoha70nJsI").click(function(){
				$(".Xxoha70nJsI").remove();	
			});
			$("#button-IMrBWBtdkhA").click(function(){
				$(".IMrBWBtdkhA").remove();	
			});

			$('.video-ingredient-button-x').click(function() {
				$(this).parent().remove();
			});
			
		});

		$("#button-done").click(function() {
			$("#button-edit").show();
			$("#button-done").hide();
			$(".video-button-x").hide();
			$("#text-add-ingredient").hide();
			$("#button-add-ingredeint").hide();
			$(".video-ingredient-checkbox").hide();
			$(".video-ingredient-button-x").hide();
		});
	}
	else { // max-width: 767px is false
		$("#button-remove").show();
		$("#button-edit").hide();
		$(".video-checkbox").show();
		$(".video-button-x").hide();
		$("#button-done").hide();
		$(".video-ingredient-checkbox").show();
		$(".video-ingredient-button-x").hide();
		$(".video-checkbox-all").show();

		$("#button-remove").click(function() {
			
			// remove all ingredients
			if ($(".video-checkbox-all").is(':checked')) {
				$(".grocery-video-list-container").empty();
				$(".grocery-list-container").empty();
			}

			// whole video
			if($("#check-GeG4axaSQmo").is(':checked')) {
				$(".GeG4axaSQmo").remove();		
			} 
			if($("#check-Xxoha70nJsI").is(':checked')) {
				$(".Xxoha70nJsI").remove();		
			} 
			if($("#check-IMrBWBtdkhA").is(':checked')) {
				$(".IMrBWBtdkhA").remove();		
			} 

			// individual ingredients
			$('.video-ingredient-checkbox:checkbox:checked').parent().remove();
		});
	}
}