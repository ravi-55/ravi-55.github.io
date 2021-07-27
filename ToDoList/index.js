$(document).ready(function(){

	$('#add').click(function(){
		if ($('#newTitle').val().length != 0){
			var oldData = $('#items').html();
			var newData =`<div class="alert alert-secondary alert-dismissible fade show m-1" role="alert">
								<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
							` + $('#newTitle').val() + `</div>`;
			$('#items').html(newData + oldData);
			$('#newTitle').val("");
		} 
		else 
			alert("Enter some Text!");
	}); // End of Click Function
	
	// When Task is clicked
	$(document).on('click', '.alert', function() {
		if ($(this).css('text-decoration-line') == "none"){
			$(this).css('text-decoration-line', 'line-through');
			$(this).css('text-decoration-color', 'red');
		}
		else
			$(this).css('text-decoration-line', 'none');
	});

}); // End of Ready Function