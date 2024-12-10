document.getElementById("signUp").addEventListener("submit", function (event) {
  event.preventDefault();
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  let nameRegex = /^[A-Za-z]{2,}$/;
  let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*]{8,}$/;

  if (!nameRegex.test(name)) {
    alert("Please type a longer name and only letters!");
    return;
  }

  if (!emailRegex.test(email)) {
    alert("Please type full email!");
    return;
  }

  if (!passwordRegex.test(password)) {
    alert(
      "Password must be at least 8 characters, including uppercase, lowercase, a number, and a symbol."
    );
    return;
  }

  alert("Form submitted successfully!");

  document.getElementById("signUp").reset();
});
