"use strict";
// Next, write a function that listens for the user to enter their first name in the form below, and generates a string with the reply, "It's so nice to meet you, [name]!"
// add function that listens for user to input firt name and then greets them
// "It's so nice to meet you, [name]!"
function getFirstName() {
  console.log(document.getElementById("name-entry").value);
  document
    .getElementById("button")
    .addEventListener("click", event => greeting(event));
}

getFirstName();

function greeting(event) {
  event.preventDefault();
  let firstName = document.getElementById("name-entry").value.split(" ")[0];
  document.getElementsByClassName("results")[0].textContent = firstName;
  console.log(`It's so nice to meet you, ${firstName}`);
}
