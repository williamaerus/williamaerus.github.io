$(function () {
    // init feather icons
    feather.replace();
});

// fade in function

const fadeIns = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in-visible');
    }
  });
});

fadeIns.forEach((fade) => {
  observer.observe(fade);
});

$(window).on('load', function() {
    setTimeout(function() {
      $(".loader-wrapper").fadeOut("slow");
    }, 4000);
  
    // Add a delay of 1 second before starting the fade-in-start animation
    setTimeout(function() {
      $(".fade-in-start").each(function(i) {
        $(this).delay(500 * i).animate({opacity: 1}, 1000);
      });
    }, 1900);
  
    $(".fade-in:not(.fade-in-start)").each(function(i) {
      $(this).delay(500 * i).animate({opacity: 1}, 1000);
    });
});


// transition from loading to main
// $(window).on('load', function() {
//     setTimeout(function() {
//       $(".loader-wrapper").fadeOut("slow");
//       $("body").css("opacity", "1");
//     }, 4000);
  
//     $(".fade-in-start").each(function(i) {
//       $(this).delay(500 * i).animate({opacity: 1}, 1000);
//     });
  
//     $(".fade-in:not(.fade-in-start)").each(function(i) {
//       $(this).delay(500 * i).animate({opacity: 1}, 1000);
//     });
//   });
  