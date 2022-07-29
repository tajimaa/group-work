 jQuery(window).on('scroll', function(){
    var stp = jQuery(window).scrollTop();
    var bgp = stp / 1.5;
  
    if(bgp){
      jQuery('.big-bg').css('background-position', 'center +'+ bgp + 'px');
    }
  });
