let $startbutton = document.querySelector('button')
let $changeddigit = document.querySelector('p')

function update(){
  let countUp = parseInt($changeddigit.textContent, 10)
  countUp += 1
  $changeddigit.textContent = countUp
  console.log(countUp)
}

$startbutton.addEventListener('click', update)
