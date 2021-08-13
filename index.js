let projects = [
	{
		p_img : "./img/anime-quotes.png",
		p_title : "Anime Quotes",
		p_discription : "A quotation/quote is the repetition of a sentence, phrase, or passage from speech or text that someone has said or written.",
		view: "https://ravi-55.github.io/animeQuotes/index.html",
		p_in : "HTML, CSS, JS, QuoteAPI"
	},
	{
		p_img : "./img/music-player.png",
		p_title : "Music Player",
		p_discription : "As streaming is increasingly being adopted by users, online media players have become essential for consuming media on the internet.",
		view: "https://ravi-55.github.io/music-player/index.html",
		p_in : "HTML, CSS, JS"
	},
	{
		p_img : "./img/drag-and-drop.png",
		p_title : "Drag and Drop",
		p_discription : "Drag and drop is a very common feature. It is when you 'grab' an object and drag it to a different location.",
		view: "https://ravi-55.github.io/drag-and-drop/index.html",
		p_in : "HTML, CSS, JS, L-Storage"
	},
	{
		p_img : "./img/to-do-list.png",
		p_title : "TODO List",
		p_discription : "TODO List are the lists that we generally use to maintain our day to day tasks or list of everything that we have to do. It is helpful in planning our daily schedules.",
		view: "https://ravi-55.github.io/ToDoList/index.html",
		p_in : "HTML, CSS, JS, L-Storage"
	},
	{
		p_img : "./img/calculator.png",
		p_title : "Calculator",
		p_discription : "An calculator is typically a portable electronic device used to perform calculations, ranging from basic arithmetic to complex mathematics.",
		view: "https://ravi-55.github.io/calculator/index.html",
		p_in : "HTML, CSS, JS"
	},
	{
		p_img : "./img/keep-notes.png",
		p_title : "Keep Notes",
		p_discription : "When you note something, or when you note it down, you write it down so that you have a record of it. You can also say that a piece of writing notes something when it is recorded there.",
		view: "https://ravi-55.github.io/keepNotes/index.html",
		p_in : "HTML, CSS, JS, L-Storage"
	},
	{
		p_img : "./img/background-video.png",
		p_title : "Background Video",
		p_discription : "Video background is a modern web design pattern that makes an HTML5 video act as an animated, interactive, attractive background of your hero header of the whole webpage.",
		view: "https://ravi-55.github.io/bg-video/index.html",
		p_in : "HTML, CSS, JS"
	},
	{
		p_img : "./img/scroll-project.png",
		p_title : "Scroll Page",
		p_discription : "A simple one page layout with smooth scrolling to an anchor on the same page. It has some logic built in to identify those jump links, and not target other links.",
		view: "https://ravi-55.github.io/scroll-page/index.html",
		p_in : "HTML, CSS, JS"
	},
	{
		p_img : "./img/parallax.png",
		p_title : "Parallax",
		p_discription : "Parallax scrolling is a special scrolling technique used in web design where background images throughout a web page move slower than foreground images, creating an illusion of depth on a two-dimensional site.",
		view: "https://ravi-55.github.io/parallax/index.html",
		p_in : "HTML, CSS, JS"
	},
	{
		p_img : "./img/tic-tak-toe.png",
		p_title : "Tic-Tac-Toe",
		p_discription : "Tic-tac-toe, noughts and crosses, or Xs and Os/“X’y O’sies”, is a paper-and-pencil game for two players, X and O, who take turns marking the spaces in a 3×3 grid. The player who succeeds in placing three of their marks in a diagonal, horizontal, or vertical row is the winner.",
		view: "https://ravi-55.github.io/tic-tac-toe/index.html",
		p_in : "HTML, CSS, JS"
	},
	{
		p_img : "./img/rock-paper-scissors.png",
		p_title : "Rock-Paper-Scissors",
		p_discription : "Rock paper scissors is a hand game usually played between two people, in which each player simultaneously forms one of three shapes with an outstretched hand. These shapes are 'rock', 'paper', and 'scissors'.",
		view: "https://ravi-55.github.io/rock-paper-scissors/index.html",
		p_in : "HTML, CSS, JS"
	},
	{
		p_img : "./img/paint.png",
		p_title : "Paint",
		p_discription : "Build a basic paint/ sketch application using HTML, CSS and JavaScript. Here, I have used p5.js library to create the canvas of paint app. I have used some useful features of p5.js to build this amazing sketch app.",
		view: "https://ravi-55.github.io/paint/index.html",
		p_in : "HTML, CSS, JS, p5.js"
	},
	{
		p_img : "./img/codeEditor.png",
		p_title : "Code Editor",
		p_discription : "The code editor is a text edit area that allows developers to write, edit and save a document of code. It has features that assist with the writing and editing of code. These include: Auto-completion or code completion.",
		view: "https://ravi-55.github.io/codeEditor/index.html",
		p_in : "HTML, CSS, JS"
	},
	{
		p_img : "./img/tab.png",
		p_title : "Horizontal Tab",
		p_discription : "Design tabs using HTML, CSS and JavaScript. Tab layout is divided into three elements i.e. tab header, active tab indicator, and tab body. The tabs are designed using flexbox.",
		view: "https://ravi-55.github.io/htab/index.html",
		p_in : "HTML, CSS, JS"
	},
	{
		p_img : "./img/vtab.png",
		p_title : "Vertical Tab",
		p_discription : "Design tabs using HTML, CSS and JavaScript. Tab layout is divided into three elements i.e. tab header, active tab indicator, and tab body. The tabs are designed using flexbox.",
		view: "https://ravi-55.github.io/vtab/index.html",
		p_in : "HTML, CSS, JS"
	},
	{
		p_img : "./img/sf.png",
		p_title : "Success & Failed Box",
		p_discription : "Popup boxes / Modal are useful way of showing an important information to the website visitors. How to create an animated popup box with zoom in effect and close button using HTML, CSS and JavaScript.",
		view: "https://ravi-55.github.io/successAndFailed/index.html",
		p_in : "HTML, CSS, JS"
	},
	{
		p_img : "./img/popup.png",
		p_title : "Popup Box",
		p_discription : "Popup boxes / Modal are useful way of showing an important information to the website visitors. In this post you will see an animated popup box with close button using HTML and CSS only. Here we have used special CSS selectors ':target' to create toggle behaviour.",
		view: "https://ravi-55.github.io/popupBox/index.html",
		p_in : "HTML, CSS"
	}
]

