$(document).ready(function(){
	
	// Add and Remove Active Class From NavBar With Scroll
	$(function(){
		$("#activeHome").toggleClass('active');
		$(document).scroll(function(){
			let size = $(this).scrollTop();
			$("#activeHome").toggleClass('active', size < 360);
			$("#activeAbout").toggleClass('active', size > 360 && size < 970);
			$("#activeServices").toggleClass('active', size > 970 && size < 1600);
			$("#activeTours").toggleClass('active', size > 1600);
	  }); // End of Scroll()
	}); // End of Function().

	// Add and Remove Active Class From NavBar With Click
	$("#activeHome").click(function(){
		$(this).addClass('active');
		removeActive(["About", "Services", "Tours"])
	});

	$("#activeAbout").click(function(){
		$(this).addClass('active');
		removeActive(["Home", "Services", "Tours"])
	});

	$("#activeServices").click(function(){
		$(this).addClass('active');
		removeActive(["Home", "About", "Tours"])
	});

	$("#activeTours").click(function(){
		$(this).addClass('active');
		removeActive(["Home", "About", "Services"])
	});

	$("#activeToursBtn").click(function(){
		$("#activeTours").addClass('active');
		removeActive(["Home", "About", "Services"])
	});

	// Remove "Active" Class From NavBar
	function removeActive(val){
		for(let i = 0; i <= 2; i++)
			$(`#active${val[i]}`).removeClass('active');
	}
	
	// Hide Collapse NavBar
	$('.navbar-nav>li>a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
	});

	// Change NavBar While Scrolling
	$(function(){
		$(document).scroll(function(){
	    var $nav = $(".navbar");
	    $nav.toggleClass('scrolled', $(this).scrollTop() > $("#about").height());
	  }); // End of Scroll()
	}); // End of function()

	// NavBar BG-color
	$(".navbar-toggler").click(function(event){
		event.preventDefault();
		if($(window).width() <= 991){
			if($(".navbar").hasClass('bg-primary')){
				$(".navbar").removeClass("bg-primary")
			}
			else{
				$(".navbar").addClass("bg-primary")
			}
			
		}
	})

}); // End of Ready();