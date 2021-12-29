
// import statement is relative to index file 
import {secretButton , secretParagraph } from '../src/app-vars.js';


let showSecret = false;

secretButton.addEventListener('click', toggleSecretState); 

updateSecretParagraph(); 

function toggleSecretState() {
  showSecret = !showSecret;
  updateSecretParagraph();
  updateSecretButton();
}

function updateSecretButton() {
  if (showSecret) {
    secretButton.textContent = "Hide the Secret";
  } else {
    secretButton.textContent = "Show the Secret";
  }
}

function updateSecretParagraph() {
  if (showSecret) {
    secretParagraph.style.display = 'block';
  } else {
    secretParagraph.style.display = 'none';
  }
}
