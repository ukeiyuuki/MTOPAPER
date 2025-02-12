//Modal Code

function openModal(modalId) { //open modal
    let modal = document.getElementById(modalId); //get modal by id
    if (modal) { //if modal exists
      modal.style.display = "flex"; //display modal
    }
}
  
  function closeModal(modalId) { //close modal
    let modal = document.getElementById(modalId); //get modal by id
    if (modal) { //if modal exists
      modal.style.display = "none"; //hide modal
    }
  }
  
  window.onclick = function(event) { //close modal when clicked outside
    if (event.target.classList.contains("modal")) { //if clicked element has class modal
      event.target.style.display = "none"; //hide modal
    }
  }
  
  function switchToSignup() { //switch to signup modal
    closeModal("loginModal"); //close login
    setTimeout(() => { //open signup
      openModal("signupModal"); 
    }, 300); //delay
  } 
  
  function switchToLogin() { //switch to login modal
    closeModal("signupModal"); //close signup 
    setTimeout(() => { //open login
      openModal("loginModal"); 
    }, 300); //delay
  }
  
// Input Box Code

const evaluateButton = document.getElementById("evaluateButton"); //evaluate button
const resultMessage = document.getElementById("resultMessage"); //result message
const spinner = document.getElementById("spinner"); //spinner

evaluateButton.addEventListener("click", function() { //evaluate button click event
  spinner.style.display = "inline-block"; //show spinner

  evaluateButton.classList.add("loading"); //add loading class
  evaluateButton.textContent = "Loading"; //change text
  evaluateButton.disabled = true; //disable button

  setTimeout(function() { //simulate loading
    spinner.style.display = "none"; //hide spinner
    evaluateButton.classList.remove("loading"); //remove loading class
    evaluateButton.textContent = "Evaluate"; //change text
    evaluateButton.disabled = false; //enable button

    resultMessage.textContent = "work in progress";
  }, 2000);
});