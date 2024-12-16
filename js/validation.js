/* When you are making custom validations, make sure to disable the default ones. Otherwise, for the user
* it will be very confusing when they see errors everywhere. So what can you do is to extend the check, by
* making required field text appear as custom and remove the 'required' attribute to preven the display
* of the default error. This is much easily handled with react and angular since you are able to check the
* form state after submission with some libraries.

Done. Removed attribute required from input fields and stoped default validation through noValidate. And yea will sure use the libraries to handle this case in other projects
*/
document.getElementById("signUp").addEventListener("submit", function (event) {
  event.preventDefault();
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  let nameRegex = /^[A-Za-z ]{2,}$/;
  let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  let passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*]{8,}$/;

  let displayMessage = document.getElementById("message");

  if (!nameRegex.test(name)) {
    displayMessage.textContent = "Please type your full name and only letters!";
    return;
  }

  if (!emailRegex.test(email)) {
    displayMessage.textContent = "Please type full email adress";
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
