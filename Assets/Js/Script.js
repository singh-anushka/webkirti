const hamgbuger = document.querySelector('.hamburger');
const body = document.body;
const navmenu = document.querySelector('.nav-items');

hamgbuger.addEventListener('click', () => {
    hamgbuger.classList.toggle('active');
    navmenu.classList.toggle('active');
})

// function toggleSignIn(){
//     signInPage.classList.toggle('active');
//     document.body.style.height = '100vh';
//     document.body.style.overflowY = 'hidden';
//     hamgbuger.classList.toggle('active');
//     navmenu.classList.toggle('active');
// }

// function signInmthdCons(){
//     constmerSignInPage.classList.
// }
