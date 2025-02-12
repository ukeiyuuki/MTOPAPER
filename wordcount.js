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

const wordCountSlider = document.getElementById('wordCount'); //get word count slider
const wordCountValue = document.getElementById('wordCountValue'); //get word count value
wordCountSlider.addEventListener('input', function() { //when slider is moved
  wordCountValue.textContent = wordCountSlider.value + " words"; //update word count value
});

const paragraphsSlider = document.getElementById('paragraphs'); //get paragraph slider
const paragraphsValue = document.getElementById('paragraphsValue'); //get paragraph value
paragraphsSlider.addEventListener('input', function() { //when slider is moved
  paragraphsValue.textContent = paragraphsSlider.value + " paragraphs"; //update paragraph value
});

document.getElementById('actionButton').addEventListener('click', function() { //when generate button is clicked
    window.location.href = "brainstorm.html"; //redirect to destination page
});