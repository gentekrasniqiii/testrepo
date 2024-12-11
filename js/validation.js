document.getElementById("signUp").addEventListener("submit", function (event) {
  event.preventDefault();
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  let nameRegex = /^[A-Za-z]{2,}$/;
  let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  let passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*]{8,}$/;

  let displayMessage = document.getElementById("message");

  if (!nameRegex.test(name)) {
    displayMessage.textContent = "Please type a longer name and only letters!";
    return;
  }

  if (!emailRegex.test(email)) {
    displayMessage.textContent = "Please type full email";
    return;
  }

  if (!passwordRegex.test(password)) {
    displayMessage.textContent =
      "Password must include 8 characters, including a uppercase letter, a number and symbol";
    return;
  }

  displayMessage.textContent = "Thank you for registering!";
  displayMessage.style.color = "green";
  setTimeout(() => {
    displayMessage.textContent = "";
  }, 2000);

  document.getElementById("signUp").reset();

});
