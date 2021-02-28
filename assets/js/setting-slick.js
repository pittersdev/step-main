$('.slick_banner').slick({
    dots: false,
    infinite: true,
    Arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    Arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: false
            }
        },
        {
            breakpoint: 900,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,

                autoplaySpeed: 1000
            }

        },
        {
            breakpoint: 375,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,

                autoplaySpeed: 1000
            }

        }
    ]
});


$('.slider_2').slick({
    dots: false,
    infinite: true,
    autoplay: false,
    Arrows: true,
    speed: 3000,
     pauseOnHover:true,
    slidesToShow: 6,
    cssEase: 'linear',
    slidesToScroll: 6,
    responsive: [{
            breakpoint: 1280,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 900,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,

                autoplaySpeed: 1000
            }

        },
        {
            breakpoint: 375,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,

                autoplaySpeed: 1000
            }

        }
    ]
});

$('.slider_second').slick({
  dots: true,
  infinite: true,
  speed: 800,
   
  pauseOnHover:true,
  slidesToShow: 6,
  slidesToScroll: 6,
  responsive: [
    {
      breakpoint: 1281,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});