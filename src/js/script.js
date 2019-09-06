$(document).ready(function(){

//slider
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
});

//tabs

$('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
	$(this)
		.addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
		.closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
});

// flip items

function toggleSlide(item) {
	$(item).each(function(i) {
		$(this).on('click', function(e) {
			e.preventDefault();
			$('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
			$('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
	})
});
};

toggleSlide('.catalog-item__link');
toggleSlide('.catalog-item__back');


//modal

$('[data-modal=consultation]').on('click', function() {
	$('.overlay, #consultation').fadeIn('slow');
});

$('.modal__close').on('click', function() {
	$('.overlay, #consultation, #order, #thanks').fadeOut('slow');
});

$('.button_mini').each(function (i) {
	$(this).on('click', function(){
		$('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
		$('.overlay, #order').fadeIn('slow');
	});
});

// validation

function validatingForm(item){
		$(item).validate({
			rules:{
				name: {
					required:true,
					minlength: 2
				},
				phone: 'required',
				email: {
					required: true,
					email: true
				}
			},
			messages: {
				name:{
					required: "Введите свое имя",
					minlength: jQuery.validator.format("Введите {0} символа (символов)!")
				},
				phone: "Введите свой номер телефона",
				email: {
				  required: "Введите свою почту",
				  email: "Неправильный адрес почты"
				}
			}
			});
	}
	validatingForm('#consultation-form');
	validatingForm('#consultation form');
	validatingForm('#order form');

	//phone mask
	$('input[name=phone]').mask("+375 (99) 999-99-99");
});

