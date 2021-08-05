$(document).ready(function(){
	let yourScore = 0;
	let CPUScore = 0;
	let ties = 0;
	let round = 1
	$("#round").html(round)
	let icons = ["fa-hand-rock", "fa-hand-paper", "fa-hand-scissors"];
	
	// Rock Button
	$("#rockBtn").click(function(event){
		event.preventDefault();
		let icon = icons[0];
		let random = Math.floor(Math.random() * icons.length);
		let CPUIcon = icons[random];
		appendIcons("yourChoice", icon);
		appendIcons("CPUChoice", CPUIcon);
		result(0, random);
	}); // End of RockBtn()

	// Paper Button
	$("#paperBtn").click(function(event){
		event.preventDefault();
		let icon = icons[1];
		let random = Math.floor(Math.random() * icons.length);
		let CPUIcon = icons[random];
		appendIcons("yourChoice", icon)
		appendIcons("CPUChoice", CPUIcon)
		result(1, random);
	}); // End of PaperBtn()

	// Scissors Button
	$("#scissorsBtn").click(function(event){
		event.preventDefault();
		let icon = icons[2];
		let random = Math.floor(Math.random() * icons.length);
		let CPUIcon = icons[random];
		appendIcons("yourChoice", icon)
		appendIcons("CPUChoice", CPUIcon)
		result(2, random);
	}); // End of ScissorsBtn()

	// Append Icons
	function appendIcons(player, icon){
		let op = `<button class="appendIcon">
								<i class="fas ${icon} fa-4x"></i>
							</button>`;
		$(`#${player}`).html(op);
	}

	// Checking Winning Conditions 
	function check(you, CPU){
		if((you == 2 && CPU == 0) || (you == 0 && CPU == 2))
			return 0
		else if((you == 0 && CPU == 1) || (you == 1 && CPU == 0))
			return 1
		else if((you == 1 && CPU == 2) || (you == 2 && CPU == 1))
			return 2
		else
			return "Draw"
	}

	// Result
	function result(you, CPU){
		let res;
		if(you == check(you, CPU)){ // If You Won
			yourScore = yourScore + 1;
			$("#you").html(yourScore);
			$("#result").removeClass("CPUWin");
			$("#result").removeClass("draw");
			$("#result").addClass("youWin");
			$("#result").html("Win");
		}
		else if(CPU == check(you, CPU)){ // If CPU Won
			CPUScore = CPUScore + 1;
			$("#CPU").html(CPUScore);
			$("#result").removeClass("youWin");
			$("#result").removeClass("draw");
			$("#result").addClass("CPUWin");
			$("#result").html("Lose");
		}
		else{ // If It's Draw.
			ties = ties + 1;
			$("#ties").html(ties);
			$("#result").removeClass("youWin");
			$("#result").removeClass("CPUWin");
			$("#result").addClass("draw");
			$("#result").html("Draw");
		}
		round = round + 1;
		$("#round").html(round);
	}

	// Reset Btn
	$("#reset").click(function(event){
		yourScore = 0;
		CPUScore = 0;
		ties = 0;
		round = 1;
		$("#result").removeClass("youWin");
		$("#result").removeClass("CPUWin");
		$("#result").removeClass("draw");
		$("#result").html("Good Luck");
		$("#yourChoice").html("");
		$("#CPUChoice").html("");
		$("#you").html(yourScore);
		$("#CPU").html(CPUScore);
		$("#ties").html(ties);
		$("#round").html(round);
	})

	
}); // End of Ready();