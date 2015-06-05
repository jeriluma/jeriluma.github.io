// Document ready function
$(function() {
	$(".template").hide();
	// $(".video-checkbox").hide();
	$(".video-button-x").hide();
});

function populateWhatToWatch() {
	var template = $(".video-template");
	var container = $(".what-to-watch-container");
	var templateClone;

	container.empty();

	for(var i = 0; i < videos.entries.length; i++){
		var video = videos.entries[i];
		templateClone = template.clone();

		templateClone.find(".video-title").html(video.title);
		templateClone.find(".video-channel").html(video.channel);
		templateClone.find(".video-thumbnail").attr({"src": "http://img.youtube.com/vi/" + video.id + "/0.jpg"});
		templateClone.find(".video-link").attr({"href": video.id + ".html"});
		
		templateClone.show();
		templateClone.removeClass("video-template");
		container.append(templateClone);
	}
}

function populateMyCookbook() {
	var template = $(".video-template");
	var container = $(".my-cookbook-container");
	var templateClone;

	container.empty();

	for(var i = 0; i < videos.entries.length; i++){
		var video = videos.entries[i];
		templateClone = template.clone();

		templateClone.find(".video-title").html(video.title);
		templateClone.find(".video-channel").html(video.channel);
		templateClone.find(".video-description").html(video.description);
		templateClone.find(".video-thumbnail").attr({"src": "http://img.youtube.com/vi/" + video.id + "/0.jpg"});
		templateClone.find(".video-link").attr({"href": video.id + ".html"});
		
		templateClone.find(".video-checkbox").attr({"value": video.id});
		templateClone.find(".video-checkbox").attr('id', 'check-' + video.id);
		templateClone.find(".video-checkbox").show();

		templateClone.find(".video-button-x").attr('id', 'button-' + video.id);
		templateClone.find(".video-button-x").show();

		templateClone.addClass(video.id);
		
		templateClone.show();
		templateClone.removeClass("video-template");
		container.append(templateClone);
	}
	template.remove();
}

function populateMealPlan() {
	var template = $(".video-template");
	var container = $(".meal-plan-container");
	var templateClone;

	container.empty();

	for(var i = 0; i < videos.entries.length; i++){
		var video = videos.entries[i];
		templateClone = template.clone();

		templateClone.find(".video-title").html(video.title);
		templateClone.find(".video-channel").html(video.channel);
		templateClone.find(".video-description").html(video.description);
		templateClone.find(".video-thumbnail").attr({"src": "http://img.youtube.com/vi/" + video.id + "/0.jpg"});
		templateClone.find(".video-link").attr({"href": video.id + ".html"});

		templateClone.find(".video-checkbox").attr({"value": video.id});
		templateClone.find(".video-checkbox").attr('id', 'check-' + video.id);
		templateClone.find(".video-checkbox").show();

		templateClone.find(".video-button-x").attr('id', 'button-' + video.id);
		templateClone.find(".video-button-x").show();

		templateClone.addClass(video.id);
		
		templateClone.show();
		templateClone.removeClass("video-template");
		container.append(templateClone);
	}

	template.remove();
}

function populateGroceryVideoList() {
	var template = $(".video-grocery-video-list-template");
	var container = $(".grocery-video-list-container");	

	var templateClone;

	container.empty();

	for(var i = 0; i < videos.entries.length; i++){
		var video = videos.entries[i];
		templateClone = template.clone();

		templateClone.find(".video-title").html(video.title);
		templateClone.find(".video-thumbnail").attr({"src": "http://img.youtube.com/vi/" + video.id + "/0.jpg"});
		templateClone.find(".video-link").attr({"href": video.id + ".html"});

		// ingredients
		var ingredientTemplate = templateClone.find(".video-ingredient");
		var ingredientContainer = templateClone.find(".video-ingredients");
		var ingredientTemplateClone;

		ingredientContainer.empty();

		for(var j = 0; j < video.ingredients.length; j++) {
			ingredientTemplateClone = ingredientTemplate.clone();
			var data = video.ingredients[j].split("|");
			if(data.length < 1) {
				ingredientTemplateClone.find(".video-ingredient-item").html(data[0]);
			}
			else {
				ingredientTemplateClone.find(".video-ingredient-measurement").html(data[0]);
				ingredientTemplateClone.find(".video-ingredient-item").html(data[1]);
			}
			ingredientContainer.append(ingredientTemplateClone);
		}

		templateClone.find(".video-checkbox").attr({"value": video.id});
		templateClone.find(".video-checkbox").attr('id', 'check-' + video.id);
		templateClone.find(".video-checkbox").show();

		templateClone.find(".video-button-x").attr('id', 'button-' + video.id);
		templateClone.find(".video-button-x").show();

		templateClone.addClass(video.id);
		
		templateClone.show();
		templateClone.removeClass("video-grocery-video-list-template");
		container.append(templateClone);
	}
}

