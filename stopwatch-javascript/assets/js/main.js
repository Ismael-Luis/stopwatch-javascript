function stopwatch() {

const timer = document.querySelector('.input-timer');
const btnStart = document.querySelector('.btn-start');
const btnPause = document.querySelector('.btn-pause');
const btnReset = document.querySelector('.btn-reset');

let seconds = 0
let time;

function getTimeFromSeconds(seconds) {
  const timer = new Date(seconds * 1000);
  return timer.toLocaleTimeString('pt-BR', {
    hour12: false,
    timeZone: 'UTC',
  });
}

function startTime() {
  time = setInterval(function() {
    seconds++
    localStorage.setItem('tim', seconds)
    timer.innerText = getTimeFromSeconds(seconds)
  }, 1000)
}

document.addEventListener('click', function(e) {
  const el = e.target
  
  if(el.classList.contains('btn-reset')) {
    clearInterval(time)
    seconds = 0
    timer.innerText = getTimeFromSeconds(seconds)
    timer.classList.remove('paused')
  }

  if(el.classList.contains('btn-pause')) {
    clearInterval(time)
    timer.classList.add('paused')
  }

  if(el.classList.contains('btn-start')) {
    clearInterval(time)
    startTime()
    timer.classList.remove('paused')
  }
})

function saveTime() {
  const saved = localStorage.getItem('tim')
  
  seconds = saved ? Number(saved) : 0;
  timer.innerText = getTimeFromSeconds(seconds)
  timer.classList.add('paused')
}
saveTime()
}
stopwatch()