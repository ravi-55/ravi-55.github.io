checkTodos();

// check for data in localStorage
function checkTodos() {
  // todos in the key of my localStorage
  let dataInLocalStorage = localStorage.getItem("todos");
  // check if it is null or not
  if (dataInLocalStorage == null) {
    todos = [];
  } else {
    todos = JSON.parse(dataInLocalStorage);
  }
  let html = "";
  todos.forEach((todo, index) => {
    html += `<div class="alert alert-secondary alert-dismissible fade show m-1" role="alert">
							<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close" onclick='removeTodo(${index});'></button>
						<strong>${todo}</strong> </div>`;
  });
  $("#items").empty().append(html);
  $("#newTitle").focus();
}

// adding items in todos
$("#add").on("click", (e) => {

  if ($("input").val() !== "") { // if text field is not Empty

  	$("#newTitle").css('border-color', 'lightgray');
    todo = $("input").val(); // Value of the text field

    if(isExist(todo) === false){ // if list is not exist
	    let todosData = localStorage.getItem("todos");
	    if (todosData == null) {
	      todos = [];
	    } else {
	      todos = JSON.parse(todosData);
	    }
	    todos.push(todo);
	    localStorage.setItem("todos", JSON.stringify(todos));
	    $("input").val("");
	    checkTodos();
	   }
	   else{
	   	alert("List Already Exist...!!!");
	   }
  }
  else{
  	$("#newTitle").css('border-color', 'red');
  }
});

// logic for removing from the todos list
let removeTodo = (index) => {
  let todosData = localStorage.getItem("todos");
  todos = JSON.parse(todosData);
  todos.splice(index, 1);
  localStorage.setItem("todos", JSON.stringify(todos));
  checkTodos();
};

// Check if the list is exist or not
let isExist = (todo) =>{
	let todosData = JSON.parse(localStorage.getItem("todos"));
	result = false;
	for(let index of todosData){
		if(index === todo){
			result = true;
		}
	} // End of Loop
	return result;
}
