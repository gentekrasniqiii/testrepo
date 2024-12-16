
/* The structure seems very good, minimalist and functional. The only tip may be to functionalise the assignment
* of the colors, since its like a repetative operation, but it is not necessary 
*/
// traffic lights
const redButton = document.querySelector(".red");
const yellowButton = document.querySelector(".yellow");
const greenButton = document.querySelector(".green");
// audio 
const clickSound = document.querySelector(".click_sound");
// alert message
const alertContainer = document.querySelector(".alert_holder");

let lastClickedButton;

// Created the traffic_color array to hold the data for each button
const traffic_colors = [
    { button: redButton, color: "#a70000", message: "RED: STOP", alertClass: "alert-danger" },
    { button: yellowButton, color: "#ffa500", message: "YELLOW: GET READY", alertClass: "alert-warning" },
    { button: greenButton, color: "#317f43", message: "GREEN: GO", alertClass: "alert-success" }
];

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

// Here interated inside traffic_colors array added eventListener for each button, and now the function handleButtonClick is called only once
traffic_colors.forEach(v => {
    v.button.addEventListener("click", () => {
        handleButtonClick(v.button, v.color, v.message, v.alertClass);
    });
});
