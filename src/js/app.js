import './lib/jquery.js';
import '@splidejs/splide/css/core';
import '../css/style.css';
import { initExampleSection } from './components/example-section.js';
import { initHeader } from './components/header.js';
import { initProcess } from './components/process.js';
import { initTestimonials } from './components/testimonials.js';
import { initContact } from './components/contact.js';

// Module scripts run after HTML is parsed.
initExampleSection();
initHeader();
initProcess();
initTestimonials();
initContact();

