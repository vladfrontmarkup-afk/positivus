import './lib/jquery.js';
import '../css/style.css';
import { initExampleSection } from './components/example-section.js';
import { initHeader } from './components/header.js';

// Module scripts run after HTML is parsed.
initExampleSection();
initHeader();

