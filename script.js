'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// ///////////////////////////////////////////////
///////////////////////////////////////////////////

// console.log(document.documentElement);
// console.log(document.head);
// console.log(document.body);

// const header = document.querySelector('.header');
// const body = document.querySelector('body');
// const allSelections = document.querySelectorAll('.section');
// console.log(allSelections);

// document.getElementById('section--1');
// const allButtons = document.getElementsByTagName('button');

// console.log(allButtons);

// console.log(document.getElementsByClassName('btn'));

// // Creating and inserting elements
// // insertAdjacentHTML();

// const message = document.createElement('div');
// message.classList.add('cookie-message');

// // message.textContent = `We use cookies for improved functionality and analytics.`;
// message.innerHTML = `We use cookies for improved functionality and analytics. <button class='btn btn--close-cookie'>Got it!</button>`;

// // header.prepend(message.cloneNode(true));
// // body.append(message);

// header.append(message);

// // header.before(message);
// // header.after(message);

// // Delete Elements
// document
//   .querySelector('.btn--close-cookie')
//   .addEventListener('click', function () {
//     // message.remove();
//     message.parentElement.removeChild(message);
//   });

// // Styles
// message.style.backgroundColor = '#37383d';
// message.style.width = '105%';

// console.log(message.style.color);
// console.log(message.style.backgroundColor);

// console.log(getComputedStyle(message).color);
// console.log(getComputedStyle(message).height);

// message.style.height =
//   Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';
// // message.style.height = Number.parseFloat(getComputedStyle(message).height, 10) + 50 + 'px';

// document.documentElement.style.setProperty('--color-primary', 'orangered');

// // Atttributes
// const logo = document.querySelector('.nav__logo');
// console.log(logo.alt);

// console.log(logo.className);

// logo.alt = 'Beautiful minimalist logo';

// // Non-standards
// console.log(logo.designer);

// console.log(logo.getAttribute('designer'));
// logo.setAttribute('company', 'Bankist');

// console.log(logo.src);
// console.log(logo.getAttribute('src'));

// const link = document.querySelector('.nav__link--btn');
// console.log(link.href);
// console.log(link.getAttribute('href'));

// // Data Attribute
// console.log(logo.dataset.versionNumber);

// // Classes
// logo.classList.add('c', 'j');
// logo.classList.remove('c');
// logo.classList.toggle('c');
// logo.classList.contains('c');

// // Don't use
// logo.className = 'jonas';

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', function (e) {
  const s1cords = section1.getBoundingClientRect();
  console.log(s1cords);

  console.log(e.target.getBoundingClientRect());

  console.log('Current scroll (X/Y)', window.pageXOffset, window.pageYOffset);

  console.log(
    'height/width viewport',
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );

  // scrolling
  // window.scrollTo(
  //   s1cords.left + window.pageXOffset,
  //   s1cords.top + window.pageYOffset
  // );

  // window.scrollTo({
  //   left: s1cords.left + window.pageXOffset,
  //   top: s1cords.top + window.pageYOffset,
  //   behavior: 'smooth',
  // });

  section1.scrollIntoView({ behavior: 'smooth' });
});

const h1 = document.querySelector('h1');

h1.addEventListener('mouseenter', function (e) {
  alert('addEventListener: Great! You are reading the heading :D');
});
