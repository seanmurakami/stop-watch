let $startbutton = document.querySelector('button')
let $changeddigit = document.querySelector('p')

let x = function update() {
  let countUp = parseInt($changeddigit.textContent, 10)
  countUp += 1
  $changeddigit.textContent = countUp
}

function showNumber() {
  setInterval(x, 1000)
}

$startbutton.addEventListener('click', showNumber)
