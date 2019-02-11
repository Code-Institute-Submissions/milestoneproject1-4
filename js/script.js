//waits until page is ready
$(document).ready(function() {

    // NAVIGATION HOVER // 
    $(".navbar ul li a").hover(function() {
        $(this).hover(function() {
            $(this).animate({ opacity: 1.0 }, 100);
            $(this).css("background-color", "transparent");
        }, function() {
            //$(this).animate({opacity: 1}, 0);
            $(this).animate({ opacity: 0.8 }, 100);
        });
    });


    // FILTER BUTTONS // 
    $(".filter img.button").hover(function() {

        var filter = $(this).attr("id"); //Change opacity of filter categories other than current hovered filter
        $(".filter img").not('#' + filter).animate({ opacity: 0.5 }, 100);

    }, function() {
        $(".filter img").animate({ opacity: 1 }, 100);
    });



    $(".filter img.button").hover(function() { //Change opacity of thumbnails not related to current hovered filter
        var filter = $(this).attr("id");

        if (filter == "all") {
            $(".thumb").animate({ opacity: 1 }, 100)
        }
        else {
            $(".thumb").not('.' + filter).animate({ opacity: 0.5 }, 100);
        }
    }, function() {
        $(".thumb").animate({ opacity: 1 }, 100);
    });



    $(".filter img.button").click(function() { //Only display thumbnails selected by clicked filter
        var filter = $(this).attr("id");


        if (filter == "all") {
            $(".gallery").css("background-image", "none");
            $(".thumb").css("display", "block");
            $(".thumb").addClass("curFilter");
            $(".curFilter").css("display", "block");
            $(".curImg").removeClass("curImg");
            $(".chevrons").css("display", "none");
            $(".info").css("display", "none");
            $(".gallery").css("height", "100%");
            $(".top").css("opacity", "1");
            $(".bottom").css("display", "none");
            $(".filter img.button").animate({ opacity: 1 }, 100);
        }

        else {
            $(".gallery").css("background-image", "none");
            $(".thumb").css("display", "block");
            $(".thumb").not("." + filter).css("display", "none");
            $(".thumb").not("." + filter).removeClass("curFilter");
            $(".thumb").filter("." + filter).addClass("curFilter");
            $(".curImg").removeClass("curImg");
            $(".gallery").css("height", "100%");
            $(".top").css("opacity", "1");
            $(".bottom").css("display", "none");
            $(".filter img.button").not("#" + filter).animate({ opacity: 0.5 }, 100);
        }

        //FOOTER// 
        numPics = $("img.curFilter").length;

        if (numPics < 5) {
            $(".footer").addClass("navbar-fixed-bottom");
        }
        else if (numPics > 4) {
            $(".footer").removeClass("navbar-fixed-bottom");
        }
    });

    //HOVER OVER THUMBNAILS EFFECT
    $("img.thumb").css("opacity", 1);

    $("img.thumb").hover(function() {
        //$(this).animate({opacity: 1}, 0);
        $(".thumb").not(this).animate({ opacity: 0.5 }, 0);
    }, function() {
        //$(this).animate({opacity: 1}, 0);
        $(".thumb").not(this).animate({ opacity: 1 }, 0);
    });


    // VIEW PHOTO LARGE //
    $(".thumb").click(function() {
        $(this).addClass("curImg");

        if ($(window).width() < 960) {
            imgURL = $(".curImg").attr('src').replace("/thumbs/", "/768px/")
        }
        else {
            imgURL = $(".curImg").attr('src').replace("/thumbs/", "/1200px/")
        }

        //Close thumbnails/filter, open toggles for large photos
        $(".thumb").css("display", "none");
        $(".gallery").css("height", "60vh");
        $(".top").css("opacity", "0");
        $(".bottom").css("display", "block");
        $(".close").css("display", "block");
        $(".filter img.chevrons").css("display", "inline-block");
        $(".gallery").css("background-size", "contain").css("background-image", "url(" + imgURL + ")")
        $(".footer").removeClass("navbar-fixed-bottom");
    });




// GO TO NEXT IMAGE 
    $(".next").click(function() {

        var imgs = $(".curFilter");
        var curImg = $(".curImg");
        var pos = $(".curFilter").index(curImg);
        var numPics = $(".curFilter").length;
        var curImg = $(".curFilter")[pos]; //location of current image
        var nextImg = $(".curFilter")[pos + 1]; //location of next image


        //Loop current filter of photos
        if (pos < numPics - 1) {
            $(curImg).removeClass("curImg"); //remove class current image
            $(nextImg).addClass("curImg"); // add class to next image
        }

        else {
            $(curImg).removeClass("curImg");
            var pos = 0; // reset positon to first photo
            nextImg = $(".curFilter")[pos];
            $(nextImg).addClass("curImg");
        }

        if ($(window).width() < 960) {
            imgURL = $(".curImg").attr('src').replace("/thumbs/", "/768px/")
        }
        else {
            imgURL = $(".curImg").attr('src').replace("/thumbs/", "/1200px/")
        }

        $(".gallery").animate({
            opacity: 0
        }, 1000, function() {
            // Animation complete.

            $(".gallery").css("background-size", "contain").css("background-image", "url(" + imgURL + ")");
            $(".gallery").animate({ opacity: 1 }, 1000);
        });
     });


// GO TO PREVIOUS IMAGE
    $(".previous").click(function() {


        var imgs = $(".curFilter");
        var curImg = $(".curImg");
        var pos = $(".curFilter").index(curImg);
        var numPics = $(".curFilter").length;
        var curImg = $(".curFilter")[pos]; //location of current image
        var nextImg = $(".curFilter")[pos - 1]; //location of next image

        //Loop current filter of photos
        if (pos > 0) {
            $(curImg).removeClass("curImg"); //remove class current image
            $(nextImg).addClass("curImg"); // add class to next image
        }

        else {
            $(curImg).removeClass("curImg");
            var pos = numPics - 1; // reset positon to last photo
            nextImg = $(".curFilter")[pos];
            $(nextImg).addClass("curImg");
        }

        if ($(window).width() < 960) {
            imgURL = $(".curImg").attr('src').replace("/thumbs/", "/768px/")
        }
        else {
            imgURL = $(".curImg").attr('src').replace("/thumbs/", "/1200px/")
        }

        $(".gallery").animate({
            opacity: 0
        }, 1000, 'swing', function() {
            // Animation complete.

            $(".gallery").css("background-size", "contain").css("background-image", "url(" + imgURL + ")");
            $(".gallery").animate({ opacity: 1 }, 1000, 'swing');
        });

    });

});
