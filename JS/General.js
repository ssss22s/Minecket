// ==================
//   NAVBAR MOBILE
// ==================
var loadFile = function (event) {
  var image = document.getElementById("output");
  image.src = URL.createObjectURL(event.target.files[0]);
};

const navbars = document.querySelector('.navbars-bars');
const navMobileMenu = document.querySelector('.nav-mobile-menu');

navbars.addEventListener('click', () => {
    navbars.classList.toggle('active');
    navMobileMenu.classList.toggle('active');
});

// =====================
//     MAIN NAV ITEM
// =====================

const navinicial = document.querySelector('.nav-logo');

navinicial.addEventListener('click', () => {
    window.location.href = "../HTML/Index.html";
});