function populateGroceryList() {
	var template = $(".video-grocery-list-template");
	var container = $(".grocery-list-container");	

	var templateClone;

	container.empty();

	for(var i = 0; i < videos.entries.length; i++){
		var video = videos.entries[i];
		templateClone = template.clone();

		// ingredients
		var ingredientTemplate = templateClone.find(".video-ingredient");
		var ingredientContainer = templateClone.find(".video-ingredients");
		var ingredientTemplateClone;

		ingredientContainer.empty();

		for(var j = 0; j < video.ingredients.length; j++) {
			ingredientTemplateClone = ingredientTemplate.clone();
			var data = video.ingredients[j].split("|");
			if(data.length < 1) {
				ingredientTemplateClone.find(".video-ingredient-item").html(data[0]);
			}
			else {
				ingredientTemplateClone.find(".video-ingredient-measurement").html(data[0]);
				ingredientTemplateClone.find(".video-ingredient-item").html(data[1]);
			}
			ingredientContainer.append(ingredientTemplateClone);
		}

		templateClone.find(".video-checkbox").attr({"value": video.id});
		templateClone.find(".video-checkbox").attr('id', 'check-' + video.id);
		templateClone.find(".video-checkbox").show();

		templateClone.find(".video-button-x").attr('id', 'button-' + video.id);
		templateClone.find(".video-button-x").show();

		templateClone.addClass(video.id);
		
		templateClone.show();
		templateClone.removeClass("video-grocery-list-template");
		container.append(templateClone);
	}
}

function populateVideoPlayer(id){
	for(var i = 0; i < videos.entries.length; i++){
		var video = videos.entries[i];

		if(video.id == id) {
			$(".video-title").html(video.title);
			$(".video-channel").html(video.channel);
			$(".video-description").html(video.description);
			// $(".video-link").attr({"src": "https://www.youtube.com/embed/" + video.id + "?rel=0"});
			$(".video-readyIn").html(video.readyIn);
			$(".video-servings").html(video.servings);
			$(".video-servings").val(video.servings);

			var params = { allowScriptAccess: "always" };
			var atts = { id: "video-link" };

			var mqSmall = window.matchMedia( "(max-width: 440px)" );
			var mqMed = window.matchMedia( "(max-width: 767px)" );

			if(mqSmall.matches) {
				swfobject.embedSWF("http://www.youtube.com/v/" + video.id + "?version=3&enablejsapi=1",
			"video-link", "270", "152", "8", null, null, params, atts);
			} else if(mqMed.matches) {
				swfobject.embedSWF("http://www.youtube.com/v/" + video.id + "?version=3&enablejsapi=1",
			"video-link", "390", "219", "8", null, null, params, atts);
			} else {
				swfobject.embedSWF("http://www.youtube.com/v/" + video.id + "?version=3&enablejsapi=1",
			"video-link", "640", "360", "8", null, null, params, atts);
			}

			// ingredients
			var ingredientTemplate = $(".video-ingredient");
			var ingredientContainer = $(".video-ingredients");
			var ingredientTemplateClone;
			ingredientContainer.empty();
			for(var j = 0; j < video.ingredients.length; j++) {
				ingredientTemplateClone = ingredientTemplate.clone();
				var data = video.ingredients[j].split("|");
				if(data.length < 1) {
					ingredientTemplateClone.find(".video-ingredient-item").html(data[0]);
				}
				else {
					ingredientTemplateClone.find(".video-ingredient-measurement").html(data[0]);
					ingredientTemplateClone.find(".video-ingredient-item").html(data[1]);
				}
				ingredientContainer.append(ingredientTemplateClone);
			}

			// directions
			var directionTemplate = $(".video-direction");
			var directionContainer = $(".video-directions");
			var directionTemplateClone;
			directionContainer.empty();
			for(var j = 0; j < video.directions.length; j++) {
				directionTemplateClone = directionTemplate.clone();
				var data = video.directions[j].split("|");
				if(data.length < 1) {
					directionTemplateClone.find(".video-direction-item").html(data[0]);
				}
				else {
					directionTemplateClone.find(".video-direction-measurement").html(data[0]);
					directionTemplateClone.find(".video-direction-item").html(data[1]);
				}
				directionContainer.append(directionTemplateClone);
			}
		} // video.id == id
		else {
			populateRelatedVideos(video);
		}
	} // for: videos.entries.length
}

