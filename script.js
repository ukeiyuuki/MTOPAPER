//Modal Code

function openModal(modalId) {
  let modal = document.getElementById(modalId);
  if (modal) {
    modal.style.display = "flex";
  }
}

function closeModal(modalId) {
  let modal = document.getElementById(modalId);
  if (modal) {
    modal.style.display = "none";
  }
}

window.onclick = function(event) {
  if (event.target.classList.contains("modal")) {
    event.target.style.display = "none";
  }
}

function switchToSignup() {
  closeModal("loginModal");
  setTimeout(() => {
    openModal("signupModal");
  }, 300);
} 

function switchToLogin() {
  closeModal("signupModal");
  setTimeout(() => {
    openModal("loginModal");
  }, 300);
}

//Feature Boxes

const featureBoxes = document.querySelectorAll(".feature-box");

const observerOptions = {
  threshold: 0.5
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

featureBoxes.forEach(box => {
  observer.observe(box);
});

//Large Box

function animateOnScroll(elements) {
  const observerOptions = {
    threshold: 0.5
  };
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  elements.forEach(el => observer.observe(el));
}

const detailBox = document.querySelector('.feature-detail-box');

animateOnScroll([...featureBoxes, detailBox]);

//Assesment Box

function animateOnScroll(elements) {
  const observerOptions = {
    threshold: 0.5
  };
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  elements.forEach(el => observer.observe(el));
}

const saElements = document.querySelectorAll('.sa-image, .sa-text');

animateOnScroll(saElements);

//Outline Segment

function animateOnScroll(elements) {
  const observerOptions = {
    threshold: 0.5
  };
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  elements.forEach(el => observer.observe(el));
}

const quadrants = document.querySelectorAll('.quadrant');

animateOnScroll(quadrants);