let $startbutton = document.querySelector('button')
let $changeddigit = document.querySelector('p')

function update() {
  let countUp = parseInt($changeddigit.textContent, 10)
  countUp += 1
  $changeddigit.textContent = countUp
}

function showNumber() {
  setInterval(update, 1000)
}

$startbutton.addEventListener('click', showNumber)
