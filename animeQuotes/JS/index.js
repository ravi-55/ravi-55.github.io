let count = 0;

// default Quote
$('#quote').html(quotes[count].quote);
$('#author').html(quotes[count].author);

// Next Quote
$('#next').click(function(){
	count ++;
	load(count);
	if (count > 0) 
		disable('previous', false);
	if (count == quotes.length-1)
		disable('next', true)
});

// Previous Quote
$('#previous').click(function(){
	count --;
	load(count)
	if(count == 0)
		disable('previous', true)
	disable('next', false)
});

// Load Quotes
function load(index){
	$('#quote').html(quotes[index].quote);
	$('#author').html(quotes[index].author);
}

// Disable or Anable the Buttons
function disable(element, value){
	$('#' + element).prop('disabled', value);
}