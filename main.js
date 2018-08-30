let $startButton = document.querySelector('#startClock')
let $changedDigit = document.querySelector('p')
let $showReset = document.querySelector('.resetClock')
let $timeInput = document.querySelector('#timeInput')

let watchTime = false
let intervalID;

function update() {
  let countUp = parseInt($changedDigit.textContent, 10)
  let timeLimit = parseInt($timeInput.value, 10)
  if (watchTime === true && timeLimit !== countUp){
  countUp += 1
  $changedDigit.textContent = countUp
  }
}

function showNumber() {
  watchTime = !watchTime
  clearInterval(intervalID)
  intervalID = setInterval(update, 1000)
  if (watchTime === true) {
    $startButton.textContent = "Pause"
    $startButton.classList.toggle("buttonChange")
    $showReset.classList.add("showButton")
  } else {
    $startButton.textContent = "Resume"
    $startButton.classList.toggle("buttonChange")
  }
}

function resetNumber(){
  watchTime = false
  $changedDigit.textContent = 0
  $startButton.textContent = "Start"
  $showReset.classList.toggle("showButton")
  clearInterval(IntervalID)
}

$startButton.addEventListener('click', showNumber)
$showReset.addEventListener('click', resetNumber)
