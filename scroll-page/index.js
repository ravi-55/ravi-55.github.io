$(document).ready(function(){

	// Add and Remove Active Class From NavBar
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
	    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
	  }); // End of Scroll()
	}); // End of function()

}); // End of Ready();