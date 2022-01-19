const navbar = document.querySelector('.navbar');
const navbarOffsetTop = navbar.offsetTop;
const sections = document.querySelectorAll('section');
const navbarLinks = document.querySelectorAll('.navbar-link');
const cursor = document.querySelector('.cursor');

// Cursor
document.addEventListener('mousemove', (e) => {
  cursor.setAttribute(
    'style',
    'top:' +
      (e.pageY - cursor.clientHeight / 2) +
      'px; left: ' +
      (e.pageX - cursor.clientWidth / 2) +
      'px;'
  );
});

document.addEventListener('click', () => {
  cursor.classList.add('expand');

  setTimeout(() => {
    cursor.classList.remove('cursor');
  }, 500);
});

window.addEventListener('scroll', () => {
  mainFn();
});

const hidePortfolioBG = function () {
  portfolio_bg.style.display = 'none';
};

const showPorfolioBG = function () {
  portfolio_bg.style.display = 'inline-block';
};

const mainFn = () => {
  if (window.pageYOffset >= navbarOffsetTop) {
    navbar.classList.add('sticky');
  } else {
    navbar.classList.remove('sticky');
  }

  sections.forEach((section, i) => {
    if (window.pageYOffset >= section.offsetTop - 10) {
      navbarLinks.forEach((navbarLink) => {
        navbarLink.classList.remove('change');
      });
      navbarLinks[i].classList.add('change');
    }
  });
};

mainFn();

window.addEventListener('resize', () => {
  window.location.reload();
});
