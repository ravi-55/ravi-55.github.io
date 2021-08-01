$("#error").hide()

check()
// Load New and Old ones
function check(){
	let noteTitles = localStorage.getItem("titles");
	let noteDatas = localStorage.getItem("notes");
  if (noteTitles == null || noteDatas == null) {
    notes = [];
    titles = [];
  } else {
    titles = JSON.parse(noteTitles);
    notes = JSON.parse(noteDatas);
  }

  let div = '';
	let j = 3;
  for(var i = 0; i < titles.length; i++ ){
  if(i % 3 === 0 || i == 0 ) {
  	div +=  "<div class='row'>";
  } // End of If

  div +=  `<div class="col-md-4 mt-2">
							<div class="card">
							  <div class="card-body">
							  	<div class="mb-1">
							  		<input type="text" value="${titles[i]}" class="cardTitle" id="${i}" />
							  		<span class="cardBtn">
							  			<i class="far fa-trash-alt" onclick="remove(${i})"></i>
							  		</span>
							  	</div>
							    <textarea class="textarea update" id=${i}>${notes[i]}</textarea>
							  </div>
							</div>
						</div>`;
    
  if( j == i || i === 2 || (titles.length-1) === i ){
    j += 3
    div +=  "</div>";  
  } // End of If
} // End of For-Loop

$('#appendRow').html(div);
} // End of Check()

// Add
$("#save").click(function(event){
	event.preventDefault();

	const title = $("#title").val();
	const note = $("#note").val();

	if(!title || !note){
		$("#error").show()
	}
	else{
		$("#error").hide()
		let notesData = localStorage.getItem("notes");
		let titlesData = localStorage.getItem("titles");
    if (notesData == null && titlesData == null) {
      notes = [];
      titles = [];
    } else {
      notes = JSON.parse(notesData);
      titles = JSON.parse(titlesData);
    }
    notes.push(note);
    titles.push(title);
    localStorage.setItem("notes", JSON.stringify(notes));
    localStorage.setItem("titles", JSON.stringify(titles));
    $("#note").val("");
    $("#title").val("");
    check();
	}
})

// Remove
function remove(id){
	let noteTitles = localStorage.getItem("titles");
	let notedatas = localStorage.getItem("notes");
  titles = JSON.parse(noteTitles);
  notes = JSON.parse(notedatas);
  titles.splice(id, 1);
  notes.splice(id, 1);
  localStorage.setItem("titles", JSON.stringify(titles));
  localStorage.setItem("notes", JSON.stringify(notes));
  check();
}

// update Title
$(document).on("blur", ".cardTitle", function(){
	let value = $(this).val()
	let id = $(this).attr("id");
	let noteTitles = localStorage.getItem("titles");
	titles = JSON.parse(noteTitles);
	titles[id] = value;
	localStorage.setItem("titles", JSON.stringify(titles));
});

// update Note
$(document).on("blur", ".update", function(){
	let value = $(this).val()
	let id = $(this).attr("id");
	let notedatas = localStorage.getItem("notes");
	notes = JSON.parse(notedatas);
	notes[id] = value;
	localStorage.setItem("notes", JSON.stringify(notes));
});
