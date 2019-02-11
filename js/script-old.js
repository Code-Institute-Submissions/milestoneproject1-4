
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

//HOVER OVER THUMBNAILS EFFECT
    $("img").hover(function() {
        $(this).animate({opacity: 1}, 0);
        $("img").not(this).animate({opacity: 0.5}, 0);
    });



// VIEW PHOTO LARGE //
$(".imageS").click(function(){
    $(this).next().addClass("curImg");
    imgURL = $(".curImg img").attr('src');
    
    //Check img dimensions
    var image = new Image();
    image.src = imgURL;
    var width = image.naturalWidth,
        height = image.naturalHeight;
    
  
  
    //Close thumbnails/filter, open toggles for large photos
    $(".imageS").css("display", "none");
    $(".filter").css("display", "none");
    $(".close").css("display", "block");
    $(".chevrons").css("display", "block");
    $(".info").css("display", "block");
    
    //Check if image is horizontal or portrait
    //$(".gallery").toggleClass("fullScreen");
   
    
    
    if (width>height) {
        $(".gallery").css("background-size", "cover").css("background-image", "url(" + imgURL + ")");
        }
        else if (height>width) {
          $(".gallery").css("background-size", "contain").css("background-image", "url(" + imgURL + ")");
        }
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

    //Loop current filter of photos
   if (pos<numPics-1) {
        $(curImg).removeClass("curImg"); //remove class current image
        $(nextImg).addClass("curImg"); // add class to next image
        var imgURL = $(nextImg).children().attr('src'); //get IMGurl
     
        
    
    }
        else {
            $(curImg).removeClass("curImg");
            var pos = 0; // reset positon to zero
            nextImg = $(".curFilter")[pos];
            $(nextImg).addClass("curImg"); 
            var imgURL = $(nextImg).children().attr('src');
         
        
        }
        
    //Check img dimensions
    var image = new Image();
    image.src = imgURL;
    var width = image.naturalWidth,
    height = image.naturalHeight;
    
 
    
    
    if (width>height) {
        $(".fullScreen").css("background-size", "cover").css("background-image", "url(" + imgURL + ")");
        }
        else if (height>width) {
          $(".fullScreen").css("background-size", "contain").css("background-image", "url(" + imgURL + ")");
        }    
   });
   
   
   
    
$(".glyphicon-chevron-left").click(function(){
 
    
    var imgs = $(".curFilter"); 
    var curImg =  $(".curImg");
    var pos = $(".curFilter").index(curImg);
    var numPics = $(".curFilter").length;
    var curImg = $(".curFilter")[pos]; //location of current image
    var nextImg = $(".curFilter")[pos - 1]; //location of next image

    //Loop current filter of photos
   if (pos>0) {
        $(curImg).removeClass("curImg"); //remove class current image
        $(nextImg).addClass("curImg"); // add class to next image
        var imgURL = $(nextImg).children().attr('src'); //get IMGurl    
         }
        else {
            $(curImg).removeClass("curImg");
            var pos = numPics-1; // reset positon to zero
            nextImg = $(".curFilter")[pos];
            $(nextImg).addClass("curImg"); 
            var imgURL = $(nextImg).children().attr('src');
        
        }
        
    //Check img dimensions
    var image = new Image();
    image.src = imgURL;
    var width = image.naturalWidth,
    height = image.naturalHeight;
    
  
    
    
    if (width>height) {
        $(".fullScreen").css("background-size", "cover").css("background-image", "url(" + imgURL + ")");
        }
        else if (height>width) {
          $(".fullScreen").css("background-size", "contain").css("background-image", "url(" + imgURL + ")");
        }    
    });    
    

       
       
}); 


