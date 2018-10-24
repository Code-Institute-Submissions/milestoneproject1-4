
//waits until page is ready
$(document).ready(function() {
// FILTER BUTTONS //    
$("#landscapes").click(function(){
    $(".thumb").css("display", "block");
	$(".thumb").not(".landscape").css("display", "none");
	});
	
$("#wildlife").click(function(){
    $(".thumb").css("display", "block");
	$(".thumb").not(".wildlife").css("display", "none");
	});	
	
	
$("#outdoor").click(function(){
    $(".thumb").css("display", "block");
	$(".thumb").not(".outdoor").css("display", "none");
	});	
	
$("#all").click(function(){
	$(".thumb").css("display", "block");
	});	
	
// VIEW PHOTO LARGE //
/*$(".imageS").click(function(){
    $(this).next().css("display", "block");
    $(".imageS").css("display", "none");
    $(".filter").css("display", "none");
	});
*/	
$(".imageS").click(function(){
    var imgURL = $(this).next().children().attr('src');
     $("body").toggleClass("fullScreen");
    $(".fullScreen").css("background-image", "url(" + imgURL + ")");
    $(".imageS").css("display", "none");
    $(".filter").css("display", "none");
    $(".close").css("display", "block")
    });

// CLOSE LARGE IMAGE AND GO BACK TO THUMBNAILS	
$(".close").click(function(){
    var imgURL = " "
    $("body").removeClass("fullScreen");
    $("body").removeAttr("style")
    $(".filter").css("display", "block");
    $(".imageS").css("display", "block");
    $(".close").css("display", "none")
    });
}); 
