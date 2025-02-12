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

const textarea = document.getElementById('ideaInput'); // Get the textarea element
    const maxHeight = 200; // Maximum height in pixels (approx. 10 lines)

    textarea.addEventListener('input', function() { // Listen for input events
      // Reset the height so that scrollHeight is recalculated
      this.style.height = 'auto'; // Auto resize
      // If content height exceeds maxHeight, set height to maxHeight and enable scrolling
      if (this.scrollHeight > maxHeight) { // If content height exceeds maxHeight
        this.style.height = maxHeight + 'px'; // Set height to maxHeight
        this.style.overflowY = 'auto'; // Enable vertical scrolling
      } else { // Otherwise, set the height to match the content
        this.style.height = this.scrollHeight + 'px'; // Set height to match content
        this.style.overflowY = 'hidden'; // Disable vertical scrolling
      }
});

document.getElementById('submitButton').addEventListener('click', function() { // Listen for click events
    window.location.href = 'final.html'; // Redirect to destination page
});
