document.addEventListener("DOMContentLoaded", function () {
  let input = document.getElementById("inputBox");
  let buttons = document.querySelectorAll("button");
  let string = "";

  //to toggle between dark and light mode
  function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle("dark-mode");
  }

  //to get the value of the toggle button and call the toggleDarkMode function
  const ToggleBtn = document.getElementById("mode-toggle");
  ToggleBtn.addEventListener("click", toggleDarkMode);

  //to get the value of the input box from local storage
  if (localStorage.getItem("string")) {
    string = localStorage.getItem("string");
    input.value = string;
  }

  //to save the value of the input box in local storage
  window.addEventListener("beforeunload", function () {
    localStorage.setItem("string", string);
  });

  //to get the value of the button clicked and show it in the input box and evaluate the string
});
