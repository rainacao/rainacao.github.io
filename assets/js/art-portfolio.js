// Art Portfolio JavaScript
// Handles filtering, interactions, and responsive layout

document.addEventListener('DOMContentLoaded', function() {
  // Filter functionality
  const filterButtons = document.querySelectorAll('.filter-btn');
  const artworkItems = document.querySelectorAll('.artwork-item');

  if (filterButtons.length > 0 && artworkItems.length > 0) {
    filterButtons.forEach(button => {
      button.addEventListener('click', function() {
        const filter = this.getAttribute('data-filter');
        
        // Update active button
        filterButtons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
        
        // Filter artwork items
        artworkItems.forEach(item => {
          if (filter === 'all' || item.getAttribute('data-category') === filter) {
            item.style.display = 'block';
            item.style.opacity = '0';
            setTimeout(() => {
              item.style.opacity = '1';
            }, 100);
          } else {
            item.style.opacity = '0';
            setTimeout(() => {
              item.style.display = 'none';
            }, 300);
          }
        });
      });
    });
  }

  // Masonry-like layout for responsive grid
  function initMasonry() {
    const grid = document.getElementById('artwork-grid');
    if (grid) {
      // Simple responsive grid without external library
      const items = grid.querySelectorAll('.artwork-item');
      items.forEach(item => {
        item.style.transition = 'all 0.3s ease';
      });
    }
  }

  initMasonry();
  
  // Reinitialize on window resize
  window.addEventListener('resize', initMasonry);

  // Add smooth scrolling for anchor links
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  anchorLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Add keyboard navigation for filter buttons
  filterButtons.forEach(button => {
    button.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        this.click();
      }
    });
  });
});
