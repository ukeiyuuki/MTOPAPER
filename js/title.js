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

const checkboxes = document.querySelectorAll('.option-checkbox');
checkboxes.forEach(checkbox => {
  checkbox.addEventListener('change', function() {
    if (this.checked) {
      checkboxes.forEach(other => {
        if (other !== this) {
          other.checked = false;
        }
      });
    }
  });
});

const optionBoxes = document.querySelectorAll('.option-box');
optionBoxes.forEach(box => {
  box.addEventListener('click', function(e) {
    if (e.target.type !== 'checkbox') {
      const checkbox = this.querySelector('.option-checkbox');
      checkbox.checked = !checkbox.checked;
      if (checkbox.checked) {
        checkboxes.forEach(other => {
          if (other !== checkbox) {
            other.checked = false;
          }
        });
      }
    }
  });
});
