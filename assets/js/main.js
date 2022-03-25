//navbar

const btnNavbar = document.querySelector('.btnNavbarContainer');
const navbarSpan = document.querySelector('.btnNavbar');
const navBar = document.querySelector('.header__menu');


btnNavbar.addEventListener('click', ()=>{
	navBar.classList.toggle('header__menu--open');
    navbarSpan.classList.toggle('btnNavbarOpen');
    console.log('hice click')
})