$(document).ready(function(){$(".menu").onePageNav({changeHash:!0}),$(".content").scrollspy({min:$(".menu").offset().top,max:$(document).height(),onEnter:function(){$(".menu").addClass("fixed")},onLeave:function(){$(".menu").removeClass("fixed")}})});