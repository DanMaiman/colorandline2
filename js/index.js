jQuery( document ).ready(function($) {


    scaleVideoContainer();

    initBannerVideoSize('.video-container .poster img');
    initBannerVideoSize('.video-container .filter');
    initBannerVideoSize('.video-container video');

    $(window).on('resize', function() {
        scaleVideoContainer();
        scaleBannerVideoSize('.video-container .poster img');
        scaleBannerVideoSize('.video-container .filter');
        scaleBannerVideoSize('.video-container video');
    });

    var divOffset = $("div.btWeb").offset().top - 50;
    var oneOffset = $("i.fa-globe").offset().top + 350;
    var twoOffset = $("i.fa-wordpress").offset().top + 350;
    var threeOffset = $("i.fa-hand-pointer-o").offset().top + 350;

    $(window).scroll(function()  {
        var scrollPos = $(window).scrollTop();
        var windowHeight = $(window).height();
        var scrollBot = scrollPos + windowHeight;


        if (scrollPos >= divOffset) {
            $("nav").addClass("navBarFade");
            $("nav.navBarFade").removeClass("navBarFade-rev");
            $(".hvr-overline-from-center").addClass("navBlackText");
            $(".navBlackText").removeClass("navBlack-rev");
            $(".navbar-brand").addClass("navBlackText");
        } else {
            $("nav.navBarFade").addClass("navBarFade-rev");
            $("nav").removeClass("navBarFade");
            $(".navBlackText").addClass("navBlack-rev");
            $(".hvr-overline-from-center").removeClass("navBlackText");
            $(".navbar-brand").removeClass("navBlackText").removeClass("navBlack-rev");
            
        }
        //black text code NEW
        if (scrollBot >= oneOffset) {
            $(".fa-globe").addClass("fadeInUp").removeClass("init");
        } else {

        }

        if (scrollBot >= oneOffset - 350) {

        } else {
            $(".fa-globe").addClass("init").removeClass("fadeInUp");
        }

        if (scrollBot >= twoOffset) {
            $(".fa-wordpress").addClass("fadeInUp").removeClass("init");
        } else {

        }

        if (scrollBot >= twoOffset - 350) {

        } else {
            $(".fa-wordpress").addClass("init").removeClass("fadeInUp");
        }

        if (scrollBot >= threeOffset) {
            $(".fa-hand-pointer-o").addClass("fadeInUp").removeClass("init");
        } else {

        }

        if (scrollBot >= threeOffset - 350) {

        } else {
            $(".fa-hand-pointer-o").addClass("init").removeClass("fadeInUp");
        }

    });

});

function scaleVideoContainer() {

    var height = $(window).height() + 5;
    var unitHeight = parseInt(height) + 'px';
    $('.homepage-hero-module').css('height',unitHeight);

}

function initBannerVideoSize(element){

    $(element).each(function(){
        $(this).data('height', $(this).height());
        $(this).data('width', $(this).width());
    });

    scaleBannerVideoSize(element);

}

function scaleBannerVideoSize(element){

    var windowWidth = $(window).width(),
    windowHeight = $(window).height() + 5,
    videoWidth,
    videoHeight;

    console.log(windowHeight);

    $(element).each(function(){
        var videoAspectRatio = $(this).data('height')/$(this).data('width');


        $(this).width(windowWidth);

        if (windowWidth >= 1000) {
            if (windowHeight > windowWidth * 0.5625) {
                videoHeight = windowHeight;
                videoWidth = videoHeight / videoAspectRatio;
                $(this).css({'margin-top' : 0, 'margin-left' : -(videoWidth - windowWidth) / 2 + 'px'});

                $(this).width(videoWidth).height(videoHeight);
            }   else {

                $(this).css({'margin-top' : 0, 'margin-left' : 0, 'width' : windowWidth, 'height' : windowWidth * 0.5625});
            }
        }

        if(windowWidth < 1000){
            videoHeight = windowHeight;
            videoWidth = videoHeight / videoAspectRatio;
            $(this).css({'margin-top' : 0, 'margin-left' : -(videoWidth - windowWidth) / 2 + 'px'});

            $(this).width(videoWidth).height(videoHeight);

            if (windowHeight < windowWidth * 0.5625) {
                $(this).css({'margin-top' : 0, 'margin-left' : 0, 'width' : windowWidth, 'height' : windowWidth * 0.5625});
            }
        }

        $('.homepage-hero-module .video-container video').addClass('fadeIn animated');

    });
}
//end Cover Video//
