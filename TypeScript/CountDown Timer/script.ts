let countdownInterval: number | undefined;
let totalTimeInSeconds: number = 0;
let isRunning: boolean = false; // To track if the timer is running

// Function to start the countdown
function startCountdown(): void {
    // Get hours, minutes, and seconds from the input fields
    const hours: number = parseInt((document.getElementById('hours') as HTMLInputElement).value) || 0;
    const minutes: number = parseInt((document.getElementById('minutes') as HTMLInputElement).value) || 0;
    const seconds: number = parseInt((document.getElementById('seconds') as HTMLInputElement).value) || 0;

    // Calculate total time in seconds
    totalTimeInSeconds = (hours * 3600) + (minutes * 60) + seconds;

    // Clear any existing interval
    clearInterval(countdownInterval);

    // Start the countdown
    countdownInterval = window.setInterval(updateCountdown, 1000);
    isRunning = true; // Timer is now running
    (document.getElementById('startButton') as HTMLButtonElement).innerText = 'Stop'; // Change button text to Stop
}

// Function to update the countdown
function updateCountdown(): void {
    if (totalTimeInSeconds <= 0) {
        clearInterval(countdownInterval);
        alert("Time's up!");
        resetCountdown(); // Automatically reset after time's up
        return;
    }

    // Calculate hours, minutes, and seconds
    const hours: number = Math.floor(totalTimeInSeconds / 3600);
    const minutes: number = Math.floor((totalTimeInSeconds % 3600) / 60);
    const seconds: number = totalTimeInSeconds % 60;

    // Update the displayed time
    (document.getElementById('hours') as HTMLInputElement).value = String(hours).padStart(2, '0');
    (document.getElementById('minutes') as HTMLInputElement).value = String(minutes).padStart(2, '0');
    (document.getElementById('seconds') as HTMLInputElement).value = String(seconds).padStart(2, '0');

    // Decrease the total time by one second
    totalTimeInSeconds--;
}

// Function to reset the countdown
function resetCountdown(): void {
    clearInterval(countdownInterval); // Stop the countdown if it's running
    (document.getElementById('hours') as HTMLInputElement).value = '00';
    (document.getElementById('minutes') as HTMLInputElement).value = '00';
    (document.getElementById('seconds') as HTMLInputElement).value = '00';
    (document.getElementById('startButton') as HTMLButtonElement).innerText = 'Start'; // Change button text back to Start
    isRunning = false; // Timer is not running
}

// Attach event listeners to the buttons
(document.getElementById('startButton') as HTMLButtonElement).addEventListener('click', function(): void {
    if (isRunning) {
        clearInterval(countdownInterval); // Stop the countdown
        isRunning = false; // Timer is not running
        (document.getElementById('startButton') as HTMLButtonElement).innerText = 'Start'; // Change button text to Start
    } else {
        startCountdown(); // Start the countdown
    }
});

(document.getElementById('resetButton') as HTMLButtonElement).addEventListener('click', resetCountdown);
