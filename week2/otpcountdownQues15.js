// OTP Countdown Simulator

// Displaying OTP Sent Message
console.log("OTP sent successfully");

// Setting Initial Countdown Time
let remainingSeconds = 10;

// Starting Countdown Timer
const intervalId = setInterval(() => {

    console.log(remainingSeconds--);

    // Checking Countdown Completion
    if (remainingSeconds === 0) {

        console.log("Resend OTP");

        // Stopping the Timer
        clearInterval(intervalId);
    }

}, 1000);