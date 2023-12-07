function checkEmail() {
    let input = document.getElementById('gmail_input');
    let resultSpan = document.getElementById('gmail_result');
    let regex = /@gmail\.com$/;
  
    if (regex.test(input.value)) {
      resultSpan.textContent = 'Email введен правильно';
    } else {
      resultSpan.textContent = 'Email введен неправильно';
    }
  }

  function moveElement() {
    const childBlock = document.getElementById('animatedBlock');
    const parentBlock = document.querySelector('.parent_block');
    const parentWidth = parentBlock.offsetWidth;
    const parentHeight = parentBlock.offsetHeight;
    const childWidth = childBlock.offsetWidth;
    const childHeight = childBlock.offsetHeight;

    let top = (parentHeight - childHeight) / 9; // начальное положение top для центрирования блока
    let left = (parentWidth - childWidth) / 5; // начальное положение left для центрирования блока

    const moveInterval = setInterval(() => {
        if (left + childWidth < parentWidth) {
            left += 5;
        } else if (top + childHeight < parentHeight) {
            top += 5;
        } else {
            clearInterval(moveInterval); // остановка движения блока
        }

        childBlock.style.top = top + 'px';
        childBlock.style.left = left + 'px';
    }, 30);
}

moveElement();

let timerInterval;
let timerRunning = false;
let milliseconds = 0;
let seconds = 0;
let minutes = 0;

function startTimer() {
  if (!timerRunning) {
    timerInterval = setInterval(incrementTimer, 10);
    timerRunning = true;
  }
}

function stopTimer() {
  clearInterval(timerInterval);
  timerRunning = false;
}

function resetTimer() {
  clearInterval(timerInterval);
  timerRunning = false;
  milliseconds = 0;
  seconds = 0;
  minutes = 0;
  document.getElementById('minutesS').innerText = formatTime(minutes);
  document.getElementById('secondsS').innerText = formatTime(seconds);
  document.getElementById('ml-secondsS').innerText = formatTime(milliseconds);
}

function incrementTimer() {
  milliseconds++;
  if (milliseconds >= 100) {
    milliseconds = 0;
    seconds++;
    if (seconds >= 60) {
      seconds = 0;
      minutes++;
      document.getElementById('minutesS').innerText = formatTime(minutes);
    }
    document.getElementById('secondsS').innerText = formatTime(seconds);
  }
  document.getElementById('ml-secondsS').innerText = formatTime(milliseconds);
}

function formatTime(time) {
  return time < 10 ? '0' + time : time;
}

document.getElementById('start').addEventListener('click', startTimer);
document.getElementById('stop').addEventListener('click', stopTimer);
document.getElementById('reset').addEventListener('click', resetTimer);
