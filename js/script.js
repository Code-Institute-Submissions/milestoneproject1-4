
//waits until page is ready
$(document).ready(function() {
// FILTER BUTTONS //   
$("button").click(function(){
    var filter = $(this).attr("id");
    
	
	if (filter == "all") {
	    $(".thumb").css("display", "block");
	}
	else {
	    $(".thumb").css("display", "block");
	    $(".thumb").not("." + filter).css("display", "none");
	    $(".thumb").filter("." + filter).parent().next().addClass("curFilter");
	}
})


// VIEW PHOTO LARGE //
$(".imageS").click(function(){
    var imgURL = $(this).next().children().attr('src');
    var lastClicked = $(this);
    $("body").toggleClass("fullScreen");
    $(".fullScreen").css("background-image", "url(" + imgURL + ")");
    $(".imageS").css("display", "none");
    $(".filter").css("display", "none");
    $(".close").css("display", "block");
    $(".chevrons").css("display", "block");
    $(this).next().addClass("curImg");
    });

// CLOSE LARGE IMAGE AND GO BACK TO THUMBNAILS	
$(".close").click(function(){
    $("body").removeClass("fullScreen");
    $("body").removeAttr("style")
    $(".filter").css("display", "block");
    $(".imageS").css("display", "block");
    $(".close").css("display", "none");
    $(".curImg").removeClass("curImg");
    });


// GO TO NEXT IMAGE 
$(".glyphicon-chevron-right").click(function(){
    $(".curImg").addClass("prevImg").removeClass("curImg");
    $(".imageL").filter(".curFilter").next().addClass("curImg");
    var imgURL = $(".curIMG").children().attr("src");
    $(".fullScreen").css("background-image", "url(" + imgURL + ")");
    });
/*
    $(".glyphicon-chevron-right").click(function(){
        var imgURL = $(".curImg").next().next().children().attr('src');
        $(".curImg").addClass("prevImg").removeClass("curImg");
        $(".prevImg").next().next().addClass("curImg");
        $(".prevImg").removeClass("prevImg");
        $(".fullScreen").css("background-image", "url(" + imgURL + ")");
        });
   
       
// GO TO PREVIOUS IMAGE 
$(".glyphicon-chevron-left").click(function(){
    var imgURL = $(".curImg").prev().prev().children().attr('src');
        $(".curImg").addClass("prevImg").removeClass("curImg");
        $(".prevImg").prev().prev().addClass("curImg");
        $(".prevImg").removeClass("prevImg");
        $(".fullScreen").css("background-image", "url(" + imgURL + ")");
        });
    
*/       
       
       
}); 


