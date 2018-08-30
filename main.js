let watchTime = false

let $startButton = document.querySelector('#startClock')
let $changedDigit = document.querySelector('p')

let x;

function update() {
  let countUp = parseInt($changedDigit.textContent, 10)
  if (watchTime === true){
  countUp += 1
  $changedDigit.textContent = countUp
  }
}

function showNumber() {
  watchTime = !watchTime
  clearInterval(x)
  x = setInterval(update, 1000)
  if (watchTime === true) {
    $startButton.textContent = "Pause"
    $startButton.classList.toggle("buttonChange")
  } else {
    $startButton.textContent = "Resume"
    $startButton.classList.toggle("buttonChange")
  }
}

$startButton.addEventListener('click', showNumber)
