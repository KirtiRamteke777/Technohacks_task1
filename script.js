
  let timerInterval;
  let time = 0;

  function startTimer() {
    clearInterval(timerInterval);
    timerInterval = setInterval(updateTimer, 1000);
  }

  function stopTimer() {
    clearInterval(timerInterval);
  }

  function resetTimer() {
    clearInterval(timerInterval);
    time = 0;
    updateTimerDisplay();
  }

  function updateTimer() {
    time++;
    updateTimerDisplay();
  }

  function updateTimerDisplay() {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;

    const formattedTime = `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;
    document.querySelector('.timer').textContent = formattedTime;
  }

  function padZero(num) {
    return num < 10 ? '0' + num : num;
  }

  window.onload = updateTimerDisplay();
