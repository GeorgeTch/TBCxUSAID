const closeIcon = document.querySelector('.close-icon');
const closeBtn = document.querySelector('.close-btn');
const sidebar = document.querySelector('.terms-and-conditions-sidebar');
const termsBtn = document.querySelector('.terms-and-conditions');
const sidebarOuterSpace = document.querySelector('.sidebar-outer-container')


function openSidebar() { 
  sidebar.classList.add('displayed-sidebar');
  sidebarOuterSpace.classList.add('sidebar-outside-bg');
}

function closeSidebar() {
  sidebar.classList.remove('displayed-sidebar');
  sidebarOuterSpace.classList.remove('sidebar-outside-bg');
}


