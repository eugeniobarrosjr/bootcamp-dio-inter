const currentNumberElement = document.getElementById('currentNumber');
const incrementBtn = document.querySelector('button[name = "addition"]')
const decrementBtn = document.querySelector('button[name = "subtraction"]')

let currentNumber = 0

const MAX_NUMBER = 10
const MIN_NUMBER = 0

incrementBtn.addEventListener('click', increment)
decrementBtn.addEventListener('click', decrement)

function increment() {
    if(currentNumber >= MAX_NUMBER) return;
    currentNumber++
    currentNumberElement.innerHTML = String(currentNumber);
}

function decrement() {
    if(currentNumber <= MIN_NUMBER) return;
    currentNumber--
    currentNumberElement.innerHTML = String(currentNumber);
}
