let countdownInterval;

document.getElementById('start').addEventListener('click', function () {
    const seconds = parseInt(document.getElementById('seconds').value);
    if (isNaN(seconds) || seconds <= 0) {
        alert('Please enter a valid number of seconds.');
        return;
    }

    clearInterval(countdownInterval); // Clear any existing interval

    let remainingTime = seconds;
    updateCountdownDisplay(remainingTime);

    countdownInterval = setInterval(() => {
        remainingTime--;
        updateCountdownDisplay(remainingTime);

        if (remainingTime <= 0) {
            clearInterval(countdownInterval);
            alert("Time's up!");
        }
    }, 1000);
});

document.getElementById('reset').addEventListener('click', function () {
    clearInterval(countdownInterval);
    document.getElementById('countdown').textContent = '00:00';
    document.getElementById('seconds').value = '';
});

function updateCountdownDisplay(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    document.getElementById('countdown').textContent =
        `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
}
