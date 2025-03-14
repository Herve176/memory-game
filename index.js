let btn = document.getElementById("btn");
let timeLeft = 9; // Initial time in seconds
const timerElement = document.getElementById("timer");
const shule_color = [
  "#ff0000",
  "#008000",
  "#5733ff",
  "#ffff00",
  "#ff0000",
  "#008000",
  "#5733ff",
  "#ffff00",
  "#ff0000",
  "#008000",
  "#5733ff",
  "#ffff00",
  "#ff0000",
  "#008000",
  "#5733ff",
  "#ffff00",
];
//first page alert to descripe the game
alert(
  "Welcome to the game .please memorise the position of yellow color and click on ok then play to start  the game"
);
//second page to play
const rai = shuffleArray(shule_color);
const shuffled = shuffleArray(rai);
function shuffleArray(array) {
  return array.sort(() => Math.random() - 0.5);
}
function resetColors() {
  for (let i = 0; i < 16; i++) {
    document.getElementById(i).style.backgroundColor = "#ffffff"; // Reset to white or any initial color
  }
}
btn.addEventListener("click", () => {
  shuffled.forEach((element) => {
    for (let i = 0; i < 16; i++) {
      document.getElementById(i).style.backgroundColor = shuffled[i];
    }
    // Start the countdown timer
    const countdown = setTimeout(() => {
      timeLeft--;
      timerElement.textContent = `Time left: ${timeLeft} seconds`;

      // When time is up, reset colors and stop the timer
      if (timeLeft === 0) {
        clearInterval(countdown);
        resetColors();
        timeLeft = 9; // Reset the timer for the next round
        timerElement.textContent = `Time left: ${timeLeft} seconds`;
      }
    }, 2005);
  });
  // Add click event listeners to grid cells to check for yellow color
  for (let i = 0; i < 16; i++) {
    document.getElementById(i).addEventListener("click", () => {
      if (shuffled[i] === "#ffff00") {
        alert("Correct! You found the yellow color!");
      } else {
        alert("Wrong! Try again.");
      }
    });
  }
});
