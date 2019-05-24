// Activate scrollspy
$('body').scrollspy({ 
  target: '#navbarSupportedContent' ,
  offset: 56
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