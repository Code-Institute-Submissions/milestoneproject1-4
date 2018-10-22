
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
    $(".fullScreen").css("background-image", 'url(' + imgURL + ')');
    $("body").toggleClass("fullScreen");
   // $(".imageS").css("display", "none");
    //$(".filter").css("display", "none");
    
    });
	

	
}); 
