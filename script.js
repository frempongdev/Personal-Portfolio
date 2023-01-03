var container = document.body;
var navIcon = document.querySelector('.nav-icon');
var mobileNav = document.querySelector('.nav-wrapper');
var closeBtn = document.createElement('a');
var mobileNavBg = document.createElement('div');

closeBtn.classList='x-btn'; 


//Hiding Nav Icon
navIcon.addEventListener('click', vanish);
navIcon.addEventListener('click', showMenu);
closeBtn.addEventListener('click', hideMenu);

function vanish(e){
    navIcon.classList.toggle('mobile-nav'); 
    
    //unhide all mbile nav items
    mobileNav.classList.toggle('unhide-nav', 'nav-wrapper');
    
}
