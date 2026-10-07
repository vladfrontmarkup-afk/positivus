export function initHeader() {
  const header = document.querySelector('.js--header');
  if (!header) return;

  const toggle = header.querySelector('.js--header-toggle');
  const navigation = header.querySelector('.js--header-navigation');
  const button = header.querySelector('.js--header-button');
  const portfolioBanner = header.querySelector('.js--portfolio-banner');
  let framePending = false;

  const updateScrollOffset = () => {
    document.documentElement.style.setProperty('--header-scroll-offset', `${Math.ceil(header.getBoundingClientRect().height)}px`);
    header.style.setProperty('--portfolio-banner-height', `${portfolioBanner?.getBoundingClientRect().height ?? 0}px`);
  };

  const updateSticky = () => {
    const isSticky = window.scrollY > 0;
    header.classList.toggle('o-header--sticky', isSticky);
    button?.classList.toggle('c-button__compact', isSticky && getComputedStyle(toggle).display === 'none');
    framePending = false;
  };

  const closeMenu = () => {
    header.classList.remove('o-header--menu-open');
    document.body.classList.remove('o-header-scroll-lock');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Open navigation');
  };

  toggle.addEventListener('click', () => {
    header.classList.add('o-header--menu-animated');
    const isOpen = header.classList.toggle('o-header--menu-open');
    document.body.classList.toggle('o-header-scroll-lock', isOpen);
    toggle.setAttribute('aria-expanded', String(isOpen));
    toggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
  });

  navigation.addEventListener('click', (event) => {
    if (event.target.closest('a')) closeMenu();
  });

  document.addEventListener('click', (event) => {
    if (!header.contains(event.target)) closeMenu();
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && header.classList.contains('o-header--menu-open')) {
      closeMenu();
      toggle.focus();
    }
  });

  window.addEventListener('scroll', () => {
    if (framePending) return;
    framePending = true;
    requestAnimationFrame(updateSticky);
  }, { passive: true });

  window.addEventListener('resize', () => {
    header.classList.remove('o-header--menu-animated');
    if (getComputedStyle(toggle).display === 'none') closeMenu();
    updateSticky();
  });

  updateSticky();
  updateScrollOffset();
  new ResizeObserver(updateScrollOffset).observe(header);
}
