const box = document.getElementById('box')
const anime = document.getElementById('anime')
const quoteText = document.getElementById('quote')
const character = document.getElementById('author')
const loader = document.getElementById('loader')

// Show Loading
function loading(){
	loader.hidden = false;
	box.hidden = true;
}

// Hide Loading
function complete(){
	if(!loader.hidden){
		box.hidden = false;
		loader.hidden = true;
	}
}


// Get Quote from API
async function getQuotes(){
	loading();
	const apiURL = 'https://animechan.vercel.app/api/random';
	try{
		const response = await fetch(apiURL);
		const data = await response.json();
		anime.innerText = data.anime;
		quoteText.innerText = data.quote;
		character.innerText = data.character;
		complete();
	}
	catch(error){
		getQuotes();
	}
}
getQuotes();

// Copy Quote
$('#copy').click(function(event){
	event.preventDefault();
	var $temp = $("<input>");
	$("body").append($temp);
	$temp.val($('#quote').text()).select();
	document.execCommand("copy");
	$temp.remove();
	$(this).text('Copied')
});

// Next Quote
$('#next').click(function(event){
	event.preventDefault();
	getQuotes();
	$('#copy').text('Copy')
});