var countdownInterval;
var totalTimeInSeconds = 0;
var isRunning = false; // To track if the timer is running
// Function to start the countdown
function startCountdown() {
    // Get hours, minutes, and seconds from the input fields
    var hours = parseInt(document.getElementById('hours').value) || 0;
    var minutes = parseInt(document.getElementById('minutes').value) || 0;
    var seconds = parseInt(document.getElementById('seconds').value) || 0;
    // Calculate total time in seconds
    totalTimeInSeconds = (hours * 3600) + (minutes * 60) + seconds;
    // Clear any existing interval
    clearInterval(countdownInterval);
    // Start the countdown
    countdownInterval = window.setInterval(updateCountdown, 1000);
    isRunning = true; // Timer is now running
    document.getElementById('startButton').innerText = 'Stop'; // Change button text to Stop
}
// Function to update the countdown
function updateCountdown() {
    if (totalTimeInSeconds <= 0) {
        clearInterval(countdownInterval);
        alert("Time's up!");
        resetCountdown(); // Automatically reset after time's up
        return;
    }
    // Calculate hours, minutes, and seconds
    var hours = Math.floor(totalTimeInSeconds / 3600);
    var minutes = Math.floor((totalTimeInSeconds % 3600) / 60);
    var seconds = totalTimeInSeconds % 60;
    // Update the displayed time
    document.getElementById('hours').value = String(hours).padStart(2, '0');
    document.getElementById('minutes').value = String(minutes).padStart(2, '0');
    document.getElementById('seconds').value = String(seconds).padStart(2, '0');
    // Decrease the total time by one second
    totalTimeInSeconds--;
}
// Function to reset the countdown
function resetCountdown() {
    clearInterval(countdownInterval); // Stop the countdown if it's running
    document.getElementById('hours').value = '00';
    document.getElementById('minutes').value = '00';
    document.getElementById('seconds').value = '00';
    document.getElementById('startButton').innerText = 'Start'; // Change button text back to Start
    isRunning = false; // Timer is not running
}
// Attach event listeners to the buttons
document.getElementById('startButton').addEventListener('click', function () {
    if (isRunning) {
        clearInterval(countdownInterval); // Stop the countdown
        isRunning = false; // Timer is not running
        document.getElementById('startButton').innerText = 'Start'; // Change button text to Start
    }
    else {
        startCountdown(); // Start the countdown
    }
});
document.getElementById('resetButton').addEventListener('click', resetCountdown);
