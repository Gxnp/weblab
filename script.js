const my_input = document.getElementById("my_input")
let current_value = 1

function calc(x) {
	current_value += Number(x) // Calculate Variable `current_value`
	my_input.value = current_value // Set my_input Value to `current_value`
}