// for main page redirection
let order = document.querySelector(".order-button");
order.addEventListener("click", () => {
  console.log("Order button clicked");
  window.location.href = "login.html";
});

let loginButton = document.querySelector(".nav-link.login");
loginButton.addEventListener("click", () => {
  console.log("Login button clicked");
  window.location.href = "login.html";
});

let home = document.querySelector(".nav-link.home");
home.addEventListener("click", () => {
  console.log("Home button clicked");
  window.location.href = "index.html";
});

let signupButton = document.querySelector(".nav-link.signup");
signupButton.addEventListener("click", () => {
  console.log("Signup button clicked");
  window.location.href = "signup.html";
});