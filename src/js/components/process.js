export function initProcess() {
  document.querySelectorAll('.js--process').forEach((process) => {
    const items = [...process.querySelectorAll('.js--process-item')];
    const buttons = items.map((item) => item.querySelector('.js--process-trigger'));

    const setOpen = (item, isOpen) => {
      item.classList.toggle('s-process__item--open', isOpen);
      item.querySelector('.js--process-trigger').setAttribute('aria-expanded', String(isOpen));
      item.querySelector('.js--process-panel').inert = !isOpen;
    };

    items.forEach((item, index) => {
      const button = buttons[index];

      button.addEventListener('click', () => {
        const isOpen = button.getAttribute('aria-expanded') !== 'true';
        items.forEach((entry) => setOpen(entry, entry === item && isOpen));
      });

      button.addEventListener('keydown', (event) => {
        let nextIndex;

        if (event.key === 'ArrowDown') nextIndex = (index + 1) % buttons.length;
        if (event.key === 'ArrowUp') nextIndex = (index - 1 + buttons.length) % buttons.length;
        if (event.key === 'Home') nextIndex = 0;
        if (event.key === 'End') nextIndex = buttons.length - 1;
        if (nextIndex === undefined) return;

        event.preventDefault();
        buttons[nextIndex].focus();
      });
    });
  });
}
