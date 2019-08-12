$(document).ready(function(){
    $('.carousel__inner').slick({
      speed: 1200,
      autoplay: true,
      autoplaySpeed: 1500,
      prevArrow: '<button type="button" class="slick-prev"><img src="images/icons/leftArrow.png"></button>',
      nextArrow: '<button type="button" class="slick-next"><img src="images/icons/rightArrow.png"></button>',
      responsive: [
        {
          breakpoint: 992,
          settings: {
            dots: true,
            arrows: false
          }
        }]
  })});