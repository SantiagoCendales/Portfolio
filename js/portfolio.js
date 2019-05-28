

// Activate scrollspy
$('body').scrollspy({ 
  target: '#navbarSupportedContent' ,
  offset: 66
})

var navbarCollapse = function() {
  console.log($("#mainNav").offset().top)
  if ($("#mainNav").offset().top > 100) {
    $("#mainNav").addClass("navbar-shrink");
  } else {
    $("#mainNav").removeClass("navbar-shrink");
  }
};
// Collapse now if page is not at top
navbarCollapse();
// Collapse the navbar when page is scrolled
$(window).scroll(navbarCollapse);

$(".expertise-animation").click(function() {

  $("html, body").animate({scrollTop: $("#expertise").offset().top -60} , 400);

});
$(".portfolio-animation").click(function() {

  $("html, body").animate({scrollTop: $("#portfolio").offset().top -60} , 400);

});
$(".contact-animation").click(function() {

  $("html, body").animate({scrollTop: $("#contact").offset().top -60} , 400);

});
