
// Function to update the current time in milliseconds
function updateUTCTime() {
    //  Get current time in milliseconds 
    const currentTimeMs = Date.now();

    //  Select the target html element 
    const timeElement = document.querySelector('[data-testid="test-user-time"]');

    //  Update the element's content
    if (timeElement) {
        timeElement.textContent = "Time in Miliseconds: " + currentTimeMs;
    }
}

// function call
updateUTCTime();

// update every 100 milliseconds)
setInterval(updateUTCTime, 100);