const toggleMenu = document.querySelector('.togglem')
const toggleClose = document.querySelector('.togglec')
const menu = document.querySelector('header .menu')
toggleMenu.onclick = function () {
  toggleMenu.classList.toggle('active');
  toggleClose.classList.toggle('active');
  menu.classList.toggle('active')
}

toggleClose.onclick = function () {
  toggleMenu.classList.toggle('active');
  toggleClose.classList.toggle('active');
  menu.classList.toggle('active')
}

//end
