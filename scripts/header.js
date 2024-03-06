let prevScrollPosition = window.scrollY;
const navbar = document.querySelector('header');

// for background change when scrolled
window.addEventListener('scroll', () => {
  let currentScrollPosition = window.scrollY;
  if(currentScrollPosition > 0) {
    navbar.style.backgroundColor = 'rgba(34, 34, 34, 0.95)';
  } else {
    navbar.style.backgroundColor = 'rgb(26, 30, 31)';
  }
})

// navbar on mobile version 
window.onscroll = function () {
  if (window.innerWidth <= 780) {
    let currentScrollPosition = window.scrollY;

    if (prevScrollPosition > currentScrollPosition) {
      navbar.style.top = '0';
    } else {
      navbar.style.top = `-${navbar.offsetHeight}px`;
    }
    prevScrollPosition = currentScrollPosition;
  } else{
    navbar.style.top = '0';
  }
}