function populateRelatedVideos(video) {
	var template = $(".related-videos-template");
	var container = $(".related-videos-container");
	var templateClone;
	templateClone = template.clone();

	templateClone.find(".video-title").html(video.title);
	templateClone.find(".video-channel").html(video.channel);
	templateClone.find(".video-thumbnail").attr({"src": "http://img.youtube.com/vi/" + video.id + "/0.jpg"});
	templateClone.find(".video-link").attr({"href": video.id + ".html"});
	
	templateClone.show();
	templateClone.removeClass("related-videos-template");
	container.append(templateClone);
}

function onYouTubePlayerReady(playerId) {
	var player = document.getElementById("video-link");

	setInterval(function(){
		var time = Math.round(player.getCurrentTime());
		updateDirections(time);
	},490);

   addVideoDirections(player);
}

function addVideoDirections(player) {
	$(".video-direction").click(function() {
		var time1 = $(this).find(".video-direction-measurement").html();
		var time = time1.split("\:");
		time1 = 0;
		if(time.length == 1) {
			time1 += parseInt(time[0]);
		} else {
			time1 += parseInt(time[0] * 60);
			time1 += parseInt(time[1]);
		}

		player.seekTo(time1, true);
		player.playVideo();
	});
}

function updateDirections(videoSeconds) {
	$(".video-direction-measurement").each(function(i, obj) {
		var end = i == ($(".video-direction-measurement").length - 1);

		if (!end) {
			var time1 = $(".video-direction-measurement")[i];
			time1 = $(time1).html();
			var time = time1.split("\:");
			time1 = 0;
			if(time.length == 1) {
				time1 += parseInt(time[0]);
			} else {
				time1 += parseInt(time[0] * 60);
				time1 += parseInt(time[1]);
			}

			var time2 = $(".video-direction-measurement")[i + 1];
			time2 = $(time2).html();
			var time = time2.split("\:");
			time2 = 0;
			if(time.length == 1) {
				time2 += parseInt(time[0]);
			} else {
				time2 += parseInt(time[0] * 60);
				time2 += parseInt(time[1]);
			}

			if((videoSeconds > time1 && videoSeconds < time2) || videoSeconds == time1) {
				$(this).parent().addClass("highlight");
			} else {
				$(this).parent().removeClass("highlight");
			}

		} else {
			var time1 = $(".video-direction-measurement")[i];
			time1 = $(time1).html();
			var time = time1.split("\:");
			time1 = 0;
			if(time.length == 1) {
				time1 += parseInt(time[0]);
			} else {
				time1 += parseInt(time[0] * 60);
				time1 += parseInt(time[1]);
			}

			if(videoSeconds >= time1) {
				$(".video-direction-measurement").removeClass("highlight");
				$(this).parent().addClass("highlight");
			} else {
				$(this).parent().removeClass("highlight");
			}
		}
	});
}