$(document).ready(function () {
  $(".modal-phone").mask("+7 (999) 999-9999");
  $('.header-slider').slick({
    arrows: false,
    dots: true,
  })
  $('.alert-close').on('click', function() {
    let window_dark = $('.dark-window');
    $(window_dark).addClass('dark-close');
  })
  $('.factories-slider').slick({
    slidesToShow: 1,
    prevArrow: $('.factories-arrow__left'),
    nextArrow: $('.factories-arrow__right'),
  })
  $('.nav-select').selectize({
      sortField: 'text'
  });
  $(".product-slider").slick({
    prevArrow: $('.factories-arrow__left'),
    nextArrow: $('.factories-arrow__right'),
  })
  $(".product-navslider").slick({
    asNavFor: '.product-slider',
    vertical: true,
    slidesToShow: 4,
    focusOnSelect: true
  })
});