// *** Length of Projects *** 
let p_size = Object.keys(projects).length;


// *** Pagination Rules *** 
let item_shows = 9;
let round = Math.round(p_size / item_shows);
let unround = p_size / item_shows;
let pages;
if(round < unround)
	pages = round + 1;
else
	pages = round;


// *** Generate Pagination *** 
if(pages == 1)
	$("#pagination").hide();
else{
	$("#pagination").show();
	let paginate = `<ul class="pagination">`;
	let temp = item_shows;
	for(let i = 1; i <= pages; i++){
		if(i == 1)
			paginate += `<li><a href="#main" id="${temp}" class="active">${i}</a></li>`;
		else
			paginate += `<li><a href="#main" id="${temp}">${i}</a></li>`;
		temp = temp + item_shows;
	}
	paginate += `</ul>`;
	$("#pagination").append(paginate);
}

// *** Show 1st Page Cards ***
for(let i = 0; i < item_shows; i++){
	let card = `<div class="col">
			<div class="card shadow-lg">
				<a href="${projects[i].view}"><img src="${projects[i].p_img}" class="card-img-top"></a>

				<div class="card-body">
					<h5 class="card-title">${projects[i].p_title}</h5>
					<p class="card-text">${projects[i].p_discription}</p>
					<div class="d-flex justify-content-between align-items-center">
					    <a target="blank" href="${projects[i].view}" class="btn btn-sm btn-outline-primary">View</a>
					  <small class="text-muted">${projects[i].p_in}</small>
					</div>
				</div>
			</div>
		</div>`;
	$("div.container .row").append(card);
}


// *** Pagination *** 
$("ul.pagination li a").click(function(){
	let id = $(this).attr("id");
	for(let i = 1; i <= pages; i++){
		$("ul.pagination li a").removeClass("active")
	}
	$(this).addClass("active");
	load_cards(id);
})


// *** Load Cards *** 
function load_cards(id){
	$("div.container .row").html(""); // Clear Cards
	let loop = id - item_shows;
	for(let i = loop; i < id; i++){

		if(i >= p_size)
			console.log(i)
		else{
			let card = `<div class="col">
		            	<div class="card shadow-lg">
		              	<a href="${projects[i].view}"><img src="${projects[i].p_img}" class="card-img-top"></a>

		              <div class="card-body">
		                <h5 class="card-title">${projects[i].p_title}</h5>
		                <p class="card-text">${projects[i].p_discription}</p>
		                <div class="d-flex justify-content-between align-items-center">
		                    <a target="blank" href="${projects[i].view}" class="btn btn-sm btn-outline-primary">View</a>
		                  <small class="text-muted">${projects[i].p_in}</small>
		                </div>
		              </div>
		            </div>
		          </div>`;
			$("div.container .row").append(card);
		} // End of else
	} // End of Loop
} // End of Load_card()