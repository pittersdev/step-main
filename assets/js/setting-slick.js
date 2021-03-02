$('.slick_banner').slick({
    dots: false,
    arrows: false,
    autoplay: true,
    speed: 1100,
    cssEase: "ease-in",
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [{
            breakpoint: 1200,
            settings: {
                dots: false,
                arrows: false,
                autoplay: true,
                speed: 1100,
                cssEase: "ease-in",
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 900,
            settings: {
                dots: false,
                arrows: false,
                autoplay: true,
                speed: 1100,
                cssEase: "ease-in",
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 480,
            settings: {
                dots: false,
                arrows: false,
                autoplay: true,
                speed: 1100,
                cssEase: "ease-in",
                slidesToShow: 1,
                slidesToScroll: 1,

            }

        },
        {
            breakpoint: 375,
            settings: {
                dots: false, 
                arrows: false,
                autoplay: true,
                speed: 1100,
                cssEase: "ease-in",
                slidesToShow: 1,
                slidesToScroll: 1,


            }

        }
    ]
});


$('.slider_2').slick({
    dots: false,
    infinite: true,
    autoplay: false,
    Arrows: true,
    speed: 1000,
    pauseOnHover: true,
    slidesToShow: 8,
    cssEase: 'linear',
    slidesToScroll: 1,
    responsive: [{
            breakpoint: 1300,
            settings: {
                slidesToShow: 6,
                slidesToScroll: 1,
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
    pauseOnHover: true,
    slidesToShow: 6,
    slidesToScroll: 6,
    responsive: [{
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


    
$('.preNavbar').slick({
    dots: false,
    prevArrow: document.querySelector("#news > ul.minimal.inline.nav.simple > li.prev"),
    nextArrow: document.querySelector("#news > ul.minimal.inline.nav.simple > li.next"),
    autoplay: false,
    speed: 1100,
    cssEase: "ease-in",
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [{
            breakpoint: 1200,
            settings: {
                dots: false,
                arrows: false,
                autoplay: true,
                speed: 1100,
                cssEase: "ease-in",
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 900,
            settings: {
                dots: false,
                arrows: false,
                autoplay: true,
                speed: 1100,
                cssEase: "ease-in",
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 480,
            settings: {
                dots: false,
                arrows: false,
                autoplay: true,
                speed: 1100,
                cssEase: "ease-in",
                slidesToShow: 1,
                slidesToScroll: 1,

            }

        },
        {
            breakpoint: 375,
            settings: {
                dots: false, 
                arrows: false,
                autoplay: true,
                speed: 1100,
                cssEase: "ease-in",
                slidesToShow: 1,
                slidesToScroll: 1,


            }

        }
    ]
});
