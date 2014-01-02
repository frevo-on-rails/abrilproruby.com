$(document).ready(function(){
  $('#menu').onePageNav({
      changeHash: true,
  });
  $('#content').scrollspy({
      min: $('#menu').offset().top,
      max: $(document).height(),
      onEnter: function(element, position) {
        $("#menu").addClass('fixed');
      },
      onLeave: function(element, position) {
        $("#menu").removeClass('fixed');
      }
  });
});
