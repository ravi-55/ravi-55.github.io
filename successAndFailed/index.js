// Success
$("#success-btn").click(function(event){
	event.preventDefault();
	$(".success").addClass("active");
});

$("#success-close-btn").click(function(event){
	event.preventDefault();
	$(".success").removeClass("active");
});


// Failed
$("#failed-btn").click(function(event){
	event.preventDefault();
	$(".failed").addClass("active");
});

$("#failed-close-btn").click(function(event){
	event.preventDefault();
	$(".failed").removeClass("active");
});