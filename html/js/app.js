// EOS Design System - Style Guide Navigation

document.addEventListener('DOMContentLoaded', function() {
  const sectionButtons = document.querySelectorAll('.section-button');
  
  sectionButtons.forEach(button => {
    button.addEventListener('click', function() {
      // Remove active class from all buttons
      sectionButtons.forEach(btn => btn.classList.remove('active'));
      
      // Add active class to clicked button
      this.classList.add('active');
      
      // Get the section ID
      const sectionId = this.getAttribute('data-section');
      
      // Hide all section content
      const allSections = document.querySelectorAll('.section-content');
      allSections.forEach(section => section.classList.remove('active'));
      
      // Show selected section
      const selectedSection = document.getElementById(sectionId);
      if (selectedSection) {
        selectedSection.classList.add('active');
      }
    });
  });
});
