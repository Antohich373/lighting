let navigation = document.querySelector('.header-navigation--close')
let buttonOpen = document.querySelector('.header__toggle')
let modalsShow = document.querySelector('.modal-show')

buttonOpen.addEventListener('click', function(evt){
  evt.preventDefault();
  navigation.classList.toggle('header-navigation--open');
  modalsShow.classList.toggle('modal-show--active');
  buttonOpen.classList.toggle('header__toggle--opened')
})

$('[type=tel]').mask('+7 (999) 999-99-99')

