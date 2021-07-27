/**
 * We provided some simple JavaScript template code. Your goal is to modify
 * the application so that you can properly toggle the button to switch
 * between an ON state and an OFF state. When the button is on and it is
 * clicked, it turns off and the text within it changes from ON to OFF and
 * vice versa. You are free to add classes and styles, but make sure you
 * leave the element ID's as they are.
 */
import $ from "jquery";

const rootApp = document.getElementById("root");
rootApp.innerHTML = '<button class="toggle">ON</button>';

const button = document.querySelector('.toggle');
button.addEventListener('click', e => {
  const val = e.target.innerText;
  if (val === 'ON') {
    button.innerText = 'OFF';
  } else {
    button.innerText = 'ON';
  }
});