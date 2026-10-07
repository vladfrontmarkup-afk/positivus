export function initFooter() {
  document.querySelectorAll('.js--footer-subscription').forEach((form) => {
    form.addEventListener('submit', (event) => {
      // Connect the newsletter endpoint here when the backend is available.
      event.preventDefault();
    });
  });
}
