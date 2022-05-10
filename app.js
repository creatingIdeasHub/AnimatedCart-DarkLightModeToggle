// **********************************************
// ****** DARK MODE _ LIGHT MODE : TOGGLE *******
// **********************************************

// ******** localStorage *********
// Get the "darkMode" property from localStorage object &...
// ... store it in the "darkMode" variable
let darkMode = localStorage.getItem("darkMode");

// ******** DOM ************
// Get the button (container) from the DOM
const toggle = document.querySelector(".toggle");

// A function that adds "darkmode" class name to the...
// ... body element and also sets the localStorage object's...
// ... "darkMode" property to "enabled"
const enableDarkMode = () => {
  document.body.classList.add("darkmode");
  localStorage.setItem("darkMode", "enabled");
};

// A function that removes "darkmode" class name from the...
// ... body element and also sets the localStorage object's...
// ... "darkMode" property to "disabled or null"
const disableDarkMode = () => {
  document.body.classList.remove("darkmode");
  localStorage.setItem("darkMode", null);
};

// Check if darkMode variable that stores the localStorage object...
// ... has "enabled" stored in it.
if (darkMode == "enabled") {
  enableDarkMode();
}

// Add a click event and
toggle.addEventListener("click", () => {
  darkMode = localStorage.getItem("darkMode");
  if (darkMode !== "enabled") {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
});

// **************************************
// ********** CART ANIMATION ************
// **************************************

const button = document.querySelector(".btn");
const cart = document.querySelector(".cart");
const text = document.querySelector("p");
const box = document.querySelector(".box");

button.onclick = () => {
  if (!document.getElementsByClassName("cartAnim").length) {
    cart.classList.add("cartAnim");
    text.classList.add("textAnim");
    button.classList.add("buttonAnim");
    box.classList.add("boxAnim");
  } else {
    cart.classList.remove("cartAnim");
    text.classList.remove("textAnim");
    button.classList.remove("buttonAnim");
    box.classList.remove("boxAnim");
  }
};
