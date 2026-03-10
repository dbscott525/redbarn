// Navbar scroll behavior (only on home page with hero)
const navbar = document.getElementById('navbar');
const isInnerPage = document.body.classList.contains('inner-page');

if (!isInnerPage) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
}

// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Close mobile nav on link click
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});

// Scroll animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -40px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);

document.querySelectorAll('.section-header, .highlight-card, .service-card, .service-overview-card, .service-detail-card, .why-card, .facility-item, .contact-form, .contact-info, .cta-content, .about-text, .service-detail-header').forEach(el => {
  el.classList.add('fade-in');
  observer.observe(el);
});

// Contact form handling
const contactForm = document.getElementById('contactForm');

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    contactForm.innerHTML = `
      <div style="text-align: center; padding: 40px 20px;">
        <div style="font-size: 3rem; margin-bottom: 16px; color: #5C7A56;">&#10003;</div>
        <h3 style="margin-bottom: 12px;">Thank You!</h3>
        <p style="color: #6B6560;">We've received your message and will get back to you within 24 hours.</p>
      </div>
    `;
  });
}

// Smooth scroll for same-page anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href === '#') return;
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
