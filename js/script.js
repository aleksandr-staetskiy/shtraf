window.onscroll = function showHeader() {
    var header = document.querySelector('.header');

    if (window.pageYOffset > 100) {
        header.classList.add('header__fixed');
    } else {
        header.classList.remove('header__fixed');
    }

}


// burger menu

$('.burger, .overlay').click(function(){
    $('.burger').toggleClass('clicked');
    $('.overlay').toggleClass('show');
    $('nav').toggleClass('show');
    $('body').toggleClass('overflow');
  });


 