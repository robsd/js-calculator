display = document.getElementById('display');

function clearDisplay() {
	display.value = 0;
}

function undoDisplay() {
	if (display.value.length == 1) {
		clearDisplay();
	}
	else {
		display.value = display.value.slice(0, -1);
	}
}

function addToDisplay(character) {
	if (display.value == 0) {
		display.value = character;
	}
	else {
		display.value += character;
	}
}

function calculateDisplay() {
	display.value = eval(display.value);
}