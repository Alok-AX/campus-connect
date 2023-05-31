//Sticky header script
$(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll >= 100) {
        $("header").addClass("stickyheader");
    } else {
        $("header").removeClass("stickyheader");
    }
});

//changing logo url in sticky
var initialSrc = "images/logo/header-logo.png";
var scrollSrc = "images/logo/header-logo.png";

$(window).scroll(function() {
    var value = $(this).scrollTop();
    if (value > 100)
        $(".logo").attr("src", scrollSrc);
    else
        $(".logo").attr("src", initialSrc);
});


//scrolling nav
$(document).ready(function() {
    // Add scrollspy to <body>
    $('body').scrollspy({ target: ".navbar", offset: 50 });

    // Add smooth scrolling on all links inside the navbar
    $("#navbarText a, .quick-links-layout a").on('click', function(event) {
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function() {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.replace = hash;
            });
        } // End if
    });
});




// counter js start here
function inVisible(element) {
    //Checking if the element is
    //visible in the viewport
    var WindowTop = $(window).scrollTop();
    var WindowBottom = WindowTop + $(window).height();
    var ElementTop = element.offset().top;
    var ElementBottom = ElementTop + element.height();
    //animating the element if it is
    //visible in the viewport
    if ((ElementBottom <= WindowBottom) && ElementTop >= WindowTop)
        animate(element);
}

function animate(element) {
    //Animating the element if not animated before
    if (!element.hasClass('ms-animated')) {
        var maxval = element.data('max');
        var html = element.html();
        element.addClass("ms-animated");
        $({
            countNum: element.html()
        }).animate({
            countNum: maxval
        }, {
            //duration 5 seconds
            duration: 5000,
            easing: 'linear',
            step: function() {
                element.html(Math.floor(this.countNum) + html);
            },
            complete: function() {
                element.html(this.countNum + html);
            }
        });
    }

}

//When the document is ready
$(function() {
    //This is triggered when the
    //user scrolls the page
    $(window).scroll(function() {
        //Checking if each items to animate are 
        //visible in the viewport
        $("h3[data-max]").each(function() {
            inVisible($(this));
        });
    })
});

// counter js end here



$(document).ready(function() {

    $('.dynamic-team-slider-main-wrappper').slick({
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 3000,
        arrows:false,
        responsive: [{
                breakpoint: 992,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                    dots: false,
                    slidesToScroll: 1,

                }
            }
        ],
    });
});

// //banner-slider
$(document).ready(function() {
    $('.trusted-student-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false,
        arrows: true,

        dots:false,
        responsive: [{
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    adaptiveHeight: true,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    adaptiveHeight: true,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
        prevArrow: $('.banner-left'),
        nextArrow: $('.banner-right')
    });
});