$(document).ready(function(){
//    ===== My preloader sugnature =======
    var svg = new Walkway({
        selector:"#Layer_1",
        duration: 2000,
        easing: 'easeInOutCubic'
    }).draw();
    $('.svg-img').fadeIn(100);
    $('.preloader').delay(800).fadeOut(400);

 var typed3 = new Typed('.typejs', {
    strings: [' <span class="tp_color">A Designer</span>^2000', '<span class="tp_color">Developer</span>^2000', '<span class="tp_color">Debugger</span>^2000'],
    typeSpeed: 40,
    backSpeed: 0,
    smartBackspace: false, // this is a default
    loop: true
  });


//    ============ About page ===============


});
