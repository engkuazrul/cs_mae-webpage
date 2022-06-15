// =============================== Variables =====================================================
var windowSize = $(window).width();
var app;
var count = 0;
// =============================== End of Variables ==============================================//

$(document).ready(function() {

	app = {
		init: function() {
			//
			app.tabs();
			app.slider();
		},

		slider: function(){
			 $('.carousel-for').slick({
			  slidesToShow: 1,
			  slidesToScroll: 1,
			  arrows: false,
			  fade: true,
			  infinite: false,
			  asNavFor: '.list-carousel',
			  callback: function(){
			  		$('.categories-content').hide();
					$('.categories-content.pay-content-wrapper').show();
					$('.carousel-for').slick('setPosition');

			  }
			});

			$('.list-carousel').slick({
			  slidesToShow: 3,
			  slidesToScroll: 1,
			  asNavFor: '.carousel-for',
			  dots: true,
			  focusOnSelect: true,
			  callback: function(){
			  		$('.categories-content').hide();
					$('.categories-content.pay-content-wrapper').show();
					$('.list-carousel').slick('setPosition');
			  }
			});

			 $('.carousel-for-receive').slick({
			  slidesToShow: 1,
			  slidesToScroll: 1,
			  arrows: false,
			  fade: true,
			  infinite: false,
			  asNavFor: '.list-carousel-receive',
			  callback: function(){
			  		$('.categories-content').hide();
					$('.categories-content.receive-content-wrapper').show();
					$('.carousel-for-receive').slick('setPosition');
			  }
			});

			$('.list-carousel-receive').slick({
			  slidesToShow: 3,
			  slidesToScroll: 1,
			  asNavFor: '.carousel-for-receive',
			  dots: true,
			  focusOnSelect: true,
			  callback: function(){
			  		$('.categories-content').hide();
					$('.categories-content.receive-content-wrapper').show();
					$('.list-carousel-receive').slick('setPosition');
			  }
			});


			$('.slider-promotions').slick({
		         slidesToShow: 2,
		         slidesToScroll: 2,
		         dots: true,                 
		         autoplay: false,
		         infinite: false,
		         responsive: [
		            {
		                breakpoint: 1100,
		                settings: {
		                    slidesToShow: 1,
		                    slidesToScroll: 1,
		                    arrows: false,
		                    dots: true,
		                    infinite: true,
		                }
		            }

		        ]
		    });


		    $('.carousel-scan-pay').slick({
			    slidesToShow: 1,
			    slidesToScroll: 1,
			    autoplay: false,
			    arrows: false,
			    dots: false,
			    infinite: false,
			    responsive: [
			        {
			            breakpoint: 9999,
			            settings: "unslick"
			        },
			        {
			            breakpoint: 1100,
			            settings: {
			                slidesToShow: 1,
		                    slidesToScroll: 1,
		                    infinite: false,
		                    dots: true
			            }
			        }
			    ]
			});

			$('.carousel-wait-more').slick({
			    slidesToShow: 1,
			    slidesToScroll: 1,
			    autoplay: false,
			    arrows: false,
			    dots: false,
			    responsive: [
			        {
			            breakpoint: 9999,
			            settings: "unslick"
			        },
			        {
			            breakpoint: 1100,
			            settings: {
			                slidesToShow: 1,
		                    slidesToScroll: 1,
		                    infinite: false,
		                    dots: true
			            }
			        }
			    ]
			});
		},

		tabs: function(){
			$('.tab-navi a').click(function(){
				var o = $(this).attr('id');

				// $(this).parent().find('a').removeClass('active');
				// $(this).addClass('active');

				$('.tab-content-wrapper > div').hide();
				$('.tab-content-wrapper .'+o+'-content-wrapper').show();
			})
		},

		smoothScrolling : function(element, offset, duration) {
			var fromTop = offset || 0;
			var duration = duration || 500;

			$('html, body').animate({scrollTop: element.offset().top - fromTop}, duration);
		}
	};

		
	app.init();
})


$(function() {
  	var tab = $(".tab-switch");
  	tab.find(".tab").on("click", function() {
    var $this = $(this);

    if ($this.hasClass("active")) return;

    var direction = $this.attr("tab-direction");

    tab.removeClass("left right").addClass(direction);
    tab.find(".tab.active").removeClass("active");
    $this.addClass("active");
  });
});

