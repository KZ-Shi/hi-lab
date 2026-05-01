document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.getElementById('navbar');
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');

  // Navbar scroll effect
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 20);
  });

  // Mobile menu toggle
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });

  // Close mobile menu on link click
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
    });
  });

  // Active nav link highlight on scroll
  const sections = document.querySelectorAll('section[id]');
  const navItems = document.querySelectorAll('.nav-links a[href^="#"]');

  function updateActiveNav() {
    const scrollY = window.scrollY + 100;

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');

      if (scrollY >= top && scrollY < top + height) {
        navItems.forEach(item => {
          item.classList.remove('active');
          if (item.getAttribute('href') === '#' + id) {
            item.classList.add('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', updateActiveNav);

  // Fade-in animation on scroll
  const fadeElements = document.querySelectorAll('.fade-in');

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  );

  fadeElements.forEach(el => observer.observe(el));

  // Publication filter
  const pubFilters = document.querySelectorAll('.pub-filter');
  const pubItems = document.querySelectorAll('.pub-item');

  pubFilters.forEach(filter => {
    filter.addEventListener('click', () => {
      pubFilters.forEach(f => f.classList.remove('active'));
      filter.classList.add('active');

      const category = filter.dataset.filter;

      pubItems.forEach(item => {
        if (category === 'all' || item.dataset.category.includes(category)) {
          item.style.display = '';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });
});
