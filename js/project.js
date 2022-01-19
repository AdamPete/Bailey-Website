let portfolioListItems = document.querySelectorAll('[dd-id]');
let all_images = document.querySelectorAll('.portfolio-projects img');
let portfolio_bg = document.querySelector('.portfolio-projects');
portfolioListItems.forEach((i) => {
  i.addEventListener('mouseover', (e) => {
    let portfolio_bg_clr = e.target.getAttribute('dd-bg');
    portfolio_bg.style.setProperty('--background-clr', portfolio_bg_clr);
    portfolioListItems.forEach((pi) => {
      pi.classList.remove('active');
    });
    e.target.classList.add('active');
    all_images.forEach((img) => {
      img.classList.remove('active');
    });
    let i_id = e.target.getAttribute('dd-id');
    let hovered_img = document.querySelector('#' + i_id);
    hovered_img.classList.add('active');
  });
});
