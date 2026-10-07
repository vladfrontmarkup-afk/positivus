import '@splidejs/splide/css/core';
import '../css/style.css';
import { initHeader } from './components/header.js';
import { initProcess } from './components/process.js';
import { initTestimonials } from './components/testimonials.js';
import { initContact } from './components/contact.js';
import { initFooter } from './components/footer.js';

// Module scripts run after HTML is parsed.
initHeader();
initProcess();
initTestimonials();
initContact();
initFooter();

