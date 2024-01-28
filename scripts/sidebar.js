const closeIcon = document.querySelector('.close-icon');
const closeBtn = document.querySelector('.close-btn');
const sidebar = document.querySelector('.terms-and-conditions-sidebar');
const termsBtn = document.querySelector('.terms-and-conditions');


function openSidebar() { 
  sidebar.classList.add('displayed-sidebar');
}

function closeSidebar() {
  sidebar.classList.remove('displayed-sidebar');
}

