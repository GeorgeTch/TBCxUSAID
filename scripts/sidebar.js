//terms and conditions sidebar
const termsCloseIcon = document.querySelector('.close-icon');
const termsCloseBtn = document.querySelector('.close-btn');
const termsSidebar = document.querySelector('.terms-and-conditions-sidebar');
const termsBtn = document.querySelector('.terms-and-conditions');
const sidebarsOuterSpace = document.querySelector('.sidebars-outer-container')


function openTermsSidebar() {
  termsSidebar.classList.add('displayed-terms-sidebar');
  sidebarsOuterSpace.classList.add('sidebars-outside-shade');
}

function closeTermsSidebar() {
  termsSidebar.classList.remove('displayed-terms-sidebar');
  sidebarsOuterSpace.classList.remove('sidebars-outside-shade');
}

document.addEventListener('click', event => {
  if (event.target.matches('.sidebars-outer-container')) {
    closeTermsSidebar();
  }
})

// navigation sidebar

const menuBtn = document.querySelector('.burger-menu');
const navSidebar = document.querySelector('.nav-sidebar');

function openNavSidebar() {
  navSidebar.classList.add('displayed-nav-sidebar')
  sidebarsOuterSpace.classList.add('sidebars-outside-shade');
}

function closeNavSidebar() {
  navSidebar.classList.remove('displayed-nav-sidebar');
  sidebarsOuterSpace.classList.remove('sidebars-outside-shade');
}

document.addEventListener('click', event => {
  if (event.target.matches('.sidebars-outer-container')) {
    closeNavSidebar();
  }
})
