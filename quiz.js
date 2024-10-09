// Function to check the user's answer
function checkAnswer() {
    // Declare a variable for the correct answer
    const correctAnswer = "4"; // Correct answer for the quiz question

    // Retrieve the user's answer from the selected radio button
    const userAnswer = document.querySelector('input[name="quiz"]:checked').value; // Get the value of the checked radio button

    // Compare the user's answer with the correct answer
    if (userAnswer === correctAnswer) {
        // If the answer is correct
        document.getElementById('feedback').textContent = "Correct! Well done."; // Update feedback text
    } else {
        // If the answer is incorrect
        document.getElementById('feedback').textContent = "That's incorrect. Try again!"; // Update feedback text
    }
}

// Add an event listener to the Submit Answer button
document.getElementById('submit-answer').addEventListener('click', checkAnswer);
