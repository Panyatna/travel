const navButton = document.querySelector('.header-nav-button');
const navItem = document.querySelector('.header-item--menu');
const body = document.querySelector('.page-body');
const navLinks = document.querySelectorAll('.header-navigation__link');

const burgerMenu = navButton.addEventListener('click', () => {
  if (navButton.classList.contains('header-nav-button--open')) {
    navButton.classList.remove('header-nav-button--open');
    navButton.classList.add('header-nav-button--close');
    navItem.style.display = 'block';
    body.style.overflow = 'hidden';
  } else {
    navButton.classList.remove('header-nav-button--close');
    navButton.classList.add('header-nav-button--open');
    navItem.style.display = 'none';
    body.style.overflow = 'initial';
  };

  navLinks.forEach((item) => {
    item.addEventListener('click', () => {
      navButton.classList.remove('header-nav-button--close');
      navButton.classList.add('header-nav-button--open');
      navItem.style.display = 'none';
      body.style.overflow = 'initial';
    });
  });
});


export {burgerMenu};

