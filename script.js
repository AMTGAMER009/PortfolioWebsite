// Smooth Scroll for Navigation Links
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    window.scrollTo({
      top: targetElement.offsetTop - 50, // Offset for header
      behavior: 'smooth'
    });
  });
});

// Form Validation on Contact Page
const contactForm = document.querySelector('form');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    
    if (!name || !email || !message) {
      e.preventDefault();
      alert("Please fill out all fields!");
    }
  });
}

// Example of Button Text Change (on Home page or elsewhere)
const learnMoreBtn = document.querySelector('.btn');
if (learnMoreBtn) {
  learnMoreBtn.addEventListener('click', function() {
    this.textContent = "Thanks for Clicking!";
    this.style.backgroundColor = "#2d2d2d"; // Darker color when clicked
  });
}
