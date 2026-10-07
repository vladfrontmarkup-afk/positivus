export function initContact() {
  document.querySelectorAll('.js--contact-form').forEach((form) => {
    form.addEventListener('submit', (event) => {
      // Keep entered values until a form submission endpoint is connected.
      event.preventDefault();
    });
  });
}
