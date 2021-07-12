let navigation = document.querySelector('.header-navigation--close')
let buttonOpen = document.querySelector('.header-open--nav')

buttonOpen.addEventListener('click', function(evt){
  evt.preventDefault();
  navigation.classList.toggle('header-navigation--open')
})

$('[type=tel]').mask('+7 (999) 999-99-99')

