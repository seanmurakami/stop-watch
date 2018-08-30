let $startButton = document.querySelector('button')
let $changedDigit = document.querySelector('p')

function update() {
  let countUp = parseInt($changedDigit.textContent, 10)
  countUp += 1
  $changedDigit.textContent = countUp
}

function showNumber() {
  setInterval(update, 1000)
}

$startButton.addEventListener('click', showNumber)
