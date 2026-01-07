# 🔢 Guess My Number

A retro-style logic game built with Vanilla JavaScript. The goal is to guess the secret number between 1 and 20, but be careful—you only have **5 tries**!

## 📸 Preview
<img width="1918" height="870" alt="image" src="https://github.com/user-attachments/assets/859f839e-ff1e-4f97-ad9b-8bab21e647b9" />

## 🚀 Live Demo
[View Live Demo](https://omar14352465.github.io/Javascript-Project/)

## 🎮 How to Play
1.  Enter a number between **1 and 20** in the input box.
2.  Click the **Check!** button.
3.  Read the feedback message:
    * 📉 **"Lower"**: Your guess is too high.
    * 📈 **"Higher"**: Your guess is too low.
    * ⛔ **"No Number/Invalid"**: You entered a number outside the 1-20 range.
4.  **Watch your Tries!** You start with **5 attempts**. If they reach 0, you lose the round.
5.  If you guess correctly, the background turns green and your **Highscore** (total wins) increases.
6.  Click **Again!** to reset the game and play another round.

## 🌟 Key Features
- **Tries Counter**: A custom logic implementation that limits the user to 5 attempts per round.
- **Dynamic Feedback**: Real-time updates to the DOM based on user input (Too High / Too Low).
- **Win State**: Visual changes (Green background, widened number box) when the correct number is guessed.
- **Highscore Tracking**: Accumulates your total number of wins during the session.
- **Input Validation**: Prevents the user from guessing numbers outside the 1-20 range.

## 🛠️ Built With
- **HTML5**: Application structure.
- **CSS3**: Styling and visual effects.
- **JavaScript (ES6+)**: Game logic, DOM manipulation, and state management.

## 🧠 What I Learned
- **DOM Manipulation**: Proficiently used `document.querySelector()` to select HTML elements and update their text content (`.textContent`) and input values (`.value`).
- **Event Handling**: Attached `click` event listeners to buttons to trigger game logic and reset functionality.
- **Game Logic & Algorithms**: Implemented logic to compare user input against a randomly generated number (`Math.random()`), utilizing `if/else` statements to handle different scenarios (Win, Too High, Too Low).
- **State Management**: Created variables (`tries`, `highscore`, `gameWon`) to track the application's state independent of the DOM, ensuring the game "remembers" data (like remaining lives) between clicks.
- **CSS Manipulation via JavaScript**: Dynamically changed styles (background color and element width) directly within the JavaScript code using the `.style` property to provide visual feedback upon winning.
- **Input Validation**: Added logic to check if the user's input falls within the specific range (1-20) before processing the guess.
