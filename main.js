let $startButton = document.querySelector('#startClock')
let $changedDigit = document.querySelector('p')
let $showReset = document.querySelector('.resetClock')
let $timeInput = document.querySelector('#timeInput')
let $lapCount = document.querySelector('.lapCount')
let $lapCountNumber = document.querySelector('section')


let watchTime = false
let intervalID;

function update() {
  let countUp = parseInt($changedDigit.textContent, 10)
  let timeLimit = parseInt($timeInput.value, 10)
  if (watchTime === true && timeLimit !== countUp){
  countUp += 1
  $changedDigit.textContent = countUp
  }
  else if (timeLimit === countUp){
    clearInterval(intervalID)
    $startButton.textContent = "You're out of time buddy"
    $changedDigit.classList.add("addRed")
  }
}

function showNumber() {
  watchTime = !watchTime
  $changedDigit.classList.remove("addRed")
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
  $changedDigit.classList.remove("addRed")
  $startButton.textContent = "Start"
  $showReset.classList.toggle("showButton")
  $lapCountNumber.textContent = 0
  clearInterval(IntervalID)
}

$startButton.addEventListener('click', showNumber)
$showReset.addEventListener('click', resetNumber)
$lapCount.addEventListener('click', function(){
  let x = parseInt($lapCountNumber.textContent,10)
  x += 1
  $lapCountNumber.textContent = x
  $lapCountNumber.classList.add('lapButtonClicked')
})
