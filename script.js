
  
$(function() {
$(window).scroll(function(){  
     if (window.location.hash == '' && $(window).scrollTop() == 0) {
         $('div.Nav').css({"opacity":"0.5"});
     }
});  
  
$(window).scroll(function(){  
     if (window.location.hash == '' && $(window).scrollTop() > 70) {
         $('div.Nav').css({"opacity":"0.99"});
         $('div.Nav').css({"background":"linear-gradient(141deg, #c3958a -17%, #ecede9 34%, #bad6e1 130%)"});
         $('div.Nav ul li a').css({"color":"#777"});
     }
});  

});


//
//
//
//$(function() {
//
//var doit, modern = window.requestAnimationFrame;
//
//
//
//function doSomething() {
//
//    $('div.Nav').css({"opacity":"1"});
//}
//    
//$(window).scroll(function() {
//
//    clearTimeout(doit);
//
//    doit = setTimeout(function() {
//
//        if (modern) requestAnimationFrame(doSomething);
//        else $('div.Nav').css({"opacity":"0.5"});
//
//    }, 17);
//});    
//});
//
