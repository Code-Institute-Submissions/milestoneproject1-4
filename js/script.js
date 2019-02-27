//waits until page is ready
$(document).ready(function() {

    // FILTER BUTTONS //
    //Change opacity of filter categories other than current hovered filter
    $('.filter button').hover(function() {

        var filter = $(this).attr('id');
        $('.filter img').not('#' + filter).animate({ opacity: 0.5 }, 100);

    }, function() {
        $('.filter img').animate({ opacity: 1 }, 100);
    });


    //Change opacity of thumbnails not related to current hovered filter
    $('.filter button').hover(function() {
        var filter = $(this).attr('id');

        if (filter == 'all') {
            $('.thumb').animate({ opacity: 1 }, 100)
        }
        else {
            $('.thumb').not('.' + filter).animate({ opacity: 0.5 }, 100);
        }
    }, function() {
        $('.thumb').animate({ opacity: 1 }, 100);
    });


    //Only display thumbnails selected by clicked filter
    $('.filter button').click(function() {
        var filter = $(this).attr('id');


        if (filter == 'all') {
            $('.gallery').css('background-image', 'none');
            $('.thumb').css('display', 'block');
            $('.thumb').addClass('curFilter');
            $('.curFilter').css('display', 'block');
            $('.curImg').removeClass('curImg');
            //$('.chevrons').css('display', 'none');
            //$('.info').css('display', 'none');
            $('.gallery').css('height', '100%');
            $('.top').css('display', 'block');
            $('.scroll').css('display', 'none');
            $('.filter button').animate({ opacity: 1 }, 100);
        }

        else {
            $('.gallery').css('background-image', 'none');
            $('.thumb').css('display', 'block');
            $('.thumb').not('.' + filter).css('display', 'none');
            $('.thumb').not('.' + filter).removeClass('curFilter');
            $('.thumb').filter('.' + filter).addClass('curFilter');
            $('.curImg').removeClass('curImg');
            $('.gallery').css('height', '100%');
            $('.top').css('display', 'block');
            $('.scroll').css('display', 'none');
            $('.filter button').not('#' + filter).animate({ opacity: 0.5 }, 100);
        }

        //Fix footer to bottom when there are less than four thumbnails// 
        numPics = $('img.curFilter').length;

        if (numPics < 5) {
            $('.footer').addClass('navbar-fixed-bottom');
        }
        else if (numPics > 4) {
            $('.footer').removeClass('navbar-fixed-bottom');
        }
    });

    //HOVER OVER THUMBNAILS EFFECT
    $('img.thumb').css('opacity', 1);

    $('img.thumb').hover(function() {
        $('.thumb').not(this).animate({ opacity: 0.5 }, 0);
    }, function() {
        $('.thumb').not(this).animate({ opacity: 1 }, 0);
    });


    // VIEW PHOTO LARGE //
    $('.thumb').click(function() {
        $(this).addClass('curImg');

        if ($(window).width() < 960) {
            imgURL = $('.curImg').attr('src').replace('/thumbs/', '/768px/')
        }
        else {
            imgURL = $('.curImg').attr('src').replace('/thumbs/', '/1200px/')
        }

        //Close thumbnails/filter, open toggles for large photos
        $('.thumb').css('display', 'none');
        $('.gallery').css('height', '60vh');
        $('.top').css('display', 'none');
        $('.scroll').css('display', 'block');
        //$('.close').css('display', 'block');
        //$('.filter button.chevrons').css('display', 'inline-block');
        $('.gallery').css('background-size', 'contain').css('background-image', 'url(' + imgURL + ')')
        $('.footer').removeClass('navbar-fixed-bottom');
    });


    // CLOSE IMAGE
    $('button.closeit').click(function() {
        $('.gallery').css('background-image', 'none');
        $('.thumb').css('display', 'block');
        $('.thumb').addClass('curFilter');
        $('.curFilter').css('display', 'block');
        $('.curImg').removeClass('curImg');
       // $('.chevrons').css('display', 'none');
        //$('.info').css('display', 'none');
        $('.gallery').css('height', '100%');
        $('.top').css('display', 'block');
        $('.scroll').css('display', 'none');
        $('.filter button').animate({ opacity: 1 }, 100);
    })

    // GO TO NEXT IMAGE 
    $('button.next').click(function() {

        var imgs = $('.curFilter');
        var curImg = $('.curImg');
        var pos = $('.curFilter').index(curImg);
        var numPics = $('.curFilter').length;
        var curImg = $('.curFilter')[pos];
        var nextImg = $('.curFilter')[pos + 1];


        //Loop current filter of photos
        if (pos < numPics - 1) {
            $(curImg).removeClass('curImg');
            $(nextImg).addClass('curImg');
        }

        else {
            $(curImg).removeClass('curImg');
            var pos = 0;
            nextImg = $('.curFilter')[pos];
            $(nextImg).addClass('curImg');
        }

        if ($(window).width() < 960) {
            imgURL = $('.curImg').attr('src').replace('/thumbs/', '/768px/')
        }
        else {
            imgURL = $('.curImg').attr('src').replace('/thumbs/', '/1200px/')
        }

        $('.gallery').animate({
            opacity: 0
        }, 1000, function() {


            $('.gallery').css('background-size', 'contain').css('background-image', 'url(' + imgURL + ')');
            $('.gallery').animate({ opacity: 1 }, 1000);
        });
    });


    // GO TO PREVIOUS IMAGE
    $('button.previous').click(function() {
        var imgs = $('.curFilter');
        var curImg = $('.curImg');
        var pos = $('.curFilter').index(curImg);
        var numPics = $('.curFilter').length;
        var curImg = $('.curFilter')[pos];
        var nextImg = $('.curFilter')[pos - 1];

        //Loop current filter of photos
        if (pos > 0) {
            $(curImg).removeClass('curImg');
            $(nextImg).addClass('curImg');
        }

        else {
            $(curImg).removeClass('curImg');
            var pos = numPics - 1;
            nextImg = $('.curFilter')[pos];
            $(nextImg).addClass('curImg');
        }

        if ($(window).width() < 960) {
            imgURL = $('.curImg').attr('src').replace('/thumbs/', '/768px/')
        }
        else {
            imgURL = $('.curImg').attr('src').replace('/thumbs/', '/1200px/')
        }

        $('.gallery').animate({
            opacity: 0
        }, 1000, 'swing', function() {
            $('.gallery').css('background-size', 'contain').css('background-image', 'url(' + imgURL + ')');
            $('.gallery').animate({ opacity: 1 }, 1000, 'swing');
        });

    });

});
