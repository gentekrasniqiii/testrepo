
// traffic lights
const redButton = document.querySelector(".red");
const yellowButton = document.querySelector(".yellow");
const greenButton = document.querySelector(".green");
// audio 
const clickSound = document.querySelector(".click_sound");
// alert message
const alertContainer = document.querySelector(".alert_holder");

let lastClickedButton;

// created the handleButtonClick arrow function to make code more modular
const handleButtonClick = (button, color, alert_message, alert_class_color) => {
  if (lastClickedButton) {
    lastClickedButton.style.backgroundColor = "";
  }

  clickSound.play();
  button.style.backgroundColor = color;

  alertContainer.innerHTML = `
    <div class="alert ${alert_class_color} text-center" role="alert">
      ${alert_message}
    </div>
  `;
  lastClickedButton = button;
};

redButton.addEventListener("click", () => {
  handleButtonClick(redButton, "#a70000", "RED: STOP", "alert-danger");
});

yellowButton.addEventListener("click", () => {
  handleButtonClick(yellowButton, "#ffa500", "YELLOW: GET READY","alert-warning");
});

greenButton.addEventListener("click", () => {
  handleButtonClick(greenButton, "#317f43", "GREEN: GO", "alert-success");
});
