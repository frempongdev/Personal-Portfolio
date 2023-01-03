const container = document.body;
const navIcon = document.querySelector('.nav-icon');
const mobileNav = document.querySelector('.nav-wrapper');
const closeBtn = document.createElement('a');
const mobileNavBg = document.createElement('div');
const menuItem = document.querySelectorAll('.nav-wrapper li a');

closeBtn.classList = 'x-btn';

function vanish() {
  navIcon.classList.toggle('mobile-nav');

  // unhide all mbile nav items
  mobileNav.classList.toggle('unhide-nav', 'nav-wrapper');
}

function showMenu() {
  const header = document.querySelector('.head-top');
  container.insertBefore(mobileNavBg, header);

//   // styling the backgroung
//   mobileNavBg.classList.add('bg-style');
//   mobileNavBg.classList.toggle('mobile-nav');

//   // creating close button
//   closeBtn.innerHTML = 'x';
//   navIcon.parentElement.insertBefore(closeBtn, navIcon);
// }

// function hideMenu() {
//   container.removeChild(mobileNavBg);
//   navIcon.classList.toggle('mobile-nav');
//   navIcon.parentElement.removeChild(closeBtn);
//   mobileNav.classList.remove('unhide-nav');
// }

// for (let i = 0; i < menuItem.length; i + 1) {
//   menuItem[i].addEventListener('click', () => {
//     hideMenu();
//   });
// }

// // calling all listeners

// // Hiding Nav Icon
// navIcon.addEventListener('click', vanish);
// navIcon.addEventListener('click', showMenu);
// closeBtn.addEventListener('click', hideMenu);
