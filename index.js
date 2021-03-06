document.getElementById('header__menu-button').addEventListener('click', () => {
  const menuSensivite = document.querySelectorAll('.menu-sensitive');
  menuSensivite.forEach((it) => it.classList.toggle('menu-displayed'))
});

const menu = document.getElementById('menu-list');

document.querySelectorAll('#menu-list li a').forEach((it) => {
  it.addEventListener('mouseenter', (evt) => {
      const div = document.createElement('div');
      div.classList.add('menu__onHover-image');
      div.style.backgroundImage = `url(${evt.target.closest('li').dataset.src})`;
      menu.insertBefore(div, evt.target.closest('li'));
  });
  it.addEventListener('mouseleave', (evt) => {
    const div = evt.target.parentNode.previousSibling;
    if (div) menu.removeChild(div);
  });
})

const searchSensitive = document.querySelectorAll('.search-sensitive');
const searchButton = document.getElementById('header-search-button');

searchButton.addEventListener('click', (evt) => {
  searchSensitive.forEach((it) => it.classList.toggle('search-displayed'));
  document.getElementById('search-input').classList.toggle('visually-hidden');
  searchButton.classList.toggle('clicked');
})