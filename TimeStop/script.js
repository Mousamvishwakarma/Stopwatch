
    let timerDisplay = document.querySelector('.timerdisplay');
    let startBtn = document.getElementById('startbtn');
    let stopBtn = document.getElementById('stopbtn');
    let resetBtn = document.getElementById('resetbtn');

    let seconds = 0;
    let minutes = 0;
    let hours = 0;
    let interval = null;
    let isRunning = false;
    function updateDisplay() {
        timerDisplay.textContent = `${pad(hours)} : ${pad(minutes)} : ${pad(seconds)}`;
    }
    function pad(num) {
        return num < 10 ? "0" + num : num;
    }
    function startTimer() {
        if (!isRunning) {
            isRunning = true;
            interval = setInterval(() => {
                seconds++;
                if (seconds === 60) {
                    seconds = 0;
                    minutes++;
                }
                if (minutes === 60) {
                    minutes = 0;
                    hours++;
                }
                updateDisplay();
            }, 1000);
        }
    }
    function stopTimer() {
        clearInterval(interval);
        isRunning = false;
    }
    function resetTimer() {
        clearInterval(interval);
        isRunning = false;
        seconds = 0;
        minutes = 0;
        hours = 0;
        updateDisplay();
    }
    startBtn.addEventListener('click', startTimer);
    stopBtn.addEventListener('click', stopTimer);
    resetBtn.addEventListener('click', resetTimer);

