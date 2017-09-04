	// 
	
	const getObject = function (element) {
		return typeof element == "object" ? element : document.getElementById(element);
	}
	
	// 
	
	const getObjectStyle = function (element) {
		return getObject(element).style;
	}

	// 
	
	const changeGameSettings = function (event) {
		if (event.target.name === "gameSpeedSelector") {
			PONG.gameSpeed = parseInt(event.target.value, 10);
		} else if (event.target.name === "gameDifficultySelector") {
			PONG.gameDifficulty = parseInt(event.target.value, 10);
		} else if (event.target.name === "gameLengthSelector") {
			PONG.gameLength = parseInt(event.target.value, 10);
		}
	}
	
	// declaration and initialization of main game object with his properties and methods
	
	const PONG = {
		gameSpeed : 1,
		gameDifficulty : 1,
		gameLength : 9
	};
	
	// declaration and initialization static variables representing DOM elements handlers
	
	const buttonNewGame = getObject("buttonGameStart"),
		buttonGameSettings = getObject("buttonGameSettings"),
		sectionGameSettings = getObject("sectionGameSettings"),
		inputsGameSettings = document.getElementsByTagName("input");
		
		console.log(buttonNewGame);
		console.log(buttonGameSettings);
		console.log(sectionGameSettings);
		console.log(inputsGameSettings);
		
	// event listeners for handling user clicks on two main buttons ("new game" and "game settings")

	buttonNewGame.addEventListener("click",  function () {
		
	}, false);
	
	buttonGameSettings.addEventListener("click",  function () {
		sectionGameSettings.classList.toggle("active");
		if (this.innerHTML === "display settings") {
			this.innerHTML = "hide settings";
		} else {
			this.innerHTML = "display settings";
		}
		buttonNewGame.classList.toggle("not-active");
	}, false);
	
	// event listeners for handling changes in game settings radio fields made by user
	
	for (let i = 0; i < inputsGameSettings.length; i++) {
		inputsGameSettings[i].addEventListener('click', changeGameSettings, false);
	}

