
let links = document.querySelectorAll('nav a');
const sections = document.querySelectorAll('section');

links.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const sectionId = this.getAttribute('data-section');
    
    // Hide all sections and remove 'active' class
    sections.forEach(section => section.classList.remove('active'));
    
    // Show the selected section
    const activeSection = document.getElementById(sectionId);
    if (activeSection) {
      activeSection.classList.add('active');
    }
  });
});
showSection('portfolio');

