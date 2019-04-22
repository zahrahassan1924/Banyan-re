$(document).ready(function() {
	$(".holder").slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		autoplaySpeed: 2000,
		autoplay: true,
		fade: true,
		arrows: false,
		speed: 1000
	});

	if ($(window).width() <= 980) {
		$(document).ready(function() {
			$(".fifth").slick({
				infinite: true,
				slidesToShow: 1,
				slidesToScroll: 1,
				dots: true,
				autoplaySpeed: 2000,
				autoplay: true,
				arrows: false,
				speed: 1000,
				centerMode: true,
				centerPadding: "40px"
			});
		});
	}
});

$(document).ready(function() {
	$(".slides").slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		arrows: false,
		autoplaySpeed: 2000,
		autoplay: true,
		fade: true,
		speed: 1000
	});
});

$("ul.tabs li").click(function() {
	var tab_id = $(this).attr("data-tab");

	$("ul.tabs li").removeClass("current");
	$(".tab-content").removeClass("current");

	$(this).addClass("current");
	$("#" + tab_id).addClass("current");

	$(".slides").slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		arrows: false,
		autoplaySpeed: 2000,
		autoplay: true,
		fade: true,
		speed: 1000
	});
});

$(".next").click(function() {
	$(".slides").slick("slickNext");
});

$(".prev").click(function() {
	$(".slides").slick("slickPrev");
});

$(".scroll").click(function() {
	$("html, body").animate(
		{
			scrollTop: $("#about").offset().top - 150
		},
		1000
	);
});

$(".filter-list a").on("click", function() {
	var filter = $(this).attr("data-filter");
	console.log(filter);

	$("drawing").hide();
	$("filter").show();

	$(".filter-list a").removeClass("selected");
	$(this).addClass("selected");

	return false;
});

$("a.filters").click(function(e) {
	// Special stuff to do when this link is clicked...

	// Cancel the default action
	e.preventDefault();
});

window.onload = function() {
	$slideshow = $(".slider").slick({
		dots: true,
		autoplay: true,
		autoplaySpeed: 2000,
		arrows: true,
		prevArrow: '<button type="button" class="slick-prev"></button>',
		nextArrow: '<button type="button" class="slick-next"></button>',
		slidesToShow: 1,
		slidesToScroll: 1
	});
	$(".slide").click(function() {
		$slideshow.slick("slickNext");
	});
};

$("a").click(function(e) {
	// Special stuff to do when this link is clicked...

	// Cancel the default action
	e.preventDefault();
});

function dropFunction(x) {
	x.classList.toggle("open");
}

function openForm() {
	$("#myForm").fadeIn("slow");
}

function closeForm() {
	$("#myForm").fadeOut("slow");
}
function openNav() {
	document.getElementById("myNav").style.display = "block";
}

window.onload = function() {
	function tabSlider() {
		$slideshow = $(".wraps").slick({
			dots: true,
			autoplay: true,
			autoplaySpeed: 2000,
			arrows: true,
			prevArrow: '<button type="button" class="slick-prev"></button>',
			nextArrow: '<button type="button" class="slick-next"></button>',
			slidesToShow: 1,
			slidesToScroll: 1
		});
	}

	setTimeout(function() {
		tabSlider();
	}, 100);

	$('a[data-toggle="tab"]').on("hidden.bs.tab", function(e) {
		$(".wraps").slick("unslick");
	});

	$('a[data-toggle="tab"]').on("shown.bs.tab", function(e) {
		setTimeout(function() {
			tabSlider();
		}, 1);
	});
};

var $button = $("#this-toggle"),
	$text = $(".something"),
	visible = false;

$button.click(function() {
	if (visible) {
		$text.slideUp("fast", function() {
			$text.addClass("hide").slideDown(0);
		});
	} else {
		$text.slideUp(0, function() {
			$text.removeClass("hide").slideDown("fast");
		});
	}
	visible = !visible;
});

$(document).ready(function() {
	$(window).scroll(function() {
		var scroll = $(window).scrollTop();
		if ($(window).width() <= 980) {
			if (scroll >= 200) {
				$("header").addClass("visible");
				$(".sidebarIconToggle").css("position", "fixed");
				$(".sidebarIconToggle").css("top", "30px");
				$(".logo").css("position", "fixed");
				$(".logo").css("width", "130px");
				$(".logo").css("top", "20px");
			} else {
				$("header").removeClass("visible");
				$(".sidebarIconToggle").css("position", "absolute");
				$(".sidebarIconToggle").css("top", "42px");
				$(".logo").css("position", "absolute");
				$(".logo").css("width", "155px");
				$(".logo").css("top", "30px");
			}
		}
	});
});

// $(".sidebarIconToggle").click(function() {
// 	$(".menu-list").toggleClass("showing");
// });

$(".sidebarIconToggle").click(function() {
	$(".menu-list").toggleClass("showing");
	if ($(".menu-list").hasClass("showing")) {
		$(".menu-list").css("top", "0vh");
	} else {
		$(".menu-list").css("top", "-100vh");
	}
});

$(document).ready(function() {
	// Add smooth scrolling to all links
	$("a").on("click", function(event) {
		if (this.hash !== "") {
			// Prevent default anchor click behavior
			event.preventDefault();
			// Store hash
			var hash = this.hash;
			// Using jQuery's animate() method to add smooth page scroll
			// The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
			$("html, body").animate(
				{
					scrollTop: $(hash).offset().top
				},
				800,
				function() {
					// Add hash (#) to URL when done scrolling (default click behavior)
					window.location.hash = hash;
				}
			);
		} // End if
	});
});
