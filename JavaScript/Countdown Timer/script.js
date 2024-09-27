let countdownInterval;
let totalTimeInSeconds = 0;
let isRunning = false; // To track if the timer is running

function startCountdown() {
    // Get hours, minutes, and seconds from the input fields
    const hours = parseInt(document.getElementById('hours').value) || 0;
    const minutes = parseInt(document.getElementById('minutes').value) || 0;
    const seconds = parseInt(document.getElementById('seconds').value) || 0;

    // Calculate total time in seconds
    totalTimeInSeconds = (hours * 3600) + (minutes * 60) + seconds;

    // Clear any existing interval
    clearInterval(countdownInterval);

    // Start the countdown
    countdownInterval = setInterval(updateCountdown, 1000);
    isRunning = true; // Timer is now running
    document.getElementById('startButton').innerText = 'Stop'; // Change button text to Stop
}

function updateCountdown() {
    if (totalTimeInSeconds <= 0) {
        clearInterval(countdownInterval);
        alert("Time's up!");
        resetCountdown(); // Automatically reset after time's up
        return;
    }

    // Calculate hours, minutes, and seconds
    const hours = Math.floor(totalTimeInSeconds / 3600);
    const minutes = Math.floor((totalTimeInSeconds % 3600) / 60);
    const seconds = totalTimeInSeconds % 60;

    // Update the displayed time
    document.getElementById('hours').value = String(hours).padStart(2, '0');
    document.getElementById('minutes').value = String(minutes).padStart(2, '0');
    document.getElementById('seconds').value = String(seconds).padStart(2, '0');

    // Decrease the total time by one second
    totalTimeInSeconds--;
}

function resetCountdown() {
    clearInterval(countdownInterval); // Stop the countdown if it's running
    document.getElementById('hours').value = '00';
    document.getElementById('minutes').value = '00';
    document.getElementById('seconds').value = '00';
    document.getElementById('startButton').innerText = 'Start'; // Change button text back to Start
    isRunning = false; // Timer is not running
}

// Attach event listeners to the buttons
document.getElementById('startButton').addEventListener('click', function() {
    if (isRunning) {
        clearInterval(countdownInterval); // Stop the countdown
        isRunning = false; // Timer is not running
        document.getElementById('startButton').innerText = 'Start'; // Change button text to Start
    } else {
        startCountdown(); // Start the countdown
    }
});
document.getElementById('resetButton').addEventListener('click', resetCountdown);
