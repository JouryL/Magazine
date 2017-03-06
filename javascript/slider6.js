$("#slideshow6 > div:gt(0)").hide();

setInterval(function() 
{ 
  $('#slideshow6 > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#slideshow6');
},  10000);