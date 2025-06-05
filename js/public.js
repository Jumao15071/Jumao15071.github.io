// document.addEventListener('DOMContentLoaded', () => {

//   // Get all "navbar-burger" elements
//   const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

//   // Add a click event on each of them
//   $navbarBurgers.forEach( el => {
//     el.addEventListener('click', () => {

//       // Get the target from the "data-target" attribute
//       const target = el.dataset.target;
//       const $target = document.getElementById(target);

//       // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
//       el.classList.toggle('is-active');
//       $target.classList.toggle('is-active');

//     });
//   });

// });

document.addEventListener('DOMContentLoaded', () => {

  let navbarBurger = document.querySelector('.navbar-burger');
  let navbarMenu = document.querySelector('.navbar-menu');
  if (navbarBurger && navbarMenu) {
    navbarBurger.addEventListener('click', function () {
      navbarBurger.classList.toggle('is-active');
      if (navbarBurger.classList.contains('is-active')) {
        navbarMenu.style.display = 'block';
        if (navbarMenu.querySelectorAll('a[href]')) {
          [].forEach.call(navbarMenu.querySelectorAll('a[href]'), function (navURL) {
            navURL.addEventListener('click', function () {
              navbarMenu.style.display = 'none';
              navbarBurger.classList.remove('is-active');
            });
          });
        }
      }
      else navbarMenu.style.display = 'none';
    });
  }
  if (document.querySelectorAll('.navbar-dropdown')) {
    [].forEach.call(document.querySelectorAll('.navbar-dropdown'), function (elDrop) {
      elDrop.style.display = 'none';
    });
  }
  if (document.querySelectorAll('.navbar-link')) {
    [].forEach.call(document.querySelectorAll('.navbar-link'), function (elLink) {
      if (elLink.classList.contains('is-active')) elLink.classList.toggle('is-active');
      if (elLink.nextElementSibling.classList.contains('navbar-dropdown') && elLink.nextElementSibling.hasChildNodes()) {
        elLink.addEventListener('click', function () {
          elLink.classList.toggle('is-active');
          if (elLink.classList.contains('is-active') && elLink.nextElementSibling.style.display === 'none') elLink.nextElementSibling.style.display = 'block';
          else if (!elLink.classList.contains('is-active') && elLink.nextElementSibling.style.display === 'block') elLink.nextElementSibling.style.display = 'none';
          [].forEach.call(elLink.nextElementSibling.childNodes, function (siblingChild) {
            siblingChild.addEventListener('click', function () {
              siblingChild.parentNode.style.display = 'none';
              if (elLink.classList.contains('is-active')) elLink.classList.toggle('is-active');
            });
          });
        });
        elLink.nextElementSibling.addEventListener('mouseleave', function () {
          elLink.nextElementSibling.style.display = 'none';
          if (elLink.classList.contains('is-active')) elLink.classList.toggle('is-active');
        });
      }
    });
  }

});