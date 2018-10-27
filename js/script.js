
//waits until page is ready
$(document).ready(function() {
// FILTER BUTTONS //   
$("button").click(function(){
    var filter = $(this).attr("id");
    
	
	if (filter == "all") {
	    $(".thumb").css("display", "block");
	    $(".imageL").addClass("curFilter")
	}
	else {
	    $(".thumb").css("display", "block");
	    $(".thumb").not("." + filter).css("display", "none");
	    $(".imageL").not("." + filter).removeClass("curFilter");
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
    var imgs = $(".curFilter"); 
    var curImg =  $(".curImg");
    var pos = $(".curFilter").index(curImg);
    var numPics = $(".curFilter").length;
    var curImg = $(".curFilter")[pos]; //location of current image
    var nextImg = $(".curFilter")[pos + 1]; //location of next image
    
    
    if (pos<numPics-1) {
        
        
        $(curImg).removeClass("curImg"); //remove class current image
        $(nextImg).addClass("curImg"); // add class to next image
        var imgURL = $(nextImg).children().attr('src'); //get IMGurl
        $(".fullScreen").css("background-image", "url(" + imgURL + ")"); //set backgorund to imgURL
    
    }
        else {
            $(curImg).removeClass("curImg");
            var pos = 0; // reset positon to zero
            nextImg = $(".curFilter")[pos];
            var imgURL = $(nextImg).children().attr('src');
            $(nextImg).addClass("curImg");
            $(".fullScreen").css("background-image", "url(" + imgURL + ")");
        }
    
   
    });
    
$(".glyphicon-chevron-left").click(function(){
    var curImg =  $(".curImg");
    var pos = $(".curFilter").index(curImg);
    var numPics = $(".curFilter").length;
    var curImg = $(".curFilter")[pos]; //location of current image
    var prevImg = $(".curFilter")[pos - 1]; //location of next image
    
    
    if (pos>0) {
        
        
        $(curImg).removeClass("curImg"); //remove class current image
        $(prevImg).addClass("curImg"); // add class to next image
        var imgURL = $(prevImg).children().attr('src'); //get IMGurl
        $(".fullScreen").css("background-image", "url(" + imgURL + ")"); //set backgorund to imgURL
    
    }
        else {
            $(curImg).removeClass("curImg");
            var pos = numPics-1; // reset positon to last image
            nextImg = $(".curFilter")[pos];
            var imgURL = $(nextImg).children().attr('src');
            $(nextImg).addClass("curImg");
            $(".fullScreen").css("background-image", "url(" + imgURL + ")");
        }
    
   
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


