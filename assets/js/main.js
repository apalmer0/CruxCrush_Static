$(function() {

  // cache the window object
  var $window = $(window);

  // parallax background effect
  $('section[data-type="background"]').each(function() {

    var $bgobj = $(this); //  assigining the object

    $(window).scroll(function() {
      // scroll the background at var speed
      // the yPos is a neg value bc we're scrolling it up

      var yPos = -($window.scrollTop() / $bgobj.data('speed'));

      //  put together our final background position
      var coords = '50% ' + yPos + 'px';

      // move the background
      $bgobj.css({ backgroundPosition: coords});
    });
  });
});
