//terms and conditions sidebar
const termsCloseIcon = document.querySelector('.close-icon');
const termsCloseBtn = document.querySelector('.close-btn');
const termsSidebar = document.querySelector('.terms-and-conditions-sidebar');
const termsBtn = document.querySelector('.terms-and-conditions');
const sidebarOuterSpace = document.querySelector('.sidebar-outer-container')


function openTermsSidebar() { 
  termsSidebar.classList.add('displayed-terms-sidebar');
  sidebarOuterSpace.classList.add('sidebar-outside-bg');
}

function closeTermsSidebar() {
  termsSidebar.classList.remove('displayed-terms-sidebar');
  sidebarOuterSpace.classList.remove('sidebar-outside-bg');
}

// navigation sidebar

const menuBtn = document.querySelector('.burger-menu');
const navSidebar = document.querySelector('.nav-sidebar');

function openNavSidebar() {
  navSidebar.style.display = 'flex';
  sidebarOuterSpace.classList.add('sidebar-outside-bg');
}

function closeNavSidebar() {
  navSidebar.style.display = 'none';
  sidebarOuterSpace.classList.remove('sidebar-outside-bg');
}
