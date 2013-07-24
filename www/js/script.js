$(document).ready(function () {

  // smooth scroll to one top
  $('a[href*="#one"]').parent().click(function(event) {
    event.preventDefault();
    $('html, body').animate({
      scrollLeft: $("#one").offset().left,
      scrollTop: $("#one").offset().top
    }, 1100);
    $('a[href*="#one"]').parent().addClass('onebgcolor');
    $('a[href*="#two"]').parent().removeClass('twobgcolor');
    $('a[href*="#three"]').parent().removeClass('threebgcolor');
    $('header').removeClass('soundsheader');
    $('header h1').replaceWith("<h1>Akshay 'Shay' Narang</h1>");
  });

  // smooth scroll to two top
  $('a[href*="#two"]').parent().click(function(event) {
    event.preventDefault();
    $('html, body').animate({
      scrollLeft: $("#two").offset().left,
      scrollTop: $("#two").offset().top
    }, 1100);
    $('a[href*="#one"]').parent().removeClass('onebgcolor');
    $('a[href*="#two"]').parent().addClass('twobgcolor');
    $('a[href*="#three"]').parent().removeClass('threebgcolor');
    $('header').removeClass('soundsheader');
    $('header h1').replaceWith("<h1>Akshay 'Shay' Narang</h1>");
  });

  // smooth scroll to three top
  $('a[href*="#three"]').parent().click(function(event) {
    event.preventDefault();
    $('html, body').animate({
      scrollLeft: $("#three").offset().left,
      scrollTop: $("#three").offset().top
    }, 1100);
    $('a[href*="#one"]').parent().removeClass('onebgcolor');
    $('a[href*="#two"]').parent().removeClass('twobgcolor');
    $('a[href*="#three"]').parent().addClass('threebgcolor');
    $('header').addClass('soundsheader');
    $('header h1').replaceWith('<h1>CaramelFace</h1>');
  });

  // social network icon hover effect
  $(function() {
    $('#icons li a img')
    .mouseover(function() { 
      var src = $(this).attr("src").match(/[^\.]+/) + "2.png";
      $(this).attr("src", src);
    })
    .mouseout(function() {
      var src = $(this).attr("src").replace("2.png", ".png");
      $(this).attr("src", src);
    });
  });

  // highlight about keywords
  $('#about').find('span').css({"color": "#FF3100", "font-size": "140%"});
  // highlight sounds keywords
  $('#sounds').find('span').css({"color": "#00B64F"});
  
}); //end document.ready