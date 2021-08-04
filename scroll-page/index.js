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

	// Hide Collapse NavBar
	$('.navbar-nav>li>a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
	});

	// Change NavBar While Scrolling
	$(function(){
		$(document).scroll(function(){
			if($(window).width() <= 976)
				$(window).resize();
			else{
		    let $nav = $(".navbar");
		    $nav.toggleClass('bg-primary', $(this).scrollTop() > $nav.height());
	    }
  	}); // End of Scroll()
	}); // End of function()

	$(window).resize(function(){
    let Wsize = $(window).width();
    let Hsize = $(this).scrollTop();
		if(Wsize <= 976 || Hsize > $(".navbar").height())
			$(".navbar").addClass("bg-primary")
		else
			$(".navbar").removeClass("bg-primary")
  });
	$(window).resize();

}); // End of Ready();