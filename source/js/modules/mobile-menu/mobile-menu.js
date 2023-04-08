const mobileMenuElement = document.querySelector('[data-mobile-menu]');
const menuToggleElement = document.querySelector('[data-menu-toggle]');
const menuOverlayElement = document.querySelector('[data-menu-close]');

const breakpoint = window.matchMedia('(max-width:766px)');

const menuClickHandler = (evt) => {
  if (evt.target.closest('[data-menu-close]') || evt.target.closest('[data-nav-link]')) {
    closeMenu();
  }
};

const initMobileMenu = () => {
  if (mobileMenuElement && breakpoint.matches) {
    if (menuToggleElement.checked) {
      menuOverlayElement.classList.add('is-active');
      document.body.classList.add('scroll-lock');
    }
    menuToggleElement.addEventListener('change', (evt) => {
      if (evt.target.checked) {
        menuOverlayElement.classList.add('is-active');
        document.body.classList.add('scroll-lock');
      } else {
        menuOverlayElement.classList.remove('is-active');
        document.body.classList.remove('scroll-lock');
      }
    });

    document.addEventListener('click', menuClickHandler);

  } else {
    menuOverlayElement.classList.remove('is-active');
    document.body.classList.remove('scroll-lock');
  }

  breakpoint.addEventListener('change', initMobileMenu);
};

function closeMenu() {
  menuToggleElement.checked = false;
  if (menuOverlayElement.classList.contains('is-active')) {
    menuOverlayElement.classList.remove('is-active');
  }

  if (document.body.classList.contains('scroll-lock')) {
    document.body.classList.remove('scroll-lock');
  }
}

export {initMobileMenu};
