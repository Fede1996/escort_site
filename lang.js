const translations = {
  en: {
    "menu-about": "About Us",
    "menu-services": "Services",
    "menu-contact": "Contact",
    "hero-title": "Welcome to the World of Elegance",
    "hero-text": "Bespoke luxury experiences for discerning individuals.",
    "hero-btn": "Discover More",
    "about-title": "About Us",
    "about-text": "We offer unforgettable experiences with a focus on sophistication, discretion, and attention to detail. Our tailored services are designed to meet your highest expectations.",
    "services-title": "Our Services",
    "service1-title": "Private Dinner Companionship",
    "service1-text": "Enhance your evening with a charming and sophisticated presence.",
    "service2-title": "Event Accompaniment",
    "service2-text": "Elegant and professional presence for corporate and social gatherings.",
    "service3-title": "Travel Companionship",
    "service3-text": "Make your journeys memorable with a cultured and engaging companion.",
    "contact-title": "Contact Us",
    "contact-text": "For inquiries or bookings, please fill out the form below or contact us directly.",
    "form-name": "Your Name",
    "form-email": "Your Email",
    "form-message": "Your Message",
    "form-submit": "Send Message",
    "footer-company": "Exclusive Luxury Services",
    "footer-rights": "All rights reserved.",
    "footer-privacy": "Privacy Policy",
    "footer-terms": "Terms of Service",
  },
};

const languageSwitcher = document.getElementById("language-switcher");
const elementsToTranslate = document.querySelectorAll("[data-lang-key]");

languageSwitcher.addEventListener("change", (event) => {
  const selectedLang = event.target.value;
  elementsToTranslate.forEach((el) => {
    const key = el.getAttribute("data-lang-key");
    el.textContent = translations[selectedLang][key];
  });
});
