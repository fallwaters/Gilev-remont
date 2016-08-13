$(document).ready(function () {
    var h = $(window).height();

    
    

    
    $(window).scroll(function () {
        if (($(this).scrollTop() + h) >= $(".about-us").offset().top) {
            $(".about-us h2").css({ visibility: "visible" });
            $(".about-us h2").addClass('animated zoomIn');
        }

        if (($(this).scrollTop() + h) >= $(".our-scheme").offset().top) {
            $(".our-scheme h2").css({ visibility: "visible" });
            $(".our-scheme h2").addClass('animated zoomIn');
        }
        
        if (($(this).scrollTop() + h) >= $(".before").offset().top) {
            $(".before h2").css({ visibility: "visible" });
            $(".before h2").addClass('animated zoomIn');
        }

        if (($(this).scrollTop() + h) >= $(".prices").offset().top) {
            $(".prices h2").css({ visibility: "visible" });
            $(".prices h2").addClass('animated zoomIn');
        }

        if (($(this).scrollTop() + h) >= $(".our-deals").offset().top) {
            $(".our-deals h2").css({ visibility: "visible" });
            $(".our-deals h2").addClass('animated zoomIn');
        }

        if (($(this).scrollTop() + h) >= $(".our-contacts").offset().top) {
            $(".our-contacts h2").css({ visibility: "visible" });
            $(".our-contacts h2").addClass('animated zoomIn');
        }

        if (($(this).scrollTop() + h) >= $(".our-scheme .icon").offset().top) {
            $('.our-scheme .icons div.first').css({ visibility: "visible" }).addClass('animated fadeIn');
            setTimeout(function () { $('.our-scheme .icons div.second').css({ visibility: "visible" }).addClass('animated fadeIn') }, 500);
            setTimeout(function () { $('.our-scheme .icons div.third').css({ visibility: "visible" }).addClass('animated fadeIn') }, 1000);
        }

        if (($(this).scrollTop() + h) >= h * 2) {
            $('.to-top').css('display', 'inline-block');
        };

        if (($(this).scrollTop() + h) <= h * 2) {
            $('.to-top').css('display', 'none');
        };
    });
});