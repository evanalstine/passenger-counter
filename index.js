


let count = 0
let total = 0
let newTotal = 0
let incrementBtn = document.getElementById('increment-btn')
let saveBtn = document.getElementById('save-btn') 
let countEl = document.getElementById('count-el')
let saveEl = document.getElementById('save-el')
let totalEl = document.getElementById('total-el')

function increment() {
	count += 1
	countEl.textContent = count
}

function save() {	
	newTotal = count + total
	saveEl.textContent += " " + count + ","
	countEl.textContent = 0
	add()
	clear()
}

function add() {
	totalEl.textContent = newTotal
	total = newTotal
}

function clear() {
	count = 0
}

function reset() {
	count = 0
	total = 0
	countEl.textContent = 0
	totalEl.textContent = 0
	saveEl.textContent = "Previous entries: "
}